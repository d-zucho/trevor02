import Badge from '@/components/Badge'
import MaxWidthWrapper from '@/components/MaxWidthContainer'
import SectionHeader from '@/components/SectionHeader'
import SuccessCTA from '@/components/SuccessCTA';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { TTestimonial } from '@/lib/types';

const Testimonials = () => {
  const testimonials: TTestimonial[] = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "John Peterson",
      designation: "Product Manager at TechFlow",
      src: "/client-results/john.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Sarah Mitchell",
      designation: "CTO at InnovateSphere",
      src: "/client-results/sarah.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/client-results/emily.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "David Lahey",
      designation: "Engineering Lead at DataPro",
      src: "/client-results/david.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Michael Brown",
      designation: "VP of Technology at FutureNet",
      src: "/client-results/michael.png",
    },
  ];
  return (
    <section className='py-24 px-2 bg-dark-card'>
      <MaxWidthWrapper>
        <Badge className='mx-auto!'>Success Stories</Badge>
        <div className='flex flex-col items-center'>
          <SectionHeader className='py-6 text-center'>
            Real Results<span className='text-neon-green block'>Real Transformation</span>
          </SectionHeader>
          <p className='text-muted-foreground text-center max-w-xl leading-relaxed'>
            See how our clients have transformed their lives with our programs. Read their success stories and learn how they have achieved their goals.
          </p>
        </div>         
        <div className='mt-10'>
          <AnimatedTestimonials testimonials={testimonials}  />
        </div>     
        <div className='mt-24'>
          <SuccessCTA />       
        </div>                             
      </MaxWidthWrapper>
    </section>
  )
}

export default Testimonials