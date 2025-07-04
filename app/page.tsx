import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket, Star, Heart } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Redirect signed-in users to dashboard
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Welcome to <span className="text-blue-600">Astra Learning</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Where kids develop real-world life skills through fun conversations with their AI mentor, Astra!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/auth/sign-up">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-3 shadow-lg">
                Get Started
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="text-base px-8 py-3 text-slate-700 border-slate-300 hover:bg-slate-50">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="h-14 w-14 rounded-full bg-orange-400 flex items-center justify-center mx-auto mb-4">
              <Star className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-700">Build Life Skills</h3>
            <p className="text-slate-600 text-sm">
              Learn communication, problem-solving, and leadership through engaging conversations
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="h-14 w-14 rounded-full bg-blue-400 flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-700">Track Progress</h3>
            <p className="text-slate-600 text-sm">
              Earn XP, level up skills, and unlock achievements as you learn and grow
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="h-14 w-14 rounded-full bg-green-400 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-700">Safe & Supportive</h3>
            <p className="text-slate-600 text-sm">
              A kind, encouraging AI mentor designed specifically for children aged 8-13
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-lg shadow-sm p-8 border border-slate-200">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Ready to start your learning adventure?</h2>
          <p className="text-base text-slate-600 mb-6">
            Join thousands of kids who are building essential life skills with Astra!
          </p>
          <Link href="/auth/sign-up">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-3 shadow-lg">
              Start Learning Today
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}