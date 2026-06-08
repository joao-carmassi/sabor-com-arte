import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import getZapLink from '@/utils/get-zap-link';

const PousadaCta = () => {
  return (
    <section className='py-12 md:py-24'>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <div className='flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16 w-full'>
            <div className='md:w-1/2'>
              <h4 className='mb-1 text-2xl font-bold md:text-3xl'>
                Reserve a Pousada Riacho Doce
              </h4>
              <p className='text-muted-foreground'>
                Entre em contato para garantir sua estadia na Pousada Riacho
                Doce. Chalés confortáveis e atendimento personalizado.
              </p>
              <Button className='mt-6' asChild>
                <a
                  href={getZapLink(
                    'Olá! Gostaria de fazer uma reserva na Pousada Riacho Doce.',
                  )}
                  target='_blank'
                >
                  Reservar pelo WhatsApp <ArrowRight className='size-4' />
                </a>
              </Button>
            </div>
            <div className='md:w-1/3'>
              <ul className='flex flex-col space-y-2 text-sm font-medium'>
                {[
                  'Vista para a Pedra do Baú',
                  'Jardim com riacho',
                  'Estacionamento privativo',
                  'A passos do restaurante',
                  'Pet friendly',
                ].map((item, idx) => (
                  <li className='flex items-center' key={idx}>
                    <Check className='mr-4 size-4 shrink-0' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PousadaCta };
