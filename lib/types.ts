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