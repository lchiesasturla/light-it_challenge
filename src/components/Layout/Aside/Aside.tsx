import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';

import AsideItem from './AsideItem/AsideItem';
import styles from './Aside.module.scss';
import { ITab } from '../../../types/tabs';
import { Categories } from '../../../types/categories';

interface IProps {
  tabs: ITab[];
  tabName: Categories | null;
  setTabName: Dispatch<SetStateAction<Categories | null>>
}

const Aside = ({ tabs, tabName, setTabName }: IProps): JSX.Element => (
  <aside className={cn(styles.aside, 'flex justify-center items-center w-24 bg-white')}>
    <ul className='w-full'>
      {tabs.map((tab: ITab) => (
        <AsideItem
          key={tab.name}
          tab={tab}
          active={tabName === tab.name}
          setActive={setTabName}
        />
      ))}
    </ul>
  </aside>
);

export default Aside;