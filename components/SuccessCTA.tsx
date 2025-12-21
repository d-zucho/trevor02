import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const SuccessCTA = () => {
  return (
    <div className='bg-linear-to-r from-neon-green to-green-500 rounded-2xl'>
      <div className='flex flex-col items-center justify-center text-center py-8'>
        <span className='text-dark-bg font-extrabold text-3xl'>Ready to Write Your Success Story?</span>
        <p className='text-dark-bg mt-4 leading-relaxed'>Join many others who have transformed their bodies and lives. <br />                                                                                                                                                                                                                         
          Your journey starts today.
        </p>

        <Link className={cn('mt-6 px-6! max-w-full ease-linear  group duration-300 hover:shadow-lg shadow-black/40!', buttonVariants({ variant: 'secondary' }))} href='/'>
          <span>Start Your Transformation</span>
          <ArrowRight className='ml-1 h-4 w-4 move-arrow transition-all duration-300' />
        </Link>
        
      </div>
    </div>
  )
}

export default SuccessCTA

