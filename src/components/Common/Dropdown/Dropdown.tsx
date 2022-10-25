import { ReactNode, useState } from 'react';

import ButtonWithChevron from '../Button/ButtonWithChevron/ButtonWithChevron';
import { ChevronDirection } from '../../../types/button';

const DropdownItem = ({ children }: {children: ReactNode}) => (
  <button className="text-gray-700 block px-4 py-2 text-sm w-full hover:bg-gray-50" role="menuitem">
    {children}
  </button>
)

interface IProps {
  items: ReactNode[]
}

const Dropdown = ({ items }: IProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className='relative ml-auto'>
        <ButtonWithChevron
          type='button'
          id="menu-button"
          chevronOptions={{chevronClassName: '!ml-2', direction: ChevronDirection.Bottom}}
          aria-expanded="true" 
          aria-haspopup="true"
          onClick={() => setShow(prevState => !prevState)}
        >
          Guardar y salir
        </ButtonWithChevron>
      {
        show &&
        (
          <div className="absolute right-0 top-8 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1" role="none">
              {items && items.map((item: ReactNode, idx: number) => (
                <DropdownItem key={`dropdown-${idx}`}>{item}</DropdownItem>
              ))}
            </div>
          </div>
        )
      }

    </div>
  );
}
 
export default Dropdown;