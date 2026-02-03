import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useAuth from "@/auth/store";
import { getCurrentUser } from "@/services/AuthService";
import type User from "@/models/User";
import { toast } from "react-hot-toast";

function Userhome() {

  const user= useAuth((state)=> state.user);
  const [user1, setUser1]= useState<User | null>(null);

  const getUserData= async ()=>{
    if(!user?.email) return;
    
    try{
      const user1= await getCurrentUser(user.email);
      setUser1(user1);
    }catch(error){
      console.log(error);
      toast.error("Error in fetching user data");
    }
  }
  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back, {user?.name} 👋
        </h1>
        <p className="text-muted-foreground">
          Here’s a overview for you...
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Logins" value="42" />
        <StatCard title="Profile Views" value="128" />
        <StatCard title="Tasks Completed" value="19" />
      </div>

      {/* Actions + Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-3">
            <Button>Edit Profile</Button>
            <Button variant="outline">Settings</Button>
            <Button onClick={getUserData} variant="outline">Getting Current User</Button>
            <p>{user1?.name}</p>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✔ Logged in</li>
              <li>✔ Updated profile</li>
              <li>✔ Completed a task</li>
              <li>✔ Logged out</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
};


export default Userhome
