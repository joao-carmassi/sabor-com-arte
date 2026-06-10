'use client';
import type { LucideIcon } from 'lucide-react';
import {
  Globe,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { startTransition, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface feature {
  title: string;
  label: string;
  icon: LucideIcon;
  description: string;
  background: string;
}

const FEATURES: Array<feature> = [
  {
    title: 'Truta Flambada — o prato que você não esquece',
    label: 'Prato Assinatura',
    icon: Sparkles,
    description:
      'Flambada na sua mesa com conhaque e ervas frescas. Um espetáculo gastronômico que nenhum outro restaurante da região oferece.',
    background:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg',
  },
  {
    title: 'Vista para a Pedra do Baú',
    label: 'Ambiente Único',
    icon: Globe,
    description:
      'O deck externo com vista direta para a Pedra do Baú é o ambiente mais disputado do restaurante. Reserve com antecedência.',
    background:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg',
  },
  {
    title: 'Buffet Livre nos Fins de Semana',
    label: 'Sábados, Domingos e Feriados',
    icon: Workflow,
    description:
      'Buffet à vontade das 12h às 16h com truta em destaque, saladas, acompanhamentos e sobremesas da casa: Doce de leite, doce de abóbora, doce de banana e goiabada cremosa.',
    background:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/sam-wermut-FiUuNWxnb3k-unsplash.jpg',
  },
  {
    title: 'Fogão a Lenha e Lareira',
    label: 'Tradição da Serra',
    icon: ShieldCheck,
    description:
      'Nossa cozinha é aquecida pelo fogão a lenha. No mezanino, a lareira torna os dias frios da serra ainda mais aconchegantes.',
    background:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-Kj2tYAl4HZg-unsplash.jpg',
  },
  {
    title: 'Pet Friendly · Delivery · Estacionamento',
    label: 'Comodidades',
    icon: SlidersHorizontal,
    description:
      'Aceitamos pets, fazemos delivery para pousadas e chalés próximos, e temos estacionamento privativo para toda a família.',
    background:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vasilis-karkalas-LadCWrSL7X8-unsplash.jpg',
  },
];

const RestaurantDifferentials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    startTransition(() => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    api.on('select', () => {
      startTransition(() => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    });
  }, [api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className='py-12 md:py-24'>
      <div className='container'>
        <h2 className='text-center font-bold text-4xl xl:text-5xl max-w-5xl mx-auto'>
          Por que o Sabor com Arte é o Restaurante Favorito de São Bento do
          Sapucaí?
        </h2>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full'
          setApi={setApi}
        >
          <CarouselContent className='-ml-8 mt-8 md:mt-14'>
            {FEATURES.map((card, index) => (
              <CarouselItem
                key={index}
                className='pl-8 md:basis-1/2 lg:basis-1/3'
              >
                <div className='p-1'>
                  <Card className='py-0 shadow-none bg-background dark:bg-background ring-0'>
                    <CardContent className='flex flex-col p-0'>
                      <div
                        style={{ backgroundImage: `url("${card.background}")` }}
                        className='relative flex aspect-[0.935802469] w-full flex-col items-center justify-between overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-7'
                      >
                        <div className='flex size-full flex-1'></div>
                        <div className='h-12 w-full'>
                          <div className='mx-auto mb-8 flex w-full max-w-60 items-center gap-4 rounded-full bg-primary px-3 py-2.5 shadow-xl dark:bg-background'>
                            <div className='shrink-0'>
                              <div className='flex -space-x-2'>
                                <div className='flex size-7 rounded-full border border-black bg-background dark:bg-primary'>
                                  <Sparkles className='m-auto size-4 dark:text-background' />
                                </div>
                                <div className='flex size-7 rounded-full border border-black bg-background dark:bg-primary'>
                                  <card.icon className='m-auto size-4 dark:text-background' />
                                </div>
                              </div>
                            </div>
                            <div className='text-sm font-medium text-white'>
                              {card.label}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex w-full flex-col gap-1 pt-6'>
                        <h3 className='text-xl font-bold'>{card.title}</h3>
                        <p className='text-sm max-w-2xl font-normal text-muted-foreground'>
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='mt-6 hidden items-center justify-center gap-4 md:flex'>
            <CarouselPrevious className='static size-12 translate-y-0' />
            <CarouselNext className='static size-12 translate-y-0' />
          </div>
          <div className='mt-6 flex w-full items-center gap-2 md:hidden'>
            {Array.from({ length: FEATURES.length }).map((_, i) => (
              <button
                onClick={() => goToSlide(i % FEATURES.length)}
                key={`carousel-btn-${i}`}
                className='h-4 w-full'
              >
                <div
                  className={` ${current == i + 1 ? 'bg-primary' : 'bg-muted'} my-auto h-1 w-full rounded-full`}
                ></div>
              </button>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { RestaurantDifferentials };
