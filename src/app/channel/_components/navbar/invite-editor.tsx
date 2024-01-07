import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import React from 'react';

const InviteEditor = () => {
  return (
    <Button
      variant={'secondary'}
      className="border-2 border-primary font-semibold"
    >
      <UserPlus className="h-4 w-4 mr-2 text-primary" strokeWidth={3} />
      Invite Editor
    </Button>
  );
};

export default InviteEditor;
