import Badge from '@/components/Badge'
import MaxWidthWrapper from '@/components/MaxWidthContainer'
import SectionHeader from '@/components/SectionHeader'
import { buttonVariants } from '@/components/ui/button'
import { ABOUT_CARDS } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className='py-24 w-full'>
      <MaxWidthWrapper>
        {/* Left Side -- Image */}
        <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
          <div className='block flex-1 relative'>
            <Image
              src='/trevor_about.png'
              alt='About Trevor'
              width={500}
              height={500}
              className='rounded-4xl w-[350px] lg:w-[500px]'
              />
              <div className='hidden lg:block bg-neon-green w-fit rounded-xl p-4 text-black absolute -bottom-4 right-4'>
                <p className='text-4xl font-bold'>15+</p>
                <p>Years of Experience</p>
              </div>
          </div>
          {/* Right Side -- Content */}
          <div className='flex-1'>
            <Badge>About Me</Badge>
            <SectionHeader className='py-6 lg:text-left'>Meet Your <span className='text-neon-green'>Personal Trainer</span>
            </SectionHeader>
            <div className='leading-relaxed text-muted-foreground space-y-6 max-w-md max-lg:text-center max-lg:mx-auto'>
              <p>
                I'm Marcus Thompson, a certified elite personal trainer with
                over 15 years of experience transforming lives through
                fitness. My journey started as an overweight college student
                who discovered the power of disciplined training and proper
                nutrition.
              </p>
              <p>
                Since then, I've dedicated my life to helping others achieve their
                fitness goals. I've worked with everyone from complete beginners to
                professional athletes, and I bring that diverse experience to every
                client relationship. My approach combines cutting-edge exercise
                science with practical, sustainable lifestyle changes.
              </p>
            </div>

            <div className='flex max-lg:hidden gap-6 mt-12'>
              {ABOUT_CARDS.map((card, index) => {
                const Icon = card.icon
                return(
                <div key={index} className='bg-dark-card w-fit p-6 rounded-xl border border-hero-card-border min-w-[200px]'>
                  <div className='p-3 rounded-lg w-fit bg-neon-green/10'>
                    <Icon
                     className='size-6 text-neon-green'
                    />
                  </div>
                  <h4 className='pt-4 pb-2'>{card.title}</h4>
                  <p className='text-muted-foreground text-xs'>{card.description}</p>
                </div>
              )})}
            </div>

            <div className='flex max-lg:justify-center items-center gap-4 mt-12'>
              <Link href={'/'} className={buttonVariants({ variant: 'default', size: 'lg'})}>
              <span className='font-bold'>Work With Me</span>
              </Link>
              <Link href={'/'} className={buttonVariants({ variant: 'outline', size: 'lg'})}>View Portfolio</Link>
            </div>
            
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutSection