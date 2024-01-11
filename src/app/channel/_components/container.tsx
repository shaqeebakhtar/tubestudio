'use client';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';
import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <div className={cn('flex-1', collapsed ? 'pl-[72px]' : 'pl-60')}>
      {children}
    </div>
  );
};

export default Container;
