import Badge from '@/components/Badge'
import MaxWidthWrapper from '@/components/MaxWidthContainer'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { PROGRAM_CARDS } from '@/constants'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import Link from 'next/link'


const Programs = () => {
  return (
    <section className='py-24 w-full'>
      <MaxWidthWrapper>
        <div className='flex flex-col gap-4 mt-5 justify-center items-center'>
        <Badge className='mx-auto text-center'>Training Programs</Badge>
          <h2 className='text-4xl md:text-5xl font-bold text-center'>Choose Your Path to <span className='text-neon-green'>Greatness</span></h2>
          <p className='text-muted-foreground max-w-xl text-center'>Customized training programs designed to meet your specific goals, fitness level, and lifestyle.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-md:mx-auto max-sm:justify-items-center'>
          {
            PROGRAM_CARDS.map((program, index) => {
              const IconComponent = program.icon
              return(
              <div key={index}>
                <Card key={index} className={`${program.popular ? 'bg-neon-green': 'bg-dark-card'} border hover:border-neon-green/50 transition-all transform hover:scale-105 duration-300 max-w-sm`}>
                  <CardHeader>
                    <IconComponent className={cn('size-12 p-2 bg-linear-to-br rounded-xl mb-2', program.className)} fill={program.iconFill} />
                   {program.popular && (
                    <span className='text-xs text-white bg-[#0A0A0A]/50 px-2 py-1 rounded-full w-fit border-neon-green/40 border'>Most Popular</span>
                   )}
                   <CardTitle className={`text-xl wrap-none ${program.popular ? 'text-black': 'text-foreground'}`}>{program.title}</CardTitle>
                   <CardDescription className={cn(program.popular ? 'text-black/70': 'text-muted-foreground', 'min-h-[60px]')}>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                   <div className={cn(program.popular ? 'text-black/70': 'text-foreground', 'space-y-3')}>
                    {
                      program.stats.map((stat, index) => (
                        <div key={index} className='flex items-center gap-3'>
                          <Check size={16} className={cn(program.popular ? 'text-black' : 'text-neon-green')} />
                          <span className='text-sm'>{stat}</span>
                        </div>
                      ))
                    }
                   </div>
                  </CardContent>
                  <CardFooter>
                    { program.popular ? (
                      <CardAction className='w-full'>
                      <Link href={'#'} className={cn(buttonVariants({variant: 'outline'}), `w-full bg-[#242424]! hover:bg-[#242424]/90!`)}>Learn More</Link>
                    </CardAction>)
                      : (
                        <CardAction className='w-full'>
                        <Link href={'#'} className={cn(buttonVariants({variant: 'outline'}), `w-full`)}>Learn More</Link>
                    </CardAction>
                    )}
                  </CardFooter>
                </Card>
              </div>
            )})
          }
        </div>
      </MaxWidthWrapper>


    </section>
  )
}

export default Programs

