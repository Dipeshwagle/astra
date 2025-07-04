import { SignUpForm } from "@/components/sign-up-form";
import { Navbar } from "@/components/navbar";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showAuthButtons={false} />
      
      <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}