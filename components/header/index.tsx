import MaxWidthWrapper from '@/components//MaxWidthContainer'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='h-20 bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-b-gray-800'>
      <MaxWidthWrapper className='flex'>
        {/* LEFT -- Logo & Nav Links */}
        <div className='flex items-center'>
          <Link href={'/'}>
            {/* <Image
                src={'/logo.svg'}
                alt={'Logo'}
                width={75}
                height={100}
                className='text-neon-green'
              /> */}
            <p className='text-2xl font-black'>
              TW<span className='text-neon-green'>FIT</span>
            </p>
          </Link>
          <div className='hidden md:block space-x-5 ml-10'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='hover:text-neon-green transition-colors duration-300'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT -- Buttons */}
        <div className='flex items-center ml-auto gap-6'>
          <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
            Contact Me
          </Link>
          <Link
            href={'/'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            Book Now
          </Link>
        </div>
        <div className='flex items-center md:hidden'>
          <MobileNav />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
