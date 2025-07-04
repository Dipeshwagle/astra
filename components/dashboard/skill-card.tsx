import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  level: number;
  progress: number;
  icon: LucideIcon;
  color: string;
}

export function SkillCard({ name, level, progress, icon: Icon, color }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200 hover:border-slate-300 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-full ${color} flex items-center justify-center`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-700 text-sm">{name}</h4>
            <p className="text-xs text-slate-500">Level {level}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-600">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}