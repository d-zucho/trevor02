import { TAboutCard, THeroCard, TNavLink, TProgramCard } from '@/lib/types'
import { Brain, BrainIcon, Dumbbell, Flame, HeartPulse, Medal, PersonStanding, ShieldCheck, Venus } from 'lucide-react'

export const NAV_LINKS: TNavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
]

export const HERO_CARDS: THeroCard[] = [
  {
    title: '500+',
    description: 'Transformed Clients',
  },
  {
    title: '10+',
    description: 'Years of Experience',
  },
  {
    title: '100%',
    description: 'Client Satisfaction',
  },
]

export const PROGRAM_CARDS: TProgramCard[] = [
  {
    title: 'Muscle Building',
    description: 'Hypertrophy-focused training to maximize muscle growth and strength gains through progressive overload.',
    stats: ['4-6 sessions per week', 'Custom workout splits', 'Progressive overload tracking', 'Nutriotion Guidance Included'],
    icon: Dumbbell,
    iconFill: 'transparent',
    className: 'from-neon-green to-green-600 text-black'
  },
  {
    title: 'Fat Loss Transformation',
    description: 'Comprehensive program combining strength training and metobolic conditioning for rapid fat loss.',
    stats: ['4-6 sessions per week', 'Custom workout splits', 'Progressive overload tracking', 'Nutriotion Guidance Included'],
    icon: Flame,
    // iconFill: 'black',
    className: 'bg-dark-bg text-neon-green fill-neon-green',
    popular: true

  }, 
  {
    title: 'Athletic Performance',
    description: 'Sport-specific training to enhance speed,power, agility, and overall athletic performance',
    stats: ['Sport-specific training', 'Plyometric training', 'Mobility & Flexibility Work', 'Performance Testing'],
    icon: HeartPulse,
    iconFill: 'white',
    className: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Mind & Body Wellness',
    description: 'Holistic approach combining strength training, flexibility work, and mindfulness practices.',
    stats: ['Yoga & Pilates Integration', 'Stress management', 'Meditation Guidance', 'Recovery optimization'],
    icon: BrainIcon,
    iconFill: 'transparent',
    className: 'from-cyan-500 to-blue-600'
  }, 
  {
    title: 'Functional Fitness',
    description: 'Build real-world strength and improve daily movement patterns for a better quality of life.',
    stats: ['Compound movements focus', 'Core stability training', 'Balance & coordination', 'Injury prevention protocals'],
    icon: PersonStanding,
    iconFill: 'transparent',
    className: 'from-orange-500 to-red-600'
  },
  {
    title: "Women's Transformation",
    description: "Specialized training designed for women's fitness goals, hormonal balance, and body composition.",
    stats: ['Toning & Sculpting Focus', 'Body confidence coaching', 'Hormone-optimized training', 'Pre/post-natal options'],
    icon: Venus,
    iconFill: 'transparent',
    className: 'from-pink-500 to-purple-600 '
  }
]

export const ABOUT_CARDS: TAboutCard[] = [
  {
    icon: ShieldCheck,
    title: 'Certified Expert',
    description: 'NASM, ACE, ISSA Certified',
  },
  {
    icon: Medal,
    title: 'Award Winner',
    description: 'Top Trainer 2022, 2023',
  }
]