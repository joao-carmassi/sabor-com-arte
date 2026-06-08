import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import getZapLink from '@/utils/get-zap-link';

const ArtesanatoCta = () => {
  return (
    <section className='py-12 md:py-24'>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <div className='flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16 w-ful'>
            <div className='md:w-1/2'>
              <h4 className='mb-1 text-2xl font-bold md:text-3xl'>
                Visite o Paiol das Artes
              </h4>
              <p className='text-muted-foreground'>
                Leve para casa uma lembrança exclusiva de São Bento do Sapucaí.
                Entre em contato para saber mais sobre nossas peças e horários
                de funcionamento.
              </p>
              <Button className='mt-6' asChild>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={getZapLink(
                    'Olá! Gostaria de saber mais sobre os artesanatos disponíveis no Paiol das Artes.',
                  )}
                >
                  Falar pelo WhatsApp <ArrowRight className='size-4' />
                </a>
              </Button>
            </div>
            <div className='md:w-1/3'>
              <ul className='flex flex-col space-y-2 text-sm font-medium'>
                {[
                  'Tapetes artesanais',
                  'Mantas e tecidos',
                  'Peças de decoração',
                  'Cerâmica regional',
                  'Lembranças exclusivas de São Bento do Sapucaí',
                  'Ao lado do restaurante',
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

export { ArtesanatoCta };
