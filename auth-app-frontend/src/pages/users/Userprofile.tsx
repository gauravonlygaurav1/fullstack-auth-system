import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/auth/store";

function Userprofile() {

    const formatDate = (dateString?: string) => {
      if (!dateString) return "—";

      return new Date(dateString).toLocaleDateString("en-GB");
    };

    const user = useAuth((state) => state.user);
    return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Profile
        </h1>
        <p className="text-muted-foreground">
          Manage your personal information and account settings
        </p>
      </div>

      {/* Profile Card */}
      <Card>
        <CardContent className="flex flex-col md:flex-row gap-6 p-6">

          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-3 min-w-[150px]">
            <Avatar className="w-32 h-32">
              <AvatarImage src={user.avatar} alt={user?.name} />
              <AvatarFallback>
                {user.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>

            <Button size="sm" variant="outline">
              Change Photo
            </Button>
          </div>

          {/* Info Section */}
          <div className="flex-1 space-y-4">
            <InfoRow label="Full Name" value={user?.name} />
            <InfoRow label="Email" value={user?.email} />
            <InfoRow label="Provider" value={user?.provider} />
            <InfoRow label="Enabled" value={user?.enabled ? "Yes" : "No"} />
            <InfoRow label="Member Since" value={formatDate(user?.createdAt)} />
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Edit Profile</Button>
          <Button variant="outline">Change Password</Button>
          <Button variant="destructive">Logout</Button>
        </CardContent>
      </Card>
    </div>
  );
};

const InfoRow = ({ label, value }) => {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
};

export default Userprofile
