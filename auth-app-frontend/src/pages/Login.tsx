import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Github, Mail, Lock, CheckCircle2Icon, Chrome } from "lucide-react"
import { motion } from "framer-motion"
import type LoginData from "@/models/LoginData"
import { useState } from "react"
import toast from "react-hot-toast"
import { loginUser } from "@/services/AuthService"
import { useNavigate } from "react-router"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertDescription, AlertTitle,} from "@/components/ui/alert"
import useAuth from "@/auth/store";
import OAuth2Button from "@/components/OAuth2Button"
export default function Login() {
  const[loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const[loading, setLoading] = useState<boolean>(false);
  const[error, setError] = useState<any>(null);

  const navigate= useNavigate();
  const login= useAuth((state) => state.login);
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{

    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  }

  const handleFormSubmit = async (event: React.FormEvent) =>{
    event.preventDefault();
    
    //validations:
    if(loginData.email.trim() === ""){
      toast.error("Input required !");
      return;
    }
    if(loginData.password.trim() === ""){
      toast.error("Input required !");
      return;
    }
    //server call for login
    // console.log(event.target);
    // console.log("Login Data:", loginData);

    try{
      setLoading(true);
      // const userInfo= await loginUser(loginData);

      //login function: useAuth
      await login(loginData);

      toast.success("Login Successfully");
      // console.log("User Info:", userInfo);
      navigate("/dashboard");
    }
    catch(error: any){
      console.log("Login error:", error);
      setError(error);
      toast.error("Login Error!")
      // if(error?.status === 400){
      //   setError(error);
      // }else{
      //   setError(error);
      // }
    }
    finally {
      setLoading(false);
    }

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-black dark:via-slate-900 dark:to-slate-950 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} 
        className="w-full max-w-md"
      >
      {/* error section */}
      {error && (<div className="mt-2">
        <Alert variant={'destructive'}>
          <CheckCircle2Icon />
          <AlertTitle>
          {error?.response
            ?error?.response?.data?.message
            : error?.message}
          </AlertTitle>
        </Alert>
      </div>)}

        <form onSubmit={handleFormSubmit}>
        <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Login to access your futuristic authentication app
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 rounded-xl"
                  name="email"
                  value={loginData.email}
                  onChange= {handleInputChange}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 rounded-xl"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Login Button */}
            <Button disabled={loading} className="w-full cursor-pointer rounded-2xl py-6 text-lg" type="submit">
              {loading ? (
              <>
                <Spinner />
                Please wait...
              </>) :( 
              "Login"
              )}
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              <span className="text-sm text-slate-500">or continue with</span>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            </div>

            {/* OAuth Buttons */}
            <OAuth2Button />
          </CardContent>
        </Card>
        </form>
      </motion.div>
    </div>
  )
}
