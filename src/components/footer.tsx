import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
import fotoBase from '@/assets/logo.png';
import { Button } from './ui/button';
import { Picture } from './ui/picture';
import getPictureImage from '@/utils/get-picture-image';
import getZapLink from '@/utils/get-zap-link';

const { sections, socialLinks } = {
  sections: [
    // {
    //   title: 'Riacho Doce',
    //   url: '/pousada-riacho-doce',
    // },
    // {
    //   title: 'Paiol das Artes',
    //   url: '/artesanato-paiol-das-artes',
    // },
    {
      title: 'Blog',
      url: '/blog',
    },
    {
      title: 'Cardapio',
      url: '/cardapio',
    },
    {
      title: 'Faca seu pedido',
      url: getZapLink(
        'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
      ),
    },
  ],
  socialLinks: [
    {
      href: 'https://share.google/3qCnZPcr4JxDTmdmR',
      label: 'Google',
      icon: FaGoogle,
    },
    {
      href: 'https://www.instagram.com/saborcomarte_restaurante/',
      label: 'Instagram',
      icon: FaInstagram,
    },
    {
      href: 'https://web.facebook.com/saborcomarte1/?locale=pt_BR',
      label: 'Facebook',
      icon: FaFacebook,
    },
  ],
};

const Footer = async () => {
  const fotoLogo = await getPictureImage({
    src: fotoBase,
    width: 80,
    height: 80,
  });

  return (
    <section className='dark bg-card py-4'>
      <div className='container mx-auto'>
        <footer>
          <div className='flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <a href='/' className='inline-flex shrink-0'>
              <Picture
                src={fotoLogo}
                alt={'Logo do Sabor com Arte'}
                className='size-20'
              />
            </a>
            <nav
              aria-label='Footer'
              className='flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:flex-1 lg:justify-center'
            >
              {sections?.map((section) => (
                <Button
                  className='text-muted-foreground'
                  key={section.title}
                  asChild
                  variant={'link'}
                  size='sm'
                >
                  <a href={section.url}>{section.title}</a>
                </Button>
              ))}
            </nav>
            <ul
              className='flex items-center gap-1.5'
              aria-label='Social media links'
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label} className='text-muted-foreground'>
                    <Button
                      className='rounded-full'
                      asChild
                      variant={'ghost'}
                      size='icon'
                    >
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={social.href}
                        aria-label={social.label}
                      >
                        <Icon />
                      </a>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
