import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Picture } from '../ui/picture';
import type { OptimizedPicture } from '@/utils/get-picture-image';
import getZapLink from '@/utils/get-zap-link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const HomeHero = ({ images }: { images: OptimizedPicture[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '.gsap-hero',
      { yPercent: 30, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.2,
      },
    );
    tl.fromTo(
      '.gsap-hero-media',
      { scale: 0.97, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'expo.out' },
      '-=1',
    );
  }, []);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    updateCurrent();
    api.on('select', updateCurrent);

    return () => {
      api.off('select', updateCurrent);
    };
  }, [api]);

  return (
    <section className='relative overflow-hidden py-12 md:py-24 pt-8 md:pt-12'>
      <div className='container relative z-10'>
        <div className='mx-auto text-center'>
          <h1 className='leading-none tracking-tighter md:text-[7vw] lg:text-8xl text-4xl font-bold text-foreground md:text-5xl max-w-8xl mx-auto gsap-hero opacity-0'>
            A Melhor Truta de{' '}
            <span className='bg-linear-to-tr font-light from-gray-600 to-gray-400 bg-clip-text text-transparent'>
              São Bento do Sapucaí
            </span>{' '}
            — Na Frente da Pedra do Baú
          </h1>
          <p className='mt-6 text-lg text-muted-foreground md:text-xl max-w-4xl mx-auto gsap-hero opacity-0'>
            Buffet livre nos fins de semana e a famosa Truta Flambada que você
            não vai esquecer. A 5 km do centro, com vista para o cartão-postal
            da Serra da Mantiqueira.
          </p>
          <div className='mt-6 md:mt-8 flex justify-center gap-2'>
            <Button
              className='gsap-hero opacity-0 transition-colors'
              asChild
              variant={'outline'}
              size='lg'
            >
              <a href='/cardapio'>Cardapio</a>
            </Button>
            <Button
              size='lg'
              className='px-6 gsap-hero opacity-0 transition-colors'
              asChild
            >
              <a
                href={getZapLink(
                  'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
                )}
                target='_blank'
                rel='noopener noreferrer'
              >
                Reservar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className='relative hidden md:block'>
          <div className='mt-10 hidden md:block'>
            <div className='grid grid-cols-[1fr_2fr_1fr] place-items-center gap-4 lg:gap-6'>
              <div className='flex flex-col gap-6'>
                <Picture
                  loading='eager'
                  src={images[0]}
                  alt='placeholder'
                  className='aspect-12/9 w-full rounded-lg border border-border object-cover block gsap-hero-media opacity-0'
                />
                <Picture
                  loading='eager'
                  src={images[2]}
                  alt='placeholder'
                  className='aspect-12/9 w-full rounded-lg border border-border object-cover block gsap-hero-media opacity-0'
                />
              </div>
              <div className='m-px rounded-lg bg-muted p-2.5 gsap-hero-media opacity-0'>
                <Picture
                  loading='eager'
                  src={images[1]}
                  alt='placeholder'
                  className='aspect-square w-full rounded-lg border border-border object-cover block'
                />
              </div>
              <div className='flex flex-col gap-6'>
                <Picture
                  loading='eager'
                  src={images[3]}
                  alt='placeholder'
                  className='aspect-12/9 w-full rounded-lg border border-border object-cover block gsap-hero-media opacity-0'
                />
                <Picture
                  loading='eager'
                  src={images[4]}
                  alt='placeholder'
                  className='aspect-12/9 w-full rounded-lg border border-border object-cover block gsap-hero-media opacity-0'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 md:hidden'>
          <Carousel setApi={setApi} className='mx-auto max-w-md'>
            <CarouselContent className='max-h-full'>
              <CarouselItem className='gsap-hero-media opacity-0 flex flex-col items-end justify-end'>
                <div className='flex flex-col gap-3'>
                  <Picture
                    loading='eager'
                    src={images[0]}
                    alt='placeholder'
                    className='aspect-video rounded-lg border border-border object-cover block'
                  />
                  <Picture
                    loading='eager'
                    src={images[2]}
                    alt='placeholder'
                    className='aspect-4/3 rounded-lg border border-border object-cover block'
                  />
                </div>
              </CarouselItem>
              <CarouselItem className='gsap-hero-media opacity-0'>
                <Picture
                  loading='eager'
                  src={images[1]}
                  alt='placeholder'
                  className='h-full rounded-lg border border-border object-cover block'
                />
              </CarouselItem>
              <CarouselItem className='gsap-hero-media opacity-0 flex flex-col items-end justify-end'>
                <div className='flex flex-col items-end justify-end gap-3 h-full'>
                  <Picture
                    loading='eager'
                    src={images[3]}
                    alt='placeholder'
                    className='aspect-4/3 rounded-lg border border-border object-cover block'
                  />
                  <Picture
                    loading='eager'
                    src={images[4]}
                    alt='placeholder'
                    className='aspect-video rounded-lg border border-border object-cover block'
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className='mt-6 flex justify-center'>
              {Array.from({ length: 3 }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    'mx-1.5 inline-block size-2 cursor-pointer rounded-full bg-muted-foreground/20 transition-colors duration-300',
                    index + 1 === current && 'bg-muted-foreground/60',
                  )}
                  onClick={() => api && api.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
      {/*  Diagonal Cross Grid Bottom Background */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
          backgroundSize: '40px 40px',
          WebkitMaskImage:
            'radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)',
          maskImage:
            'radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)',
        }}
      />
    </section>
  );
};

export default HomeHero;
