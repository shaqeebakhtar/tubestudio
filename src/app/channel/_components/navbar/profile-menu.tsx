import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import LogoutButton from './logout-button';
import { Tv } from 'lucide-react';
import { authOptions } from '@/lib/auth-options';

const ProfileMenu = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="w-9 h-9">
              <AvatarImage src={session?.user.image || ''} />
              <AvatarFallback className="font-semibold bg-zinc-600 uppercase">
                {session && session.user && session?.user?.name![0]}
                {session &&
                  session.user &&
                  session?.user?.name![session?.user?.name?.length! - 1]}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 font-medium" align="end">
          <DropdownMenuLabel className="flex items-center space-x-2 py-3">
            <Avatar className="w-9 h-9">
              <AvatarImage src={session?.user.image || ''} />
              <AvatarFallback className="font-semibold bg-zinc-600 uppercase">
                {session && session.user && session?.user?.name![0]}
                {session &&
                  session.user &&
                  session?.user?.name![session?.user?.name?.length! - 1]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-1 overflow-hidden">
              <p className="text-sm truncate">{session?.user.name}</p>
              <p className="text-xs leading-none truncate">
                {session?.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={`/channel`}>
            <DropdownMenuItem>
              <Tv className="w-4 h-4 mr-2" />
              Channel
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <LogoutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileMenu;
