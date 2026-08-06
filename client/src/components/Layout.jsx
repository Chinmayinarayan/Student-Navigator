import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex min-h-screen bg-[#030712] text-[#f8fafc] font-sans antialiased overflow-x-hidden">
      {/* Dynamic Background Glowing mesh */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px]"></div>
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-rose-500/5 blur-[150px]"></div>
      </div>

      <Sidebar />
      
      <main className="flex-1 overflow-x-hidden overflow-y-auto min-h-screen p-6 lg:p-10 relative z-10">
        <div className="max-w-7xl mx-auto space-y-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
