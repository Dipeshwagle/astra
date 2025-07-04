import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { ChildDashboard } from "@/components/dashboard/child-dashboard";
import { ParentDashboard } from "@/components/dashboard/parent-dashboard";

export default async function DashboardPage() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/auth/login");
  }

  // Get user profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("role, name")
    .eq("id", user.id)
    .single();

  if (!profile) {
    redirect("/auth/role-select");
  }

  // Only redirect to onboarding if child role without name
  if (profile.role === "child" && !profile.name) {
    redirect("/auth/onboarding");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {profile.role === "child" && profile.name && (
        <ChildDashboard name={profile.name} />
      )}
      
      {profile.role === "parent" && (
        <ParentDashboard name={profile.name} />
      )}
    </div>
  );
}