import { Button } from '@/components/ui/button';

const PousadaHero = () => {
  return (
    <section className='pt-8 md:pt-12 pb-12'>
      <div className='container'>
        <h1 className='mb-6 leading-none tracking-tighter md:text-[7vw] lg:text-8xl text-4xl font-bold text-foreground md:text-5xl'>
          Pousada Riacho Doce — Seu Chalé com Vista para a Pedra do Baú
        </h1>
        <p className='text-lg text-muted-foreground md:text-xl max-w-4xl'>
          Chalés confortáveis com jardim, riacho e vista privilegiada para a
          Pedra do Baú. A poucos metros do restaurante Sabor com Arte e próximo
          à Cachoeira dos Amores.
        </p>
        <div className='mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10'>
          <Button size='lg' className='w-full md:w-auto' asChild>
            <a
              href='https://wa.me/5512996717118?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Pousada%20Riacho%20Doce.'
              target='_blank'
              rel='noopener noreferrer'
            >
              Reservar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { PousadaHero };
