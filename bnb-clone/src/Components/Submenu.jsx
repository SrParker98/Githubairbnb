import Dropdown from 'react-dropdown';

import { BsPersonCircle } from "react-icons/bs";

export default function Submenu() {
  const options = [
    'Registrarse',
    'Iniciar Sesión',
    'Ser anfitrión'
  ];

  return (
    
      <Dropdown placeholder= {<BsPersonCircle className='icon-right-topbar'/>}  arrowClassName='myArrowClassName'  />
    
  );
}