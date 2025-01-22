import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo2 from '../assets/logo2.png'
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      
      <Typography
        as="li"
        variant="h6"
        color="white"
        className="p-1 font-medium"
      >
        <a href="#about" className="flex items-center hover:text-bluep transition-colors">
          Quién soy
        </a>
      </Typography>
      
      <Typography
        as="li"
        variant="h6"
        color="white"
        className="p-1 font-medium"
      >
        <a href="#work" className="flex items-center hover:text-bluep transition-colors">
          Mi trabajo
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="white"
        className="p-1 font-medium"
      >
        <a href="#contact" className="flex items-center hover:text-bluep transition-colors">
          Contacto
        </a>
      </Typography>
    </ul>
  );
}
 
export function NavbarUse() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3" color="transparent">
      <div className="flex items-center justify-between ">
        <img src={logo2} alt="" className="rounded-lg h-40 " />
        
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
export default NavbarUse;