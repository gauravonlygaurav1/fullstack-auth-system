import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Github, Mail, Lock, User, CheckCircle2Icon } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import toast from "react-hot-toast"
import type RegisterData from "@/models/RegisterData"
import { registerUser } from "@/services/AuthService"
import { useNavigate } from "react-router"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertTitle } from "@/components/ui/alert"
import OAuth2Button from "@/components/OAuth2Button"

export default function Signup() {
  const [data, setData] =  useState<RegisterData>({
    name: '',
    email: '',
    password: ''
  });
  
  const [loading, setLoading]= useState<boolean>(false);
  const [error, setError]= useState<any>(null);
  const navigate= useNavigate();

  //handling form change
  const handleInputChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
    // console.log(event.target.name);
    // console.log(event.target.value);
    setData(value =>({
      ...value,
      [event.target.name]: event.target.value
    }))
  };

  //handling form submit
  const handleFormSubmit= async (event: React.FormEvent)=>{
    event.preventDefault();
    console.log("Form submitted", data);
 
    //validations
    if(data.name.trim() === ""){
      toast.error("Name is required !");
      return;
    }
    if(data.email.trim() === ""){
      toast.error("Email is required !");
      return;
    }
    if(data.password.trim() === ""){
      toast.error("Password is required !");
      return;
    }
    //form submit for registration
    try{
      setLoading(true);
      const result= await registerUser(data);
      console.log("Registration successful", result);
      toast.success("User Register successfully...");
      setData({
        name: '',
        email: '',
        password: ''
      });
      //navigate to login page
      navigate('/login');
    }
    catch(error: any){
      console.log(error);
      toast.error("Registration Error!")
      // toast.error("Error !!")
      // setError(error);
    }
    finally{
      setLoading(false);
    }

  };


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
            <CardTitle className="text-3xl font-bold">Create Your Account</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Join the future of secure and seamless authentication
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
          <div className="mt-8 space-y-6">
            {/* Name Field */}
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Name"
                  className="pl-10 rounded-xl"
                  name="name"
                  value={data.name}
                  onChange= {handleInputChange}
                />
              </div>
            </div>

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
                  value={data.email}
                  onChange={handleInputChange}

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
                  value={data.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Signup Button */}
            <Button disabled={loading} className="w-full cursor-pointer rounded-2xl py-6 text-lg">
               {loading ? (
              <>
                <Spinner />
                Please wait...
              </>) :( 
              "Create Account"
              )}
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              <span className="text-sm text-slate-500">or sign up with</span>
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
