import { MenuIcon } from 'lucide-react'
import { Button, buttonVariants } from '../ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' size='icon'>
            <MenuIcon className='text-white size-6' />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='sr-only'>
            <SheetTitle>Trevor Woodard Fitness</SheetTitle>
            <SheetDescription>
              Start your fitness journey today.
            </SheetDescription>
          </SheetHeader>
          <div className='pt-10 pb-20 flex items-center justify-center'>
            <Image src={'logo.svg'} alt={'Logo'} width={100} height={100} />
          </div>
          <div className='flex flex-col gap-20 text-2xl items-center justify-center'>
            {NAV_LINKS.map((link) => (
              <SheetClose key={link.label} asChild>
                <Link
                  href={link.href}
                  className={cn('text-2xl hover:text-neon-green text-center')}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </div>
          <div className='w-full flex flex-col gap-4 justify-center items-center mt-32'>
            <Link
              href={'/'}
              className={cn('w-2/3', buttonVariants({ variant: 'outline' }))}
            >
              Contact Me
            </Link>
            <Link
              href={'/'}
              className={cn('w-2/3', buttonVariants({ variant: 'default' }))}
            >
              Book Now
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
