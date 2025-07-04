import { MessageSquare, Trophy, Award } from "lucide-react";
import { XPProgress } from "./xp-progress";
import { SkillCard } from "./skill-card";
import { AchievementBadge } from "./achievement-badge";

interface ChildDashboardProps {
  name: string;
}

export function ChildDashboard({ name }: ChildDashboardProps) {
  // Static data for the prototype
  const skills = [
    { name: "Communication", level: 3, progress: 65, icon: MessageSquare, color: "bg-teal-400" },
    { name: "Problem Solving", level: 2, progress: 40, icon: MessageSquare, color: "bg-green-400" },
    { name: "Leadership", level: 1, progress: 80, icon: MessageSquare, color: "bg-orange-400" },
  ];

  const badges = [
    { name: "First Chat", description: "Completed your first conversation with Astra", icon: MessageSquare, color: "bg-green-400" },
    { name: "Quick Learner", description: "Learned 3 new skills in one week", icon: Trophy, color: "bg-blue-400" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Welcome Header */}
      <div className="mb-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-700 mb-2">
          Welcome back, {name}! 
        </h2>
        <p className="text-base text-slate-600">
          Let's continue your learning journey today!
        </p>
      </div>

      {/* XP Progress */}
      <div className="mb-8">
        <XPProgress current={420} max={500} />
      </div>

      {/* Skills Grid */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-orange-500" />
          Your Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-green-500" />
          Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {badges.map((badge) => (
            <AchievementBadge key={badge.name} {...badge} />
          ))}
        </div>
      </div>
    </div>
  );
}