/**
 * Iconos SVG. Se construyen a partir de los nodos de Lucide Icons
 * (paquete npm `lucide`) serializados a cadenas SVG en línea.
 * Importar iconos individuales permite que el bundler elimine el resto.
 */
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Bookmark,
  Calendar,
  Car,
  ChartColumn,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleAlert,
  CircleCheck,
  CircleHelp,
  CirclePlay,
  CircleStop,
  CircleX,
  ClipboardCheck,
  Clock,
  Compass,
  Download,
  ExternalLink,
  Eye,
  EyeOff,
  Flag,
  Flame,
  Gauge,
  GraduationCap,
  Heart,
  House,
  Info,
  Languages,
  Layers,
  Lightbulb,
  ListOrdered,
  MapPin,
  Menu,
  OctagonAlert,
  Pause,
  Pencil,
  Play,
  RefreshCw,
  RotateCcw,
  Route,
  Scale,
  Search,
  Settings,
  ShieldCheck,
  Signpost,
  Sparkles,
  SquarePen,
  Star,
  Target,
  Trash2,
  TrafficCone,
  TrendingUp,
  TriangleAlert,
  Trophy,
  Upload,
  Volume2,
  X
} from 'lucide';

const registry = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  award: Award,
  'badge-check': BadgeCheck,
  'book-open': BookOpen,
  bookmark: Bookmark,
  calendar: Calendar,
  car: Car,
  'chart-column': ChartColumn,
  check: Check,
  'check-check': CheckCheck,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  circle: Circle,
  'circle-alert': CircleAlert,
  'circle-check': CircleCheck,
  'circle-help': CircleHelp,
  'circle-play': CirclePlay,
  'circle-stop': CircleStop,
  'circle-x': CircleX,
  'clipboard-check': ClipboardCheck,
  clock: Clock,
  compass: Compass,
  download: Download,
  'external-link': ExternalLink,
  eye: Eye,
  'eye-off': EyeOff,
  flag: Flag,
  flame: Flame,
  gauge: Gauge,
  'graduation-cap': GraduationCap,
  heart: Heart,
  house: House,
  info: Info,
  languages: Languages,
  layers: Layers,
  lightbulb: Lightbulb,
  'list-ordered': ListOrdered,
  'map-pin': MapPin,
  menu: Menu,
  'octagon-alert': OctagonAlert,
  pause: Pause,
  pencil: Pencil,
  play: Play,
  'refresh-cw': RefreshCw,
  'rotate-ccw': RotateCcw,
  route: Route,
  scale: Scale,
  search: Search,
  settings: Settings,
  'shield-check': ShieldCheck,
  signpost: Signpost,
  sparkles: Sparkles,
  'square-pen': SquarePen,
  star: Star,
  target: Target,
  'trash-2': Trash2,
  'traffic-cone': TrafficCone,
  'trending-up': TrendingUp,
  'triangle-alert': TriangleAlert,
  trophy: Trophy,
  upload: Upload,
  'volume-2': Volume2,
  x: X
};

function serializeChild(child) {
  const [tag, attrs = {}, children = []] = child;
  const attrString = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
  const inner = Array.isArray(children) ? children.map(serializeChild).join('') : '';
  return `<${tag}${attrString ? ` ${attrString}` : ''}>${inner}</${tag}>`;
}

/**
 * Devuelve el marcado SVG de un icono.
 * @param {string} name clave kebab-case del registro
 * @param {{ size?: number, className?: string, strokeWidth?: number, label?: string }} options
 */
export function icon(name, options = {}) {
  const node = registry[name];
  if (!node) return '';
  const size = options.size ?? 20;
  const strokeWidth = options.strokeWidth ?? 2;
  const [, attrs, children] = node;

  const merged = {
    ...attrs,
    width: size,
    height: size,
    'stroke-width': strokeWidth
  };

  if (options.label) {
    merged.role = 'img';
    merged['aria-label'] = options.label;
  } else {
    merged['aria-hidden'] = 'true';
    merged.focusable = 'false';
  }
  if (options.className) merged.class = options.className;

  const attrString = Object.entries(merged)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  const inner = (children ?? []).map(serializeChild).join('');
  return `<svg ${attrString}>${inner}</svg>`;
}

export const iconNames = Object.keys(registry);

export default icon;
