'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { Home } from 'lucide-react';

const Blogpost = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <section className='py-12 md:py-24 pt-8 md:pt-12'>
      <div className='container'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>
                <Home className='h-4 w-4' />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className='mt-6 mb-6 font-bold text-4xl xl:text-5xl'>{title}</h1>
        <Separator className='mt-6 mb-12' />
        <div className='prose dark:prose-invert max-w-none'>{children}</div>
      </div>
    </section>
  );
};

export default Blogpost;
