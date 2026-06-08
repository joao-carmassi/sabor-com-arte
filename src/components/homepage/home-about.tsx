import { Button } from '@/components/ui/button';
import getZapLink from '@/utils/get-zap-link';
import img1 from '@/assets/comida/236.jpg';
import img2 from '@/assets/comida/373.jpeg';
import img3 from '@/assets/comida/67.jpg';
import img4 from '@/assets/comida/68.jpg';
import { Picture } from '../ui/picture';
import getPictureImage from '@/utils/get-picture-image';

const HomeAbout = async () => {
  const [image1, image2, image3, image4] = await Promise.all([
    getPictureImage({ src: img1, width: 708, height: 400 }),
    getPictureImage({ src: img2, width: 708, height: 400 }),
    getPictureImage({ src: img3, width: 708, height: 400 }),
    getPictureImage({ src: img4, width: 708, height: 400 }),
  ]);

  return (
    <section>
      <div className='mt-10 grid lg:grid-cols-2 gap-6 py-12 md:py-24 container mx-auto'>
        {/* Images Left - Text Right (hard-coded) */}
        <div className='flex flex-col gap-6'>
          <div className='flex-1 space-y-6 text-lg md:space-y-6'>
            <h2 className='font-bold text-4xl xl:text-5xl max-w-5xl'>
              Um Destino Gastronômico no Coração da Serra da Mantiqueira
            </h2>
            <div className='space-y-6 text-muted-foreground'>
              <p className='max-w-2xl text-lg font-normal text-muted-foreground md:text-xl text-justify md:text-left'>
                O Restaurante Sabor com Arte está localizado no Km 5 da Rodovia
                Benedito Gomes de Souza, no Bairro do Paiol Grande — a poucos
                metros da Cachoeira dos Amores e com vista privilegiada para a
                Pedra do Baú, cartão-postal de São Bento do Sapucaí.
              </p>
              <p className='max-w-2xl text-lg font-normal text-muted-foreground md:text-xl text-justify md:text-left'>
                Fundado com a missão de celebrar os sabores da região serrana,
                nosso restaurante é reconhecido pela especialidade em truta,
                pelo fogão a lenha e pelo atendimento caloroso que faz cada
                visita parecer um retorno para casa.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <Picture
              src={image1}
              alt='Modern workspace'
              className='aspect-video h-full w-full object-cover rounded-lg border'
            />
            <Picture
              src={image2}
              alt='Modern workspace'
              className='aspect-video h-full w-full object-cover rounded-lg border'
            />
          </div>
        </div>
        {/* Text Left - Images Right (hard-coded) */}
        <div className='flex flex-col-reverse lg:flex-col gap-6'>
          <div className='flex flex-col gap-6'>
            <Picture
              src={image3}
              alt='Modern workspace'
              className='aspect-video h-full w-full object-cover rounded-lg border'
            />
            <Picture
              src={image4}
              alt='Modern workspace'
              className='aspect-video h-full w-full object-cover rounded-lg border'
            />
          </div>
          <div className='flex-1 space-y-6 text-lg md:space-y-6'>
            <div className='space-y-6 text-muted-foreground'>
              <p className='max-w-2xl text-lg font-normal text-muted-foreground md:text-xl text-justify md:text-left'>
                Fazemos parte de um complexo que inclui a Pousada Riacho Doce e
                o Paiol das Artes — sua hospedagem e suas lembranças em um só
                lugar.
              </p>
              <p className='max-w-2xl text-lg font-normal text-muted-foreground md:text-xl text-justify md:text-left'>
                Nossa cozinha é comandada com dedicação e respeito à tradição
                serrana. O fogão a lenha é o coração do restaurante — é nele que
                nascem os caldos, os assados e o tempero único que os clientes
                reconhecem desde a primeira garfada.
              </p>
              <p className='max-w-2xl text-lg font-normal text-muted-foreground md:text-xl text-justify md:text-left'>
                Aos fins de semana, o buffet livre reúne famílias inteiras em
                torno de uma mesa farta: saladas frescas, trutas preparadas de
                diferentes formas, acompanhamentos da roça, sobremesas da casa —
                Petit Gateau, Fondue, Banana Flambada — e muito mais. Um
                verdadeiro festim na serra.
              </p>
              <div>
                <Button className='w-full md:w-fit' size='lg' asChild>
                  <a
                    target='_blank'
                    href={getZapLink(
                      'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
                    )}
                  >
                    Reservar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HomeAbout };
