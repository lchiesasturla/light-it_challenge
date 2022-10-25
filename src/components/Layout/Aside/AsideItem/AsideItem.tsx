import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';

import styles from './AsideItem.module.scss';
import { ITab } from '../../../../types/tabs';
import { Categories } from '../../../../types/categories';

interface IProps {
  tab: ITab;
  active: boolean;
  setActive: Dispatch<SetStateAction<Categories | null>>
}

const AsideItem = ({tab, active, setActive}: IProps): JSX.Element => {

  const {name, icon} = tab;

  return (
    <li 
      className={
        cn(
          'relative flex flex-col items-center p-6 cursor-pointer transition-colors', styles.asideItem, 
          {[styles.asideItem_active]: active, 'hover:bg-gray-100': !active}
        )
      } 
      onClick={() => setActive(name)}
    >
      <img src={icon} alt={`${name} Icon`} className='w-9 h-9'/>
      <span className='text-xs'>{name}</span>
    </li>
  );
}
 
export default AsideItem;