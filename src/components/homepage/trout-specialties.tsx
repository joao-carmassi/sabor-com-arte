import { Badge } from '@/components/ui/badge';
import imgBase1 from '@/assets/comida/381.jpeg';
import imgBase2 from '@/assets/comida/357.jpg';
import imgBase3 from '@/assets/comida/380.jpg';
import imgBase4 from '@/assets/comida/46.jpg';
import getPictureImage from '@/utils/get-picture-image';
import { Picture } from '../ui/picture';
import getZapLink from '@/utils/get-zap-link';

const TroutSpecialties = async () => {
  const [img1, img2, img3, img4] = await Promise.all([
    getPictureImage({ src: imgBase1, width: 800, height: 800 }),
    getPictureImage({ src: imgBase2, width: 800, height: 800 }),
    getPictureImage({ src: imgBase3, width: 800, height: 800 }),
    getPictureImage({ src: imgBase4, width: 800, height: 800 }),
  ]);

  return (
    <section className='py-12 md:py-24'>
      <div className='container'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <Badge className='rounded-full'>Cardápio</Badge>
          <h2 className='text-center font-bold text-4xl xl:text-5xl max-w-5xl'>
            Do Buffet à la Carte até a Pizza no Forno: Tem Para Todo Gosto
          </h2>
          <p className='max-w-2xl text-center text-lg font-normal text-muted-foreground md:text-xl'>
            Mais de 35 opções à la carte com a truta como destaque. Uma cozinha
            que respeita os sabores da Serra da Mantiqueira.
          </p>
        </div>
        <div className='mt-8 md:mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          <Picture
            src={img1}
            alt='Trutas frescas da Serra da Mantiqueira, preparadas de diversas formas: flambada, recheada com queijo, grelhada e ao molho. O prato que é a especialidade da casa e faz todo mundo voltar.'
            className='border aspect-square size-full rounded-2xl object-cover md:order-1 xl:order-1'
          />
          <div className='flex flex-col justify-between gap-20 rounded-2xl bg-muted/50 p-12 md:order-2 md:gap-32 xl:order-2 inset-shadow-sm'>
            <h3 className='text-2xl font-bold tracking-tight'>
              Trutas — A Especialidade da Casa
            </h3>
            <div>
              <p className='mb-8 font-normal text-muted-foreground'>
                7 preparos exclusivos com truta fresca da Serra da Mantiqueira —
                flambada, recheada com queijo, grelhada, ao molho e no buffet. O
                prato que faz todo mundo voltar.
              </p>
              <a
                target='_blank'
                href={getZapLink(
                  'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
                )}
                className='text-sm underline'
              >
                Reservar uma mesa
              </a>
            </div>
          </div>
          <Picture
            src={img2}
            alt='Trutas frescas da Serra da Mantiqueira, preparadas de diversas formas: flambada, recheada com queijo, grelhada e ao molho. O prato que é a especialidade da casa e faz todo mundo voltar.'
            className='border aspect-square size-full rounded-2xl object-cover md:order-4 xl:order-3'
          />
          <div className='flex flex-col justify-between gap-20 rounded-2xl bg-linear-to-br from-secondary/50 to-secondary/15 p-12 md:order-3 md:gap-32 xl:order-4 inset-shadow-sm'>
            <h3 className='text-2xl font-bold tracking-tight text-foreground'>
              Carnes, Pizzas e Panquecas
            </h3>
            <div className=''>
              <p className='mb-8 font-normal text-muted-foreground'>
                Mais de 18 sabores de pizza no forno a lenha, panquecas doces e
                salgadas, cortes selecionados de carne e porções generosas. Tem
                para todo gosto e toda a família.
              </p>
              <a
                href={getZapLink(
                  'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
                )}
                className='text-sm underline'
              >
                Ver cardápio completo
              </a>
            </div>
          </div>

          <Picture
            src={img3}
            alt='Trutas frescas da Serra da Mantiqueira, preparadas de diversas formas: flambada, recheada com queijo, grelhada e ao molho. O prato que é a especialidade da casa e faz todo mundo voltar.'
            className='border aspect-square size-full rounded-2xl object-cover md:order-5 xl:order-6'
          />
          <div className='flex flex-col justify-between gap-20 rounded-2xl bg-linear-to-br from-secondary/50 to-secondary/15 p-12 md:order-6 md:gap-32 xl:order-5 inset-shadow-sm'>
            <h3 className='text-2xl font-bold tracking-tight'>
              Bebidas & Vinhos
            </h3>
            <div className=''>
              <p className='mb-8 font-normal text-muted-foreground'>
                Vinhos selecionados, cervejas artesanais, caipirinhas e sucos
                naturais da roça. A bebida certa para cada momento da sua
                refeição na serra.
              </p>
              <a
                href={getZapLink(
                  'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
                )}
                className='text-sm underline'
              >
                Ver cardápio completo
              </a>
            </div>
          </div>
          <Picture
            src={img4}
            alt='Sobremesas do Sabor com Arte: Petit Gateau, Fondue, Banana Flambada com sorvete, Panqueca de chocolate e Pizzas doces. O final perfeito para uma refeição inesquecível.'
            className='border aspect-square size-full rounded-2xl object-cover md:order-8'
          />
          <div className='flex flex-col justify-between gap-20 rounded-2xl bg-muted/50 p-12 md:order-7 md:gap-32 inset-shadow-sm'>
            <h3 className='text-2xl font-bold tracking-tight'>
              Sobremesas do Sabor com Arte
            </h3>
            <div className=''>
              <p className='mb-8 font-normal text-muted-foreground'>
                Petit Gateau, Fondue, Banana Flambada com sorvete, Panqueca de
                chocolate e Pizzas doces. O final irresistível para fechar a sua
                refeição na Serra da Mantiqueira com chave de ouro.
              </p>
              <a
                href={getZapLink(
                  'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
                )}
                className='text-sm underline'
              >
                Reservar uma mesa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TroutSpecialties };
