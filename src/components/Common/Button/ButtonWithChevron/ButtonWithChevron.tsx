import { HTMLProps, ReactNode } from 'react';
import cn from 'classnames';

import Button from '../Button';
import { ButtonType, ChevronDirection, ChevronPosition, IChevronOptions } from '../../../../types/button';

interface IProps {
  className?: string;
  children?: ReactNode;
  type: ButtonType;
  chevronOptions?: IChevronOptions;
  onClick: Function;
}

const ButtonWithChevron = ({
  className,
  children,
  type,
  chevronOptions = {},
  onClick,
  ...rest
}: IProps & HTMLProps<HTMLButtonElement>): JSX.Element => {
  
  const {
    chevronClassName,
    position = ChevronPosition.Right,
    direction = position === ChevronPosition.Right ? ChevronDirection.Right : ChevronDirection.Left
  } = chevronOptions

  return (
    <Button type={type} className={cn(className, 'flex items-center')} onClick={onClick} {...rest}>
      {position === ChevronPosition.Left
        ?
        (
          <>
            <img
              src='/assets/chevron.png'
              alt='chevron left'
              className={cn('mr-auto w-3', direction, chevronClassName)}
            />
            {children}
          </>
        )
        :
        (
          <>
            {children}
            <img
              src='/assets/chevron.png'
              alt='chevron right'
              className={cn(chevronClassName, 'ml-auto w-3', direction)}
            />
          </>
        )
      }


    </Button>
  );
}

export default ButtonWithChevron;