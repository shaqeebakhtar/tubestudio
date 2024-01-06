import InviteEditor from './invite-editor';
import ProfileMenu from './profile-menu';
import SidebarToggle from './sidebar-toggle';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-secondary py-2 px-4 w-full border-b-2 border-background">
      <div className="flex items-center space-x-3">
        <SidebarToggle />
        <p className="hidden md:block font-black uppercase tracking-wide">
          TubeStudio
        </p>
      </div>
      <div className="flex items-center  space-x-4">
        <InviteEditor />
        <ProfileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
