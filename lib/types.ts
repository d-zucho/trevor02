import { LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'

export type TNavLink = {
  label: string
  href: string
}

export type THeroCard = {
  title: string
  description: string
}

export type TProgramCard = {
  title: string
  description: string
  stats: string[]
  icon: LucideIcon
  iconFill?: string
  className?: string
  popular?: boolean
}

export type TAboutCard = {
  icon: LucideIcon
  title: string
  description: string
}

export type TTestimonial = {
  quote: string
  name: string
  designation: string
  src: string
}