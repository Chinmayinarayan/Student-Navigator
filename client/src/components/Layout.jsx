import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

function Layout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#030712] text-[#f8fafc] font-sans antialiased overflow-x-hidden">
      {/* Dynamic Background Glowing mesh */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px]"></div>
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[150px]"></div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block shrink-0 relative z-20">
        <Sidebar />
      </div>

      {/* Mobile Drawer Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative z-10 w-64 h-full animate-fadeIn">
            <Sidebar onClose={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        {/* Mobile Top Header */}
        <header className="lg:hidden sticky top-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center justify-between z-30">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Open Navigation Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
              🚀
            </div>
            <span className="text-xs font-black tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Student Navigator
            </span>
          </Link>

          <Link
            to="/profile"
            className="h-8 w-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-cyan-400"
          >
            👤
          </Link>
        </header>

        {/* Page Outlet */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
