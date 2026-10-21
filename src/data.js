
import {
  Palette,
  Code2,
  Smartphone,
  Sparkles,
  Layers3,
  Zap,
  ShieldCheck,
  Globe2,
  Rocket,
  PenTool,
  Search,
  Monitor,
  Lightbulb,
  TrendingUp,
} from 'lucide-react'

export const services = [
  {
    id: 1,
    title: 'Brand Identity',
    description: 'Distinctive visual identities that make brands unforgettable.',
    icon: Palette,
    tag: 'CREATIVE',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Fast, responsive and thoughtfully engineered web experiences.',
    icon: Code2,
    tag: 'DEVELOPMENT',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces designed around real user needs.',
    icon: Layers3,
    tag: 'EXPERIENCE',
  },
  {
    id: 4,
    title: 'Digital Strategy',
    description: 'Clear direction and smarter decisions for digital growth.',
    icon: TrendingUp,
    tag: 'STRATEGY',
  },
  {
    id: 5,
    title: 'Mobile Experiences',
    description: 'Seamless experiences across phones, tablets and desktops.',
    icon: Smartphone,
    tag: 'MOBILE',
  },
  {
    id: 6,
    title: 'Creative Innovation',
    description: 'Fresh ideas brought to life through emerging technology.',
    icon: Lightbulb,
    tag: 'INNOVATION',
  },
]

export const categories = [
  { name: 'All Projects', icon: Sparkles, count: 24 },
  { name: 'Branding', icon: Palette, count: 8 },
  { name: 'Web Design', icon: Monitor, count: 10 },
  { name: 'Development', icon: Code2, count: 6 },
]

export const projects = [
  {
    id: 1,
    name: 'Nova Studio',
    category: 'Branding',
    description: 'A bold visual identity for a new creative generation.',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85',
    color: 'from-violet-500/20 to-fuchsia-500/10',
  },
  {
    id: 2,
    name: 'Forma Living',
    category: 'Web Design',
    description: 'A refined digital storefront for modern interiors.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    color: 'from-amber-500/20 to-orange-500/10',
  },
  {
    id: 3,
    name: 'Future Frames',
    category: 'Development',
    description: 'A dynamic digital experience for visual storytellers.',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=85',
    color: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    id: 4,
    name: 'Aura Objects',
    category: 'Branding',
    description: 'Minimal packaging and identity for thoughtful products.',
    image:
      'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=85',
    color: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    id: 5,
    name: 'Digital Bloom',
    category: 'Web Design',
    description: 'An expressive website inspired by nature and movement.',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85',
    color: 'from-pink-500/20 to-purple-500/10',
  },
  {
    id: 6,
    name: 'Orbit Systems',
    category: 'Development',
    description: 'A modern product experience for ambitious teams.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85',
    color: 'from-blue-500/20 to-violet-500/10',
  },
]

export const testimonials = [
  {
    name: 'Olivia Bennett',
    role: 'Founder, Nova Studio',
    quote:
      'AURIX transformed our original idea into a cohesive digital experience. Every detail felt considered, purposeful and genuinely creative.',
    initials: 'OB',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Director, Forma Living',
    quote:
      'The design process was clear, collaborative and refreshingly thoughtful. Our new online experience feels like our brand at its best.',
    initials: 'MC',
    rating: 5,
  },
  {
    name: 'Sophia Williams',
    role: 'Product Lead, Orbit',
    quote:
      'The team balanced aesthetics and usability beautifully. The final result feels modern, fast and effortless to navigate.',
    initials: 'SW',
    rating: 5,
  },
]

export const faqs = [
  {
    question: 'What is AURIX?',
    answer:
      'AURIX is a creative digital concept website showcasing brand strategy, design, web development and innovative digital experiences.',
  },
  {
    question: 'What services can I explore?',
    answer:
      'You can explore branding, UI/UX design, responsive web development, mobile experiences and digital strategy through our featured sections.',
  },
  {
    question: 'Is AURIX available on mobile devices?',
    answer:
      'Yes. The interface is designed to adapt to mobile phones, tablets, laptops and large desktop screens.',
  },
  {
    question: 'Can I create a demo account?',
    answer:
      'Yes. Register with your name, email address and a password. This frontend demo stores account information in your browser, not on a secure server.',
  },
  {
    question: 'Are the projects real client projects?',
    answer:
      'The projects and testimonials are illustrative sample content created to demonstrate the website experience.',
  },
]

export const stats = [
  { value: '120+', label: 'Ideas explored', icon: Lightbulb },
  { value: '85+', label: 'Concepts created', icon: PenTool },
  { value: '24/7', label: 'Digital access', icon: Globe2 },
  { value: '100%', label: 'Responsive design', icon: ShieldCheck },
]

export const highlights = [
  {
    title: 'Thoughtful by design',
    description: 'Every detail serves a purpose, from the first interaction to the final pixel.',
    icon: Palette,
  },
  {
    title: 'Technology with purpose',
    description: 'Modern tools and reliable implementation keep experiences smooth and useful.',
    icon: Zap,
  },
  {
    title: 'Made to move forward',
    description: 'Flexible layouts and scalable thinking support ideas as they grow.',
    icon: Rocket,
  },
]

export const tools = [Search, Monitor, Sparkles]
