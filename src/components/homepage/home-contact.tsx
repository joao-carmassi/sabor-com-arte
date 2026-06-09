import { getPUBLIC_EMAIL, getPhoneNumber } from '@/utils/env';
import getZapLink from '@/utils/get-zap-link';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { parsePhoneNumber } from 'libphonenumber-js';

const HomeContact = () => {
  const phoneNumber = parsePhoneNumber(getPhoneNumber(), 'BR');

  return (
    <section className='py-12 md:py-24'>
      <div className='container'>
        <div className='mx-auto'>
          <div className='mb-8 md:mb-14'>
            <h2 className='mb-6 font-bold text-4xl xl:text-5xl max-w-5xl'>
              Como nos Encontrar
            </h2>
            <p className='text-lg font-normal text-muted-foreground md:text-xl'>
              Estamos no Km 5 da Rodovia Benedito Gomes de Souza, no Bairro do
              Paiol Grande, São Bento do Sapucaí (SP) — a 5 km do centro, com
              estacionamento privativo.
            </p>
          </div>
          <div className='grid gap-6 md:grid-cols-2'>
            <div className='rounded-xl bg-muted/50 p-8 inset-shadow-sm'>
              <Mail className='mb-4 size-5 text-muted-foreground' />
              <p className='mb-1 font-medium'>E-mail</p>
              <p className='mb-4 text-sm text-muted-foreground'>
                Respondemos em até 24 horas.
              </p>
              <a
                href={`mailto:${getPUBLIC_EMAIL()}`}
                className='hover:underline break-all'
              >
                {getPUBLIC_EMAIL()}
              </a>
            </div>
            <div className='rounded-xl bg-muted/50 p-8 inset-shadow-sm'>
              <MapPin className='mb-4 size-5 text-muted-foreground' />
              <p className='mb-1 font-medium'>Endereço</p>
              <p className='mb-4 text-sm text-muted-foreground'>
                Rod. Benedito Gomes de Souza, Km 5 — Bairro do Paiol Grande, São
                Bento do Sapucaí, SP
              </p>
              <a
                href='https://maps.app.goo.gl/J6hfLqUz8uAwz3Ub9'
                className='hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ver no Google Maps
              </a>
            </div>
            <div className='rounded-xl bg-muted/50 p-8 inset-shadow-sm'>
              <Phone className='mb-4 size-5 text-muted-foreground' />
              <p className='mb-1 font-medium'>Telefone / WhatsApp</p>
              <p className='mb-4 text-sm text-muted-foreground'>
                Seg. a qui.: 11h–17h · Sex., sáb. e dom.: 11h–23h
              </p>
              <a href={`tel:${getPhoneNumber()}`} className='hover:underline'>
                {phoneNumber.formatNational()}
              </a>
            </div>
            <div className='rounded-xl bg-muted/50 p-8 inset-shadow-sm'>
              <MessageCircle className='mb-4 size-5 text-muted-foreground' />
              <p className='mb-1 font-medium'>WhatsApp</p>
              <p className='mb-4 text-sm text-muted-foreground'>
                Clique para reservar ou tirar dúvidas pelo WhatsApp.
              </p>
              <a
                href={getZapLink(
                  'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
                )}
                className='hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Abrir WhatsApp
              </a>
            </div>
            <iframe
              className='rounded-xl inset-shadow-sm md:col-span-2 w-full'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.425967023618!2d-45.68430658846036!3d-22.6751814793329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc7b8ed83941cb%3A0xcecc4bf87026eb86!2sRestaurante%20Sabor%20com%20Arte!5e0!3m2!1spt-BR!2sbr!4v1780775667959!5m2!1spt-BR!2sbr'
              width='600'
              height='450'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Mapa de localização do Restaurante Sabor com Arte no Google Maps'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HomeContact };
