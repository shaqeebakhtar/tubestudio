'use client';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';
import { FileVideo, LayoutDashboard, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const { collapsed } = useSidebar((state) => state);

  const channelId = 'test';

  const baseClass =
    'h-12 flex items-center space-x-3 w-full hover:bg-zinc-900 px-6 py-3 text-zinc-400 font-medium';

  return (
    <nav className="flex flex-col items-center">
      <Link
        href={`/channel/${channelId}`}
        className={cn(
          baseClass,
          pathname === `/channel/${channelId}` &&
            'bg-zinc-900 text-primary font-semibold'
        )}
      >
        <LayoutDashboard className="w-5 h-5" />
        {!collapsed && <span>Dashboard</span>}
      </Link>
      <Link
        href={`/channel/${channelId}/videos`}
        className={cn(
          baseClass,
          pathname === `/channel/${channelId}/videos` &&
            'bg-zinc-900 text-primary font-semibold'
        )}
      >
        <FileVideo className="w-5 h-5" />
        {!collapsed && <span>Videos</span>}
      </Link>
      <Link
        href={`/channel/${channelId}/editors`}
        className={cn(
          baseClass,
          pathname === `/channel/${channelId}/editors` &&
            'bg-zinc-900 text-primary font-semibold'
        )}
      >
        <Users className="w-5 h-5" />
        {!collapsed && <span>Editors</span>}
      </Link>
      <Link
        href={`/channel/${channelId}/settings`}
        className={cn(
          baseClass,
          pathname === `/channel/${channelId}/settings` &&
            'bg-zinc-900 text-primary font-semibold'
        )}
      >
        <Settings className="w-5 h-5" />
        {!collapsed && <span>Settings</span>}
      </Link>
    </nav>
  );
};

export default Navigation;
