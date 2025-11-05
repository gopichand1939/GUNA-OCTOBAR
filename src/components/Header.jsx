import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleLogout = () => {
    try {
      sessionStorage.clear();
      localStorage.clear();
    } catch (e) {}
    window.location.assign("/login");
  };

  return (
    <header className="sticky top-1 left-0 z-50 w-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.08)] h-20 flex items-center px-8 rounded-b-2xl">
      <div className="flex items-center gap-4 w-full justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition"
            title="Toggle menu"
            onClick={() => {
              const el = document.querySelector("aside");
              if (el) el.classList.toggle("hidden");
            }}
          >
            ☰
          </button>
          <h1 className="text-lg font-semibold text-slate-800 tracking-tight">InnoMMS Dashboard</h1>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative" ref={ref}>
            <div className="flex items-center gap-3">
              <div className="text-right mr-2">
                <div className="text-base text-slate-900 font-semibold leading-tight">Innovitegra Solutions</div>
                <div className="text-xs text-slate-500">Merchant ID: <span className="font-medium">MC-789456</span></div>
              </div>

              <button
                onClick={() => setOpen((s) => !s)}
                aria-haspopup="menu"
                aria-expanded={open}
                className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 hover:shadow-lg transition"
                title="Profile"
              >
                <img
                  src="/src/assets/sanap-removebg-preview.png"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            {open && (
              <div
                role="menu"
                aria-label="Profile menu"
                className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
              >
                <button
                  onClick={() => {
                    setOpen(false);
                    window.location.assign("/settings");
                  }}
                  role="menuitem"
                  className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
                >
                  ⚙️ Settings
                </button>

                <button
                  onClick={() => {
                    setOpen(false);
                    window.location.assign("/about");
                  }}
                  role="menuitem"
                  className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
                >
                  ℹ️ About Us
                </button>

                <div className="my-1 border-t border-slate-100" />

                <button
                  onClick={handleLogout}
                  role="menuitem"
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                >
                  🔒 Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
