"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Baby } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

export function RoleSelector({ userId }: { userId: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const handleRoleSelection = async (role: "child" | "parent") => {
    setIsLoading(true);
    
    const { error } = await supabase
      .from("profiles")
      .insert({ id: userId, role });

    if (error) {
      console.error("Error creating profile:", error);
      setIsLoading(false);
      return;
    }

    if (role === "child") {
      router.push("/auth/onboarding");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
      <Card 
        className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-slate-300"
        onClick={() => !isLoading && handleRoleSelection("child")}
      >
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center">
            <Baby className="h-8 w-8 text-slate-600" />
          </div>
          <CardTitle className="text-xl text-slate-700">I&apos;m a Child</CardTitle>
          <CardDescription className="text-sm">
            Learn with Astra and develop amazing life skills!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            className="w-full bg-slate-600 hover:bg-slate-700 text-white" 
            size="lg"
            disabled={isLoading}
          >
            Continue as Child
          </Button>
        </CardContent>
      </Card>

      <Card 
        className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-200"
        onClick={() => !isLoading && handleRoleSelection("parent")}
      >
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <CardTitle className="text-xl text-slate-700">I&apos;m a Parent</CardTitle>
          <CardDescription className="text-sm">
            Support your child&apos;s learning journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white" 
            size="lg"
            disabled={isLoading}
          >
            Continue as Parent
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}