import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { OnboardingForm } from "@/components/onboarding-form";
import { Navbar } from "@/components/navbar";

export default async function OnboardingPage() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/auth/login");
  }

  // Check if user has already completed onboarding
  const { data: profile } = await supabase
    .from("profiles")
    .select("role, name")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "child") {
    redirect("/auth/role-select");
  }

  if (profile.name) {
    // Already completed onboarding
    redirect("/chat");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showAuthButtons={false} />
      
      <div className="container mx-auto px-4 py-16 max-w-md">
        <OnboardingForm userId={user.id} />
      </div>
    </div>
  );
}