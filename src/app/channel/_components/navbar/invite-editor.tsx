import { UserPlus } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const InviteEditor = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'secondary'}
          className="border-2 border-primary font-semibold"
        >
          <UserPlus className="h-4 w-4 mr-2 text-primary" strokeWidth={3} />
          Invite Editor
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="space-y-3 px-8 py-6">
          <DialogTitle className="text-center">Invite Editor</DialogTitle>
          <DialogDescription className="text-center">
            Invite an editor to join your channel. Invitations will be valid for
            14 days.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2 px-8">
          <Label htmlFor="email" className="font-light">
            Email
          </Label>
          <Input id="email" placeholder="example@domain.com" />
        </div>
        <DialogFooter className="px-8 pb-6">
          <Button type="submit" className="w-full">
            Send Invite
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InviteEditor;
