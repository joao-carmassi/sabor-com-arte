'use client';

import { MoveRight } from 'lucide-react';

import { cn } from '@/lib/utils';

interface HomeAmbiencesProps {
  className?: string;
}

const HomeAmbiences = ({ className }: HomeAmbiencesProps) => {
  return (
    <section className={cn('py-32', className)}>
      <div className='container'>
        <h2 className='text-4xl font-semibold'>
          5 Ambientes. Uma Vista que Você Não Vai Querer Perder.
        </h2>
        <p className='mt-3 text-xl font-medium text-muted-foreground'>
          Do deck externo com a Pedra do Baú ao salão aquecido com lareira
        </p>

        <div className='mt-16 flex flex-col overflow-hidden rounded-2xl bg-muted md:flex-row'>
          <div className='flex w-full items-center bg-muted md:w-1/2'>
            <img
              src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg'
              alt='placeholder'
              className='max-h-64 w-full object-cover'
            />
          </div>
          <div className='flex w-full flex-col justify-center gap-6 px-8 py-7 md:w-1/2 md:px-12 md:py-10'>
            <h6 className='text-lg font-semibold md:text-2xl'>
              Deck de Entrada e Primeiro Salão
            </h6>

            <div className='h-px w-full bg-muted-foreground' />

            <p className='text-muted-foreground'>
              Ao chegar, o deck coberto dá as boas-vindas com a brisa da serra.
              O primeiro salão combina madeira rústica e conforto, ideal para
              grupos e famílias.
            </p>
            <a
              href='#ambientes'
              className='inline-flex items-center font-medium hover:underline'
            >
              <span>Conhecer os ambientes</span>
              <MoveRight strokeWidth={2} className='ml-2 size-4' />
            </a>
          </div>
        </div>

        <div className='mt-16 flex flex-col overflow-hidden rounded-2xl bg-muted md:flex-row'>
          <div className='flex w-full flex-col justify-center gap-6 px-8 py-7 md:w-1/2 md:px-12 md:py-10'>
            <h6 className='text-lg font-semibold md:text-2xl'>
              Deck Externo com Vista da Pedra do Baú
            </h6>

            <div className='h-px w-full bg-muted-foreground' />

            <p className='text-muted-foreground'>
              O ambiente mais requisitado do restaurante. Mesas ao ar livre com
              vista direta para a Pedra do Baú — perfeito para o almoço do fim
              de semana. Reserve com antecedência.
            </p>
            <a
              href='https://wa.me/5512996717118?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20mesa%20no%20deck%20externo%20do%20Sabor%20com%20Arte.'
              className='inline-flex items-center font-medium hover:underline'
            >
              <span>Reservar mesa no deck</span>
              <MoveRight strokeWidth={2} className='ml-2 size-4' />
            </a>
          </div>
          <div className='flex w-full items-center bg-muted md:w-1/2'>
            <img
              src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg'
              alt='placeholder'
              className='max-h-64 w-full object-cover'
            />
          </div>
        </div>

        <div className='mt-16 flex flex-col overflow-hidden rounded-2xl bg-muted md:flex-row'>
          <div className='flex w-full items-center bg-muted md:w-1/2'>
            <img
              src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg'
              alt='placeholder'
              className='max-h-64 w-full object-cover'
            />
          </div>
          <div className='flex w-full flex-col justify-center gap-6 px-8 py-7 md:w-1/2 md:px-12 md:py-10'>
            <h6 className='text-lg font-semibold md:text-2xl'>
              Segundo Salão e Mezanino
            </h6>

            <div className='h-px w-full bg-muted-foreground' />

            <p className='text-muted-foreground'>
              Para quem prefere mais privacidade ou uma visão privilegiada do
              salão principal. O mezanino com lareira é ideal para dias frios na
              serra — aquecido e aconchegante.
            </p>
            <a
              href='https://wa.me/5512996717118?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Sabor%20com%20Arte.'
              className='inline-flex items-center font-medium hover:underline'
            >
              <span>Fazer uma reserva</span>
              <MoveRight strokeWidth={2} className='ml-2 size-4' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HomeAmbiences };
