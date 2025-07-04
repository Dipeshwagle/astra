import { Users, BarChart3, Calendar, Settings } from "lucide-react";

interface ParentDashboardProps {
  name?: string;
}

export function ParentDashboard({ name }: ParentDashboardProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Welcome Header */}
      <div className="mb-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-700 mb-2">
          Welcome back{name ? `, ${name}` : ""}! 
        </h2>
        <p className="text-base text-slate-600">
          Monitor your child&apos;s learning progress and achievements.
        </p>
      </div>

      {/* Parent Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700">Child Profiles</h3>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Manage and monitor your children&apos;s learning profiles and progress.
          </p>
          <div className="text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-md">
            Coming Soon
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700">Progress Reports</h3>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            View detailed reports on your child&apos;s skill development and achievements.
          </p>
          <div className="text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-md">
            Coming Soon
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700">Activity Schedule</h3>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Set learning goals and schedule activities for your child.
          </p>
          <div className="text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-md">
            Coming Soon
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg p-6 border border-slate-200">
        <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Settings className="h-5 w-5 text-slate-600" />
          Parent Dashboard Features
        </h3>
        <div className="text-center py-8">
          <p className="text-slate-600 mb-4">
            Parent features are being developed to provide you with comprehensive insights into your child&apos;s learning journey.
          </p>
          <p className="text-sm text-slate-500">
            Features coming soon: Child progress tracking, learning analytics, goal setting, and communication tools.
          </p>
        </div>
      </div>
    </div>
  );
}