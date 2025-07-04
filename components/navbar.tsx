import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogOut, MessageSquare, LayoutDashboard, Sparkles } from "lucide-react";


export async function Navbar({ showAuthButtons = true }: { showAuthButtons?: boolean }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  let profile = null;
  if (user) {
    const { data } = await supabase
      .from("profiles")
      .select("role, name, age, interests")
      .eq("id", user.id)
      .single();
    profile = data;
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-slate-700 hover:text-slate-800 transition-colors">
          <div className="h-8 w-8 rounded-md bg-blue-500 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold">Astra</span>
        </Link>
        
        <div className="flex items-center gap-3">
          {user && profile ? (
            <>
              <>
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="text-slate-700 hover:text-slate-800">
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                {profile.role === "child" && profile.name && profile.age && profile.interests && (
                  <Link href="/chat">
                    <Button variant="outline" size="sm" className="text-slate-700 hover:text-slate-800">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                  </Link>
                )}
              </>
              <form action="/auth/signout" method="post" className="inline">
                <Button variant="outline" size="sm" type="submit" className="text-gray-800 hover:text-gray-800">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </form>
            </>
          ) : showAuthButtons ? (
            <>
              <Link href="/auth/login">
                <Button variant="outline" size="sm" className="text-slate-700 hover:text-slate-800 border-slate-300">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}