import {
  ArrowRight,
  CakeSlice,
  CalendarDays,
  Gem,
  Heart,
  HeartHandshake,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import imgBase1 from '@/assets/comida/300.jpg';
import imgBase2 from '@/assets/comida/317.jpg';
import imgBase3 from '@/assets/comida/306.jpg';
import getPictureImage from '@/utils/get-picture-image';
import { Picture } from '../ui/picture';

const list = [
  {
    icon: Heart,
    text: 'Casamentos e cerimônias ao ar livre',
  },
  {
    icon: CakeSlice,
    text: 'Aniversários e comemorações em família',
  },
  {
    icon: Gem,
    text: 'Bodas de prata, ouro e diamante',
  },
  {
    icon: HeartHandshake,
    text: 'Renovação de votos',
  },
  {
    icon: Users,
    text: 'Confraternizações e eventos corporativos',
  },
  {
    icon: Sparkles,
    text: 'Celebrações especiais com cardápio exclusivo',
  },
  {
    icon: MapPin,
    text: 'Espaço com vista para a Pedra do Baú',
  },
  {
    icon: CalendarDays,
    text: 'Reserve com antecedência para garantir a data',
  },
];

const List = () => {
  return (
    <ul
      className={cn(
        'grid max-w-145 grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2',
      )}
    >
      {list.map((item, i) => (
        <li key={`cta-item-${i}`} className='flex items-center gap-3'>
          <item.icon className='size-5 stroke-white' />
          <div className='text-sm text-white'>{item.text}</div>
        </li>
      ))}
    </ul>
  );
};

const HomeComplexCta = async () => {
  const [img1, img2, img3] = await Promise.all([
    getPictureImage({ src: imgBase1, width: 813, height: 577 }),
    getPictureImage({ src: imgBase2, width: 813, height: 577 }),
    getPictureImage({ src: imgBase3, width: 813, height: 577 }),
  ]);

  return (
    <section className='dark bg-background py-12 md:py-24 text-foreground'>
      <div className='container'>
        <div className='grid lg:grid-cols-2 gap-6 items-center justify-between'>
          <div className='flex flex-col gap-6'>
            <h2 className='font-bold text-4xl xl:text-5xl max-w-5xl'>
              <span className='block font-medium'>Seu evento especial</span>
              merece o cenário perfeito.
            </h2>
            <p className='text-lg md:text-xl lg:text-2xl max-w-2xl font-normal'>
              O Sabor com Arte realiza eventos privados em um cenário único na
              Serra da Mantiqueira — casamentos, aniversários, bodas e
              celebrações inesquecíveis com cardápio exclusivo e vista para a
              Pedra do Baú.
            </p>
            <List />
            <div>
              <Button size='lg' className='w-full md:w-fit' asChild>
                <a
                  href='https://wa.me/5512996717118?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20do%20espa%C3%A7o%20para%20um%20evento%20no%20Sabor%20com%20Arte.'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Consultar disponibilidade pelo WhatsApp
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
          <div className='hidden lg:grid grid-cols-2 gap-3'>
            <Picture
              src={img1}
              alt='Imagem do restaurante'
              className='h-fit w-full aspect-auto object-cover object-center'
            />
            <Picture
              src={img2}
              alt='Imagem do restaurante'
              className='h-fit w-full aspect-auto object-cover object-center'
            />
            <Picture
              src={img3}
              alt='Imagem do restaurante'
              className='h-full w-full col-span-2 aspect-video object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HomeComplexCta };
