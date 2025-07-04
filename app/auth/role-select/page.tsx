import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { RoleSelector } from "@/components/role-selector";
import { Navbar } from "@/components/navbar";

export default async function RoleSelectPage() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/auth/login");
  }

  // Check if user already has a profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile) {
    // User already selected a role, redirect accordingly
    if (profile.role === "child") {
      redirect("/dashboard");
    } else {
      redirect("/parent-dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showAuthButtons={false} />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Astra Learning! 
          </h1>
          <p className="text-lg text-gray-600">
            Who&apos;s joining us today?
          </p>
        </div>
        
        <RoleSelector userId={user.id} />
      </div>
    </div>
  );
}