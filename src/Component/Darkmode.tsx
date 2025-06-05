import { Globe, Settings, X } from "lucide-react"
import { useContext, useState } from "react"
import clsx from 'clsx'
import { themeContext } from "../Context/ThemeContext"

const Darkmode = () => {
  const { theme, toggleTheme } = useContext(themeContext)
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)

  const toggleSettingsOpen = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }

  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 z-50">
      {/* Settings Button (Always visible) */}
      <div
        onClick={toggleSettingsOpen}
        className={clsx(
          'flex p-2 w-10 h-10 rounded-full items-center justify-center cursor-pointer transition-all duration-300',
          'bg-Color5 hover:bg-Color6',
          isSettingsOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        )}
      >
        <Settings className="text-Color1 animate-spin" />
      </div>

      {/* Sliding Settings Panel */}
      <div
        className={clsx(
          'absolute right-0 mt-2 w-56 rounded-lg bg-white dark:bg-gray-800 shadow-lg p-4 z-10',
          'transform transition-all duration-500',
          isSettingsOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        )}
      >
        {/* Top Row with Language + Close */}
        <div className="flex flex-row justify-between items-center mb-3">
          <div className="flex items-center gap-2 text-gray-800 dark:text-white">
            <Globe className="w-4 h-4" />
            <span>English</span>
          </div>
          <X
            onClick={toggleSettingsOpen}
            className="dark:text-white text-Color1 text-sm cursor-pointer"
          />
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full dark:bg-white bg-Color1 mb-3" />

        {/* Theme Toggle */}
        <div
          className={clsx(
            'flex items-center justify-between p-1 rounded-full cursor-pointer',
            'bg-gray-300 dark:bg-gray-600'
          )}
          onClick={toggleTheme}
        >
          <div
            className={clsx(
              'h-6 w-6 rounded-full flex items-center justify-center transition-all duration-300',
              theme === 'dark' ? 'translate-x-full bg-white' : 'bg-gray-800'
            )}
            style={{ width: '50%' }}
          >
            <span className="text-xs">
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Darkmode
