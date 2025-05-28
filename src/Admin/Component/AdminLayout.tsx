import { useState } from "react"
import { Link, useLocation,Outlet } from "react-router-dom"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: "📊" },
  { name: "Projects", href: "/admin/projects", icon: "📁" },
  {name:"Service" ,href: "/admin/services" , icon: "🎯"},
  { name: "Blogs", href: "/admin/blogs", icon: "📝" },
  { name: "Experience", href: "/admin/experience", icon: "💼" },
  { name: "Skills", href: "/admin/skills", icon: "🏆" },
  { name: "Education", href: "/admin/education", icon: "🎓" },
]

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#111111" }}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div
            className="fixed inset-y-0 left-0 flex w-64 flex-col shadow-xl border-r"
            style={{ backgroundColor: "#1A1A1A", borderColor: "#393939" }}
          >
            <div className="flex h-16 items-center justify-between px-4 border-b" style={{ borderColor: "#393939" }}>
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white hover:bg-opacity-20 hover:bg-white p-2 rounded-md"
              >
                ✕
              </button>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive ? "text-white" : "text-white hover:bg-opacity-20 hover:bg-white"
                    }`}
                    style={isActive ? { backgroundColor: "#393939" } : {}}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div
          className="flex flex-col flex-grow border-r"
          style={{ backgroundColor: "#1A1A1A", borderColor: "#393939" }}
        >
          <div className="flex h-16 items-center px-4 border-b" style={{ borderColor: "#393939" }}>
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive ? "text-white" : "text-white hover:bg-opacity-20 hover:bg-white"
                  }`}
                  style={isActive ? { backgroundColor: "#393939" } : {}}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              )
            })}
          </nav>
          <div className="border-t p-4" style={{ borderColor: "#393939" }}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <span className="text-white text-sm">👤</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Admin User</p>
                <button className="text-xs text-white hover:text-gray-300">🚪 Sign out</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div
          className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#1A1A1A", borderColor: "#393939" }}
        >
          <button
            className="lg:hidden text-white hover:bg-opacity-20 hover:bg-white p-2 rounded-md"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
        </div>

        {/* Page content */}
        <main className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Outlet/></div>
        </main>
      </div>
    </div>
  )
}
