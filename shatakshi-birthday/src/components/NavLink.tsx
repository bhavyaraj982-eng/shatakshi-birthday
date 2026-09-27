'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <Link href={href} className={cn(className)}>
      <motion.a whileTap={{ scale: 0.98 }}>{children}</motion.a>
    </Link>
  );
}