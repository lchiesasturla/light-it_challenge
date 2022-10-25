import { useState } from 'react';
import cn from 'classnames';

import Aside from '../Aside/Aside';
import Category from '../../Category/Category';
import ButtonWithChevron from '../../Common/Button/ButtonWithChevron/ButtonWithChevron';
import styles from './CategorySelector.module.scss';
import { Categories } from '../../../types/categories';
import { ChevronDirection } from '../../../types/button';
import { ITab } from '../../../types/tabs';

const tabs: ITab[] = [
  { name: Categories.Apertures, icon: '/assets/icons/categories/Aberturas.png'},
  { name: Categories.Equipment, icon: '/assets/icons/categories/Equipamiento.png'},
  { name: Categories.Termination, icon: '/assets/icons/categories/Terminaciones.png'},
]

const CategorySelector = () => {
  const [tabName, setTabName] = useState<Categories | null>(null);

  return (
    <>
      <Aside
        tabs={tabs}
        tabName={tabName}
        setTabName={setTabName}
      />
      {tabName && (
        <>
          <Category title={tabName} />
          <ButtonWithChevron
            type='button'
            className={cn('h-16 !bg-gray-100 !rounded-none self-center relative !px-1.5', styles.categorySelectorActive)}
            chevronOptions={{direction: ChevronDirection.Left}}
            onClick={() => setTabName(null)}
          />
        </>
      )}
    </>
  );
}

export default CategorySelector;