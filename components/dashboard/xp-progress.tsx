import { Progress } from "@/components/ui/progress";

interface XPProgressProps {
  current: number;
  max: number;
}

export function XPProgress({ current, max }: XPProgressProps) {
  const percentage = (current / max) * 100;

  return (
    <div className="bg-blue-50 rounded-lg shadow-sm p-6 border border-blue-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-blue-800">Experience Points</h3>
        <div className="text-2xl font-bold text-blue-700">
          {current} XP
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-blue-600">
          <span>Level Progress</span>
          <span>{Math.round(percentage)}% ({current} / {max} XP)</span>
        </div>
        <Progress value={percentage} className="h-3" />
        <p className="text-sm text-blue-600 mt-2">
          {max - current} XP until next level!
        </p>
      </div>
    </div>
  );
}