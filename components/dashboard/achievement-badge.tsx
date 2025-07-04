import { LucideIcon } from "lucide-react";

interface AchievementBadgeProps {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  unlocked?: boolean;
}

export function AchievementBadge({ 
  name, 
  description, 
  icon: Icon, 
  color,
  unlocked = true 
}: AchievementBadgeProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 border transition-all ${
      unlocked ? 'border-green-200 hover:shadow-md' : 'border-slate-200 opacity-50'
    }`}>
      <div className="flex items-center gap-4">
        <div className={`h-12 w-12 rounded-full ${
          unlocked ? color : 'bg-slate-300'
        } flex items-center justify-center shadow-sm`}>
          <Icon className={`h-6 w-6 ${unlocked ? 'text-white' : 'text-slate-500'}`} />
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold text-sm ${unlocked ? 'text-slate-700' : 'text-slate-500'}`}>
            {name}
          </h4>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}