"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { Sparkles } from "lucide-react";

export function OnboardingForm({ userId }: { userId: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    interests: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const supabase = createClient();
    
    const { error } = await supabase
      .from("profiles")
      .update({
        name: formData.name,
        age: parseInt(formData.age),
        interests: formData.interests
      })
      .eq("id", userId);

    if (error) {
      console.error("Error updating profile:", error);
      setIsLoading(false);
      return;
    }

    router.push("/chat");
  };

  return (
    <Card className="w-full border shadow-md">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto mb-2 h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center">
          <Sparkles className="h-7 w-7 text-slate-600" />
        </div>
        <CardTitle className="text-xl">Tell us about yourself!</CardTitle>
        <CardDescription className="text-sm">
          This helps Astra personalize your learning adventure
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              What&apos;s your name?
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="text-sm h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age" className="text-sm font-medium">
              How old are you?
            </Label>
            <Input
              id="age"
              type="number"
              min="8"
              max="13"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              required
              className="text-sm h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests" className="text-sm font-medium">
              What do you love to do?
            </Label>
            <Textarea
              id="interests"
              placeholder="Tell us about your hobbies, favorite subjects, or anything you enjoy!"
              value={formData.interests}
              onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
              className="min-h-[80px] text-sm resize-none placeholder:text-gray-400"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-10 text-sm font-medium bg-slate-600 hover:bg-slate-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Starting your journey..." : "Start Learning with Astra!"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}