import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ChatInterface } from "@/components/chat/chat-interface";
import { Navbar } from "@/components/navbar";

export default async function ChatPage() {
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

  if (!profile || profile.role !== "child") {
    redirect("/auth/role-select");
  }

  if (!profile.name) {
    redirect("/auth/onboarding");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Chat Interface */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <ChatInterface userName={profile.name} />
      </div>
    </div>
  );
}