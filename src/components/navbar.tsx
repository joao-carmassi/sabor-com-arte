'use client';
import type { LucideIcon } from 'lucide-react';
import { MenuIcon, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import type { OptimizedPicture } from '@/utils/get-picture-image';
import { Picture } from './ui/picture';
import getZapLink from '@/utils/get-zap-link';

interface MenuItem {
  title: string;
  url?: string;
  description?: string;
  icon?: LucideIcon;
  items?: MenuItem[];
}

interface DesktopNavigationMenuProps {
  handleMobileMenu: () => void;
  open: boolean;
}

interface MobileNavigationMenuProps {
  open: boolean;
}

const CTA_BUTTONS = [
  {
    title: 'Cardapio',
    url: '/cardapio',
    variant: 'outline',
    target: '',
  },
  {
    title: 'Faca seu pedido',
    url: getZapLink(
      'Olá! Gostaria de fazer um pedido para o Restaurante Sabor com Arte.',
    ),
    variant: 'default',
    target: '_blank',
  },
] as const;

const NAVIGATION_GROUPS = [
  {
    title: 'Blog',
    url: '/blog',
  },
  // {
  //   title: 'Riacho Doce',
  //   url: '/pousada-riacho-doce',
  // },
  // {
  //   title: 'Paiol das Artes',
  //   url: '/artesanato-paiol-das-artes',
  // },
] as { title: string; url: string }[];

const DESKTOP_NAVIGATION = [...NAVIGATION_GROUPS];

const MOBILE_BREAKPOINT = 1024;

const Navbar = ({ logo }: { logo: OptimizedPicture }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  const handleMobileMenu = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
  };

  return (
    <section>
      <div className='pointer-events-auto fixed top-0 z-999 w-full bg-background'>
        <DesktopNavigationMenu
          handleMobileMenu={handleMobileMenu}
          logo={logo}
          open={open}
        />
      </div>
      <MobileNavigationMenu open={open} />
      <div className='h-15' />
    </section>
  );
};

const DesktopNavigationMenu = ({
  handleMobileMenu,
  logo,
  open,
}: DesktopNavigationMenuProps & { logo: OptimizedPicture }) => {
  return (
    <div className={`border-b ${!open && 'border-transparent'}`}>
      <div className='container flex h-15 items-center justify-between gap-8.5'>
        <a
          href='/'
          className='flex max-h-8 items-center gap-2 text-lg font-semibold tracking-tighter'
        >
          <Picture
            src={logo}
            alt='Logo Sabor com Arte'
            className='inline-block size-8'
            loading='eager'
          />
          <span className='hidden md:inline-block font-serif text-2xl tracking-normal'>
            Sabor com Arte
          </span>
        </a>
        <NavigationMenu viewport={false} className='hidden lg:flex'>
          <NavigationMenuList className='gap-3!'>
            {DESKTOP_NAVIGATION.map((item, index) =>
              renderDesktopMenuItem(item, index),
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className='space-x-3 hidden lg:flex'>
          {CTA_BUTTONS.map((button) => (
            <Button
              key={button.title}
              size={'lg'}
              variant={button.variant}
              asChild
            >
              <a
                href={button.url}
                target={button.target}
                rel={
                  button.target === '_blank' ? 'noopener noreferrer' : undefined
                }
              >
                {button.title}
              </a>
            </Button>
          ))}
        </div>
        <div className='lg:hidden'>
          <Button
            className='size-11'
            variant='ghost'
            onClick={handleMobileMenu}
            aria-label='Botão para abrir o menu de navegação móvel'
          >
            {open ? (
              <X className='size-5.5' />
            ) : (
              <MenuIcon className='size-5.5' />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

const MobileNavigationMenu = ({ open }: MobileNavigationMenuProps) => {
  return (
    <Sheet open={open}>
      <SheetContent
        aria-describedby={undefined}
        side='top'
        className='inset-0 z-998 h-dvh animate-none! bg-background pt-16 [&>button]:hidden'
      >
        <div className='relative h-full animate-[fade-in_.35s_ease-in-out_forwards]'>
          <div className='absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap'>
            <SheetTitle className='text-primary'>Mobile Navigation</SheetTitle>
          </div>
          <div className='h-[calc(100%-7.5rem)] overflow-y-auto'>
            <div className='container'>
              <Accordion
                type='multiple'
                className='w-full'
                defaultValue={['nav-0']}
              >
                {NAVIGATION_GROUPS.map((item, index) =>
                  renderMobileMenuItem(item, index),
                )}
              </Accordion>
            </div>
          </div>
          <div className='sticky bottom-0'>
            <div className='container'>
              <div className='flex flex-col-reverse gap-3 border-t py-4'>
                {CTA_BUTTONS.map((button) => (
                  <Button
                    key={button.title}
                    size={'lg'}
                    variant={button.variant}
                    asChild
                  >
                    <a key={button.title} href={button.url}>
                      {button.title}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const renderMobileMenuItem = (item: MenuItem, index: number) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={`nav-${index}`}>
        <AccordionTrigger className='h-15 items-center p-0 text-base leading-[3.75] font-bold no-underline hover:no-underline'>
          {item.title}
        </AccordionTrigger>
        <AccordionContent className='[&_a]:no-underline'>
          {item.items.map((subItem) => (
            <MobileSubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className='flex h-15 items-center border-b p-0 text-left text-base leading-[3.75] font-bold no-underline ring-ring/10 outline-ring/50 transition-all focus-visible:ring-4 focus-visible:outline-1 nth-last-1:border-0'
    >
      {item.title}
    </a>
  );
};

const renderDesktopMenuItem = (item: MenuItem, index: number) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} value={`${index}`}>
        <NavigationMenuTrigger asChild>
          <Button variant='ghost' size='lg'>
            <div>{item.title}</div>
          </Button>
        </NavigationMenuTrigger>
        <NavigationMenuContent className='px-1 py-1.5'>
          <ul className='min-w-32.5'>
            {item.items.map((subItem) => (
              <li key={subItem.title} className='w-full'>
                <NavigationMenuLink asChild>
                  <DesktopSubMenuLink item={subItem} />
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem asChild key={item.title} value={`${index}`}>
      <Button asChild variant='ghost' size='lg'>
        <NavigationMenuLink href={item.url}>{item.title}</NavigationMenuLink>
      </Button>
    </NavigationMenuItem>
  );
};

const MobileSubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className='flex w-full min-w-fit flex-row items-center gap-2.5 rounded-md px-2 py-1.25 no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground'
      href={item.url}
    >
      {item.icon && (
        <div className='basis-8.5'>
          <div className='flex size-8.5 shrink-0 rounded-md border bg-background'>
            <item.icon className='m-auto size-5' />
          </div>
        </div>
      )}
      <div className='text-base leading-normal whitespace-nowrap'>
        {item.title}
      </div>
    </a>
  );
};

const DesktopSubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className={`${item.icon && 'pr-8'} flex w-full min-w-fit flex-row items-center gap-2.5 rounded-md px-2 py-1.25 transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground`}
      href={item.url}
    >
      {item.icon && (
        <div className='basis-8.5'>
          <div className='flex size-8.5 shrink-0 rounded-md border bg-background'>
            <item.icon className='m-auto size-5' />
          </div>
        </div>
      )}
      <div>
        <div className='text-[0.9375rem] leading-normal font-medium whitespace-nowrap'>
          {item.title}
        </div>
        {item.description && (
          <p className='text-sm leading-[1.2] whitespace-nowrap text-muted-foreground'>
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default Navbar;
