import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import getZapLink from '@/utils/get-zap-link';

const BlogCta = () => {
  return (
    <section className='pt-12 md:pt-24'>
      <div className='mx-auto'>
        <div className='flex justify-center'>
          <div className='flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16 w-ful'>
            <div className='md:w-1/2'>
              <h2 className='mb-1 text-2xl font-bold md:text-3xl'>
                Visite o Restaurante Sabor com Arte
              </h2>
              <p className='text-muted-foreground'>
                Experimente a culinária local e desfrute de um ambiente
                acolhedor no Restaurante Sabor com Arte. Entre em contato para
                saber mais sobre nosso cardápio e horários de funcionamento.
              </p>
              <Button className='mt-6' asChild>
                <a
                  href={getZapLink(
                    'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
                  )}
                >
                  Falar pelo WhatsApp <ArrowRight className='size-4' />
                </a>
              </Button>
            </div>
            <div className='md:w-1/3'>
              <ul className='flex flex-col space-y-2 text-sm font-medium'>
                {[
                  'Culinária local autêntica',
                  'Ambiente acolhedor',
                  'Pratos preparados com ingredientes frescos',
                  'Truta fresca da região',
                  'Opções vegetarianas e veganas',
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

export default BlogCta;
