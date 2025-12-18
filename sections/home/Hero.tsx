import MaxWidthWrapper from '@/components/MaxWidthContainer'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HomeHero = () => {
  return (
    <section className='bg-[#101624] h-[calc(100vh-80px)] w-full relative z-0'>
      <div className='absolute inset-0 bg-linear-to-br from dark-bg via-gray-900 to dark-bg blur-2xl z-10'></div>
      <MaxWidthWrapper>
        {/* WRAPPER */}
        <div className='z-50 relative'>
          <div className='uppercase text-sm font-semibold text-neon-green px-4 py-2 bg-neon-green/10 border-neon-green/30 border w-fit rounded-full'>
            🔥 Transform your body in 90 days
          </div>

          {/* HERO TEXT */}
          <div>
            <h1 className='text-7xl uppercase font-black'>
              Unleash your
              <span className='block text-neon-green'>ultimate</span>
              potential
            </h1>
            <p className='text-muted-foreground w-xl py-5'>
              Elite personal training designed for champions. Build muscle,burn
              fat, and achieve the physique you've always dreamed ofwith
              scientifically-proven methods and personalized coaching.
            </p>
            <div className='flex gap-6'>
              <Link
                href={'/'}
                className={cn(
                  '',
                  buttonVariants({ size: 'lg', variant: 'default' })
                )}
              >
                Start Your Journey
                <ArrowRight className='size-5' />
              </Link>
              <Link
                href={'/'}
                className={cn(
                  '',
                  buttonVariants({ size: 'lg', variant: 'outline' })
                )}
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeHero
