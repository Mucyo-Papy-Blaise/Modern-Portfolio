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

type LucideIconComponent = React.FC<React.SVGProps<SVGSVGElement>>
export const iconMap: Record<string, LucideIconComponent> = {
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

interface IconRendererProps {
  iconName: string
  className?: string
  size?: number
}

export default function IconRenderer({ iconName, className = "w-6 h-6", size }: IconRendererProps) {
  // Get the icon component from the map, fallback to Circle if not found
  const IconComponent = iconMap[iconName] || Circle
  
  const iconProps = {
    className,
    ...(size && { width: size, height: size })
  }
  
  return <IconComponent {...iconProps} />
}

// Alternative: Create a hook for getting icons
export function useIcon(iconName: string): LucideIconComponent {
  return iconMap[iconName] || Circle
}