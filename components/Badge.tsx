import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div className={cn('uppercase text-sm font-semibold text-neon-green px-4 py-2 bg-neon-green/10 border-neon-green/30 border w-fit rounded-full mx-auto lg:mx-0', className)}>
      {children}
    </div>
  )
}

export default Badge