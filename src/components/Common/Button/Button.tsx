import { HTMLProps, ReactNode } from 'react';
import cn from 'classnames';

import { ButtonType } from '../../../types/button';

interface IProps {
  className?: string;
  children?: ReactNode;
  type: ButtonType;
  onClick: Function;
}

const Button = ({
  className,
  children,
  type,
  onClick,
  ...rest
}: IProps & HTMLProps<HTMLButtonElement>): JSX.Element => {
  return (
    <button
      type={type}
      className={cn(className, 'bg-white px-4 py-2 rounded-md text-sm hover:bg-gray-50')}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
 
export default Button;