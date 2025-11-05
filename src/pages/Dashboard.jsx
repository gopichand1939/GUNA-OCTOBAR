import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
  Briefcase,
  CheckSquare,
  MessageSquare,
  BarChart3,
  Users,
  Bell,
  Calendar,
  Settings,
  TrendingUp,
  Activity,
  DollarSign,
  Clock,
} from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { motion, AnimatePresence } from "framer-motion";

// simple count-up hook (no external deps)
function useCountUp(target, duration = 800) {
  const [value, setValue] = useState(0);
  const rafRef = useRef();
  useEffect(() => {
    let start;
    const from = 0;
    const to = Number(target) || 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.round(from + (to - from) * progress));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);
  return value;
}

function CollapsibleCard({ title, subtitle, children, icon }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      transition={{ layout: { duration: 0.25 } }}
      className="rounded-xl bg-white p-4 shadow-sm"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50">
            {icon}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700">{title}</h4>
            <p className="text-xs text-slate-500">{subtitle}</p>
          </div>
        </div>
        <button
          onClick={() => setOpen((s) => !s)}
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-3 overflow-hidden text-sm text-slate-600"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Dashboard() {
  const { pathname } = useLocation();
  const isRoot = pathname === "/dashboard" || pathname === "/dashboard/" || pathname === "/body" || pathname === "/body/";

  const cards = [
    { title: "Projects", value: "12", subtitle: "active", icon: <Briefcase className="w-6 h-6 text-blue-500" /> },
    { title: "Tasks", value: "34", subtitle: "pending", icon: <CheckSquare className="w-6 h-6 text-green-500" /> },
    { title: "Messages", value: "5", subtitle: "unread", icon: <MessageSquare className="w-6 h-6 text-purple-500" /> },
    { title: "Reports", value: "3", subtitle: "new", icon: <BarChart3 className="w-6 h-6 text-orange-500" /> },
    { title: "Team", value: "18", subtitle: "members", icon: <Users className="w-6 h-6 text-pink-500" /> },
    { title: "Alerts", value: "7", subtitle: "notifications", icon: <Bell className="w-6 h-6 text-red-500" /> },
    { title: "Calendar", value: "4", subtitle: "events today", icon: <Calendar className="w-6 h-6 text-teal-500" /> },
    { title: "Settings", value: "—", subtitle: "manage", icon: <Settings className="w-6 h-6 text-gray-500" /> },
  ];

  const insights = [
    { title: "Growth Rate", value: "+14.5%", desc: "Monthly user growth", icon: <TrendingUp className="w-7 h-7 text-green-600" />, bg: "bg-green-50" },
    { title: "System Uptime", value: "99.9%", desc: "Last 30 days", icon: <Activity className="w-7 h-7 text-blue-600" />, bg: "bg-blue-50" },
    { title: "Revenue", value: "$12,450", desc: "This month", icon: <DollarSign className="w-7 h-7 text-yellow-600" />, bg: "bg-yellow-50" },
    { title: "Avg. Response", value: "1m 23s", desc: "Support avg.", icon: <Clock className="w-7 h-7 text-purple-600" />, bg: "bg-purple-50" },
  ];

  // sample pie data
  const pieDataA = [
    { name: "Desktop", value: 60 },
    { name: "Mobile", value: 30 },
    { name: "Tablet", value: 10 },
  ];
  const pieDataB = [
    { name: "Free", value: 55 },
    { name: "Pro", value: 35 },
    { name: "Enterprise", value: 10 },
  ];
  const COLORS = ["#60A5FA", "#34D399", "#FBBF24", "#F472B6", "#A78BFA"];

  return (
    <div className="flex min-h-screen bg-[#f6f9ff]">
      <Sidebar />
      <div className="flex flex-1 flex-col md:ml-72">
        <Header />
        <main className="p-6 lg:p-8">
          {isRoot ? (
            <div className="space-y-8">
              {/* Welcome */}
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-800">Welcome to InnoMMS Dashboard</h2>
                <p className="mt-2 text-sm text-slate-500">Use the sidebar to navigate between sections.</p>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((c, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50">{c.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-700">{c.title}</h3>
                      <p className="text-sm text-slate-500">{c.value} <span className="text-xs">{c.subtitle}</span></p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Insights */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Insights Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {insights.map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-4 rounded-xl ${item.bg} p-5 shadow-sm`}>
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/60">{item.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-700">{item.title}</h4>
                        <p className="text-sm font-medium text-slate-900">{item.value}</p>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* New Section: Analytics (Pie charts) */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Analytics</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <h4 className="text-md font-semibold text-slate-700 mb-2">Traffic Sources</h4>
                    <div className="w-full h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={pieDataA} dataKey="value" nameKey="name" innerRadius={36} outerRadius={64} paddingAngle={2}>
                            {pieDataA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-3 flex gap-3 flex-wrap">
                      {pieDataA.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="w-3 h-3 rounded-sm" style={{ background: COLORS[i % COLORS.length] }} />
                          <span>{d.name} — {d.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <h4 className="text-md font-semibold text-slate-700 mb-2">Plan Distribution</h4>
                    <div className="w-full h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={pieDataB} dataKey="value" nameKey="name" innerRadius={36} outerRadius={64} paddingAngle={2}>
                            {pieDataB.map((entry, index) => (
                              <Cell key={`cellb-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-3 flex gap-3 flex-wrap">
                      {pieDataB.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="w-3 h-3 rounded-sm" style={{ background: COLORS[i % COLORS.length] }} />
                          <span>{d.name} — {d.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary Panel with animated counts */}
                  <div className="rounded-xl bg-white p-4 shadow-sm flex flex-col">
                    <h4 className="text-md font-semibold text-slate-700 mb-2">Quick Summary</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-slate-50">
                        <div className="text-xs text-slate-500">Active Users</div>
                        <div className="text-lg font-semibold text-slate-800">
                          {useCountUp(12450)}
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50">
                        <div className="text-xs text-slate-500">New Signups</div>
                        <div className="text-lg font-semibold text-slate-800">{useCountUp(320)}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50">
                        <div className="text-xs text-slate-500">MRR</div>
                        <div className="text-lg font-semibold text-slate-800">${useCountUp(12450)}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50">
                        <div className="text-xs text-slate-500">Avg. Latency</div>
                        <div className="text-lg font-semibold text-slate-800">{useCountUp(123)} ms</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Section: Activity / Collapsible left (interactive panels) */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Activity</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <CollapsibleCard title="Recent Deploys" subtitle="Last 24 hours" icon={<Briefcase className="w-5 h-5 text-blue-500" />}>
                    <ul className="space-y-2">
                      <li>v1.2.3 — Backend — <span className="text-xs text-slate-500">5m ago</span></li>
                      <li>v1.2.2 — Frontend — <span className="text-xs text-slate-500">30m ago</span></li>
                      <li>Hotfix — Auth — <span className="text-xs text-slate-500">2h ago</span></li>
                    </ul>
                  </CollapsibleCard>

                  <CollapsibleCard title="Support Tickets" subtitle="Open / Priority" icon={<MessageSquare className="w-5 h-5 text-purple-500" />}>
                    <ul className="space-y-2">
                      <li>Ticket #1245 — Payment issue — <span className="text-xs text-slate-500">High</span></li>
                      <li>Ticket #1242 — Login bug — <span className="text-xs text-slate-500">Medium</span></li>
                    </ul>
                  </CollapsibleCard>

                  <CollapsibleCard title="Changelogs" subtitle="Recent" icon={<BarChart3 className="w-5 h-5 text-orange-500" />}>
                    <ul className="space-y-2">
                      <li>Updated UI for dashboard filters</li>
                      <li>Improved API caching</li>
                    </ul>
                  </CollapsibleCard>
                </div>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
}
