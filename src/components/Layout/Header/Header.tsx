import Dropdown from '../../Common/Dropdown/Dropdown';

const Header = (): JSX.Element => {
  return (
    <header className='bg-zinc-800 flex h-20 items-center px-20'>
        <img src="/assets/logo.png" alt="Logo" className='w-12 invert'/>
        <Dropdown
          items={['Guardar y salir', 'Salir sin guardar', 'Guardar y continuar']}
        />
    </header>
  );
}
 
export default Header;