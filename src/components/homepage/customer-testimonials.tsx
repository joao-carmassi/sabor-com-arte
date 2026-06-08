import { Card } from '@/components/ui/card';

import { cn } from '@/lib/utils';

const defaultProps = {
  heading: 'O Que Quem Provou Tem a Dizer',
  description:
    'Mais de 511 avaliações no Tripadvisor. Veja o que nossos clientes dizem.',
  testimonials: [
    {
      name: 'Thaís Soliani',
      role: 'Santo André, SP',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar7.jpg',
      content:
        'Comida saborosa e ambiente encantador. As mesas externas têm uma vista incrível para a Pedra do Baú — ótimo para casais. Atendimento atencioso e pratos de truta deliciosos.',
    },
    {
      name: 'Gustavo Kenji',
      role: 'Casal',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar3.jpg',
      content:
        'Surpreendente: truta recheada com farofa crocante e caipirinha excelente. Vista para a serra com parapentes ao fundo — experiência memorável, voltaremos com certeza.',
    },
    {
      name: 'Lucas D.',
      role: 'São Bento do Sapucaí, SP',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar12.jpg',
      content:
        'Ótimo para família: palmito e pratos com peixe muito saborosos. Espaço agradável e bom custo-benefício, destaque para a vista panorâmica.',
    },
    {
      name: 'Isabela O.',
      role: 'Família',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar15.jpg',
      content:
        'Buffet variado com saladas, peixes e carnes — o salmão é divino. Ambiente aconchegante, ideal para reunir a família com uma vista linda.',
    },
    {
      name: 'Journey419095929721',
      role: 'Casal',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar22.jpg',
      content:
        'Refeição feita com arte: truta caipira saborosa e mesas nos fundos com vista das montanhas. Acesso a riacho cristalino deixa a experiência ainda melhor.',
    },
    {
      name: 'Davi Eichman',
      role: 'São Paulo, SP',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar18.jpg',
      content:
        'Comida ótima e preço justo. Tilápia empanada e flambada sensacional — porção bem servida e atendimento cordial. Recomendo para quem busca sabor caseiro.',
    },
    {
      name: 'Viviane Priscila',
      role: 'Casal',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar25.jpg',
      content:
        'Comida magnífica! Pratos simples e perfeitos — voltarei sempre. Atendimento atencioso e ambiente acolhedor com ótima relação custo-benefício.',
    },
    {
      name: 'Débora F.',
      role: 'Frequentadora',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar8.jpg',
      content:
        'Lugar lindo, atendimento excepcional e comida maravilhosa — sempre que vamos a São Bento paramos aqui. Recomendo pela vista e qualidade.',
    },
    {
      name: 'Marcio P.',
      role: 'Casal',
      avatar:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar12.jpg',
      content:
        'Maravilhoso! Comida honesta e bem feita — equipe de parabéns. Ambiente agradável com estacionamento e vista para a serra.',
    },
  ],
};

const lineClamps = [
  'line-clamp-3',
  'line-clamp-5',
  'line-clamp-2',
  'line-clamp-4',
  'line-clamp-3',
  'line-clamp-5',
  'line-clamp-2',
  'line-clamp-4',
  'line-clamp-3',
];

const CustomerTestimonials = () => {
  const { heading, description, testimonials } = {
    ...defaultProps,
  };

  const list = testimonials.slice(0, 9);

  return (
    <section className='py-12 md:py-24'>
      <div className='container'>
        <div className='flex flex-col items-center gap-6'>
          <h2 className='text-center font-bold text-4xl xl:text-5xl max-w-5xl'>
            {heading}
          </h2>
          <p className='max-w-2xl text-center text-lg font-normal text-muted-foreground md:text-xl'>
            {description}
          </p>
        </div>
        <div className='relative mt-8 md:mt-14 w-full after:absolute after:inset-x-0 after:-bottom-2 after:h-96 after:bg-linear-to-t after:from-background'>
          <div
            className='columns-1 gap-5 md:columns-2 lg:columns-3'
            style={{ columnGap: '20px' }}
          >
            {list.map((testimonial, idx) => {
              // Reorder for masonry flow: distribute across columns first
              const displayIdx = (idx % 3) * 3 + Math.floor(idx / 3);

              return (
                <div
                  key={idx}
                  className={cn(
                    'mb-5',
                    displayIdx > 3 && displayIdx <= 5 && 'hidden md:block',
                    displayIdx > 5 && 'hidden lg:block',
                  )}
                >
                  <Card className='break-inside-avoid p-5'>
                    <div className='flex gap-4 leading-5'>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className='size-10 rounded-full ring-1 ring-input'
                        loading='lazy'
                      />
                      <div className='mb-2 text-sm'>
                        <p className='font-semibold text-foreground'>
                          {testimonial.name}
                        </p>
                        <p className='text-muted-foreground'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'leading-7 text-foreground/60',
                        lineClamps[idx],
                      )}
                    >
                      <q>{testimonial.content}</q>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CustomerTestimonials };
