import { Car, Wifi, PawPrint, Truck, CreditCard, Hotel } from 'lucide-react';
import { Card } from '@/components/ui/card';
import getZapLink from '@/utils/get-zap-link';

const MenuCategories = () => {
  const communityCards = [
    {
      icon: <Car className='h-8 w-8 text-primary' />,
      title: 'Estacionamento Gratuito',
      description:
        'Estacionamento privativo e gratuito para toda a família, sem preocupação',
      link:
        getZapLink(
          'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
        ) +
        '&text=Tenho interesse em saber mais sobre o estacionamento gratuito.',
    },
    {
      icon: <Wifi className='h-8 w-8 text-primary' />,
      title: 'Wi-Fi Gratuito',
      description:
        'Internet gratuita para compartilhar cada momento e nos marcar nas redes',
      link:
        getZapLink(
          'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
        ) + '&text=Tenho interesse em saber mais sobre o Wi-Fi gratuito.',
    },
    {
      icon: <PawPrint className='h-8 w-8 text-primary' />,
      title: 'Pet Friendly',
      description:
        'Seu melhor amigo é bem-vindo. Traga seu pet e aproveitem juntos',
      link:
        getZapLink(
          'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
        ) + '&text=Tenho interesse em saber mais sobre o Pet Friendly.',
    },
    {
      icon: <Truck className='h-8 w-8 text-primary' />,
      title: 'Delivery para Pousadas',
      description:
        'Entregamos na sua hospedagem. Peça pelo WhatsApp sem sair do chalé',
      link:
        getZapLink(
          'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
        ) +
        '&text=Tenho interesse em saber mais sobre o delivery para pousadas.',
    },
    {
      icon: <CreditCard className='h-8 w-8 text-primary' />,
      title: 'Aceita Cartões',
      description: 'Visa, Mastercard, Amex e débito. Sem preocupação com troco',
      link:
        getZapLink(
          'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
        ) +
        '&text=Tenho interesse em saber mais sobre o pagamento com cartões.',
    },
    {
      icon: <Hotel className='h-8 w-8 text-primary' />,
      title: 'Pousada Integrada',
      description:
        'A Pousada Riacho Doce fica ao lado. Hospede-se e aproveite ao máximo',
      link:
        getZapLink(
          'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
        ) + '&text=Tenho interesse em saber mais sobre a Pousada Riacho Doce.',
    },
  ];

  return (
    <section className='relative overflow-hidden rounded-3xl bg-background py-12 md:py-24 text-foreground'>
      <div className='relative z-10 container flex flex-col items-center justify-center'>
        <h2 className='mb-6 text-center font-bold text-4xl xl:text-5xl max-w-5xl'>
          Tudo Para Você se Sentir em Casa
        </h2>
        <p className='mb-8 md:mb-14 max-w-2xl text-center text-lg font-normal text-muted-foreground md:text-xl'>
          Do estacionamento gratuito ao Wi-Fi, do pet friendly ao delivery —
          comodidade completa para toda a família em São Bento do Sapucaí.
        </p>
        <div className='mb-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-6'>
          {communityCards.map((card) => (
            <Card
              key={card.title}
              className='dark group flex flex-1 flex-col items-center rounded-2xl bg-background p-6 transition-all duration-200 bg-linear-to-br from-muted-card to-primary/10 hover:scale-105'
            >
              <a
                href={card.link}
                target='_blank'
                className='flex flex-col items-center'
              >
                <span className='mb-4 flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10'>
                  {card.icon}
                </span>
                <h3 className='mb-1 text-xl font-semibold text-center'>
                  {card.title}
                </h3>
                <p className='text-center text-base text-foreground/80'>
                  {card.description}
                </p>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { MenuCategories };
