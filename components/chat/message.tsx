import { cn } from "@/lib/utils";
import { Sparkles, User } from "lucide-react";

interface MessageProps {
  content: string;
  role: "user" | "assistant";
  timestamp?: Date;
}

export function Message({ content, role, timestamp }: MessageProps) {
  const isUser = role === "user";
  
  return (
    <div className={cn("flex w-full gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex-shrink-0 flex flex-col items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-blue-600" />
          </div>
          <span className="text-xs text-gray-500 font-medium">Astra</span>
        </div>
      )}
      
      <div className={cn(
        "max-w-[70%] rounded-lg px-3 py-2 shadow-sm",
        isUser 
          ? "bg-purple-600 text-white" 
          : "bg-white border border-gray-200"
      )}>
        <p className={cn(
          "text-sm leading-relaxed",
          isUser ? "text-white" : "text-gray-800"
        )}>
          {content}
        </p>
        {timestamp && (
          <p className={cn(
            "text-xs mt-1",
            isUser ? "text-purple-100" : "text-gray-400"
          )}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
      
      {isUser && (
        <div className="flex-shrink-0">
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="h-4 w-4 text-blue-600" />
          </div>
        </div>
      )}
    </div>
  );
}