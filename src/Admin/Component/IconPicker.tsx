// src/Component/IconPicker.tsx
import { useState } from "react"
import { 
  Circle, 
  Square, 
  Triangle, 
  Heart, 
  Star, 
  Home, 
  User, 
  Settings, 
  Mail, 
  Phone, 
  Globe, 
  Camera, 
  Bookmark, 
  Calendar, 
  Clock,
  Code,
  Database,
  Download,
  Edit,
  File,
  Folder,
  Image,
  Lock,
  Map,
  Music,
  Search,
  Shield,
  Trash,
  Upload,
  Wifi,
  Zap
} from "lucide-react"
import { Dialog } from "@headlessui/react"
import Button from "./Button"

type LucideIconComponent = React.FC<React.SVGProps<SVGSVGElement>>

// Define a curated list of commonly used icons
const iconMap: Record<string, LucideIconComponent> = {
  Circle,
  Square,
  Triangle,
  Heart,
  Star,
  Home,
  User,
  Settings,
  Mail,
  Phone,
  Globe,
  Camera,
  Bookmark,
  Calendar,
  Clock,
  Code,
  Database,
  Download,
  Edit,
  File,
  Folder,
  Image,
  Lock,
  Map,
  Music,
  Search,
  Shield,
  Trash,
  Upload,
  Wifi,
  Zap
}

const validIcons = Object.entries(iconMap)

interface IconPickerProps {
  selectedIcon: string
  onChange: (iconName: string) => void
}

export default function IconPicker({ selectedIcon, onChange }: IconPickerProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Safely get the selected icon with fallback
  const SelectedIcon = iconMap[selectedIcon] || Circle

  console.log('Available icons:', Object.keys(iconMap))
  console.log('Selected icon:', selectedIcon)
  console.log('Total icons:', validIcons.length)

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <Button type="button" onClick={() => setIsOpen(true)} className="flex items-center gap-2">
          <SelectedIcon className="w-5 h-5" />
          {selectedIcon}
        </Button>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg max-h-[80vh] w-full max-w-2xl overflow-y-auto p-6">
            <Dialog.Title className="text-lg font-bold mb-4 text-gray-900">
              Pick an Icon ({validIcons.length} available)
            </Dialog.Title>
            
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {validIcons.map(([iconName, Icon]) => (
                <button
                  key={iconName}
                  className={`flex flex-col items-center justify-center text-xs text-gray-700 hover:bg-gray-100 p-3 rounded-lg border transition-all ${
                    selectedIcon === iconName ? 'bg-blue-100 border-blue-300' : 'border-gray-200'
                  }`}
                  onClick={() => {
                    onChange(iconName)
                    setIsOpen(false)
                  }}
                  title={iconName}
                >
                  <Icon className="w-6 h-6 mb-1" />
                  <span className="truncate w-full text-center text-[10px]">{iconName}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-6 flex justify-end text-white w-fit">
              <Button type="button" onClick={() => setIsOpen(false)} className="bg-red-600 hover:bg-red-500">
                Close
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}