import { Calendar, Fish, Star, UtensilsCrossed } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const ITEMS = [
  {
    icon: <Star className='size-5' />,
    title: '4,5/5 no Tripadvisor',
    description: '+511 avaliações',
  },
  {
    icon: <UtensilsCrossed className='size-5' />,
    title: '35+ Pratos à la carte',
    description: 'Buffet livre aos fins de semana',
  },
  {
    icon: <Fish className='size-5' />,
    title: '+7 Receitas de Truta',
    description: 'A famosa Truta Flambada',
  },
  {
    icon: <Calendar className='size-5' />,
    title: 'Aberto todos os dias',
    description: '11h às 23h (sex., sáb. e dom.)',
  },
];

const HomeTrustStrip = () => {
  return (
    <section className='border-y py-6 dark bg-card text-card-foreground'>
      <div className='container'>
        <div className='hidden md:grid grid-cols-2 gap-6 lg:grid-cols-4'>
          {ITEMS.map((item, index) => (
            <div key={index} className='flex items-center gap-3'>
              <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
                {item.icon}
              </div>
              <div>
                <p className='leading-tight font-medium'>{item.title}</p>
                {item.description && (
                  <p className='text-sm text-muted-foreground'>
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className='md:hidden'
        >
          <CarouselContent>
            {ITEMS.map((item, index) => (
              <CarouselItem
                key={index}
                className='flex items-center justify-center gap-3'
              >
                <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
                  {item.icon}
                </div>
                <div>
                  <p className='leading-tight font-medium'>{item.title}</p>
                  {item.description && (
                    <p className='text-sm text-muted-foreground'>
                      {item.description}
                    </p>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { HomeTrustStrip };
