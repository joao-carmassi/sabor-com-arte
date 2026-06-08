import { cn } from '@/lib/utils';
import type { ClassNameValue } from 'tailwind-merge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface Props {
  className: ClassNameValue;
  src: string;
}

export default function AvatarIcon({ className, src }: Props) {
  return (
    <Avatar className={className as string}>
      <AvatarImage src={src} />
    </Avatar>
  );
}
