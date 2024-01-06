import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, Tv } from 'lucide-react';
import Link from 'next/link';

const ProfileMenu = async () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="w-9 h-9">
              <AvatarImage src={''} />
              <AvatarFallback className="font-semibold bg-zinc-600 uppercase">
                SA
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 font-medium" align="end">
          <DropdownMenuLabel className="flex items-center space-x-2 py-3">
            <Avatar className="w-9 h-9">
              <AvatarImage src={''} />
              <AvatarFallback className="font-semibold bg-zinc-600 uppercase">
                SA
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-1 overflow-hidden">
              <p className="text-sm truncate">shaqeeb</p>
              <p className="text-xs leading-none truncate">shaqeeb@gmail.com</p>
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

          <DropdownMenuItem>
            <LogOut className="w-4 h-4 mr-2 rotate-180" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileMenu;
