'use client';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/store/use-sidebar';
import React from 'react';
import { Menu } from 'lucide-react';

const SidebarToggle = () => {
  const { collapsed, onToggle } = useSidebar((state) => state);

  return (
    <Button
      onClick={onToggle}
      variant={'ghost'}
      className="hover:bg-zinc-700"
      size={'icon'}
    >
      <Menu />
    </Button>
  );
};

export default SidebarToggle;
