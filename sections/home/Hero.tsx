import Badge from '@/components/Badge'
import MaxWidthWrapper from '@/components/MaxWidthContainer'
import { buttonVariants } from '@/components/ui/button'
import { HERO_CARDS } from '@/constants'
import { cn } from '@/lib/utils'
import { ArrowRight, Trophy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const HomeHero = () => {
  return (
    <section className='bg-[#101624] w-full relative pb-40 z-0'>
      <div className='absolute inset-0 bg-linear-to-br from dark-bg via-gray-900 to dark-bg blur-2xl z-10'></div>
      <MaxWidthWrapper className='z-20 pt-20 relative'>
        {/* WRAPPER */}
        <div className='z-50 relative flex flex-col lg:flex-row justify-between items-center'>
          {/* HERO TEXT-WRAPPER */}
          <div>
            {/* BADGE */}
            <Badge>
              🔥 Transform your body in 90 days
            </Badge>
            {/* HERO TEXT */}
            <div className='py-6 text-center lg:text-left'>
              <h1 className='lg:text-7xl text-5xl sm:text-6xl uppercase font-black leadingt'>
                Unleash your
                <span className='block text-neon-green'>ultimate</span>
                potential
              </h1>
              <p className='text-muted-foreground w-md py-5 leading-relaxed'>
                Elite personal training designed for champions. Build
                muscle,burn fat, and achieve the physique you've always dreamed
                ofwith scientifically-proven methods and personalized coaching.
              </p>
              {/* BUTTONS */}
              <div className='flex gap-6 justify-center lg:justify-start'>
                <Link
                  href={'/'}
                  className={buttonVariants({ size: 'lg', variant: 'default', className: 'group' })}
                >
                  Start Your Journey
                  <ArrowRight className='size-5 group-hover:translate-x-2 transition-all ease-in-out' />
                </Link>
                <Link
                  href={'/'}
                  className={buttonVariants({ size: 'lg', variant: 'outline' })}
                >
                  View Programs
                </Link>
              </div>
              {/* <HeroDetailCards /> */}
            </div>
          </div>

          {/* Hero Right */}
          <HeroImageSection />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}


const HeroImageSection = () => (
  <div className=''>
      <div className='relative'>
        <div className='relative'>
          <Image
            src={'/TrevorH.jpg'}
            alt=''
            width={500}
            height={500}
            className='max-w-sm rounded-2xl'
          />
          <div className='absolute inset-0 bg-black/50 rounded-2xl' />
        </div>
        <div className='bg-dark-card p-4 rounded-2xl border border-hero-card-border shadow-lg flex items-center gap-4 w-fit absolute -bottom-12 -left-12 shadow-neon-green/10'>
          <Trophy className='w-12 h-12 text-black bg-neon-green p-2 rounded-full' />
          <div className='w-fit'>
            <h3 className='text-muted-foreground'>
              Certified Trainer
            </h3>
            <p className='text-xl'>NASM, ACE, ISSE</p>
          </div>
        </div>
      </div>
    </div>
)

const HeroDetailCards = () => (
  <div className='flex items-center  gap-6 pt-12 z-20 relative w-fit mx-auto'>
    {HERO_CARDS.map((card, index) => (
      <div
        key={index}
        className='bg-dark-card p-4 rounded-2xl border border-hero-card-border shadow-lg'
      >
        <h3 className='text-neon-green text-2xl font-black'>
          {card.title}
        </h3>
        <p className='text-muted-foreground text-sm'>
          {card.description}
        </p>
      </div>
    ))}
  </div>
)

export default HomeHero
