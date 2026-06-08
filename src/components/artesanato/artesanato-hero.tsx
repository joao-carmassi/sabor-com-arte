import { Button } from '@/components/ui/button';

const ArtesanatoHero = () => {
  return (
    <section className='pt-8 md:pt-12 pb-12'>
      <div className='container'>
        <h1 className='mb-6 leading-none tracking-tighter md:text-[7vw] lg:text-8xl text-4xl font-bold text-foreground md:text-5xl'>
          Paiol das Artes — Artesanato Regional de São Bento do Sapucaí
        </h1>
        <p className='text-lg text-muted-foreground md:text-xl max-w-4xl'>
          Tapetes artesanais, mantas, cerâmica regional e lembranças exclusivas
          da Serra da Mantiqueira. Localizado ao lado do Restaurante Sabor com
          Arte.
        </p>
        <div className='mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10'>
          <Button size='lg' className='w-full md:w-auto' asChild>
            <a
              href='https://wa.me/5512996717118?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Paiol%20das%20Artes.'
              target='_blank'
              rel='noopener noreferrer'
            >
              Falar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { ArtesanatoHero };
