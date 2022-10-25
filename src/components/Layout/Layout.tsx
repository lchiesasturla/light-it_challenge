import { Fragment, ReactNode } from 'react'

import Header from './Header/Header';
import CategorySelector from './CategorySelector/CategorySelector';
import Arrows from '../Common/Arrows/Arrows';
import Button from '../Common/Button/Button';
import Zoomer from '../Common/Zoomer/Zoomer';

const TopController = (): JSX.Element => (
  <div className='h-fit ml-auto mt-4 mr-4'>
    <Button type='button' className='w-20' onClick={() => console.log('Clicked "Fijar" button')}>
      Fijar
    </Button>
    <Button type='button' className='w-20 ml-4' onClick={() => console.log('Clicked "Borrar" button')}>
      Borrar
    </Button>
  </div >
)

const BottomController = (): JSX.Element => (
  <div className='flex absolute bottom-4 right-4'>
    <Zoomer />
    <Arrows />
  </div>
)

interface IProps {
  children?: ReactNode;
}

const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <main className='flex bg-gray-200'>
        <CategorySelector />
        {children}
        <TopController />
        <BottomController />
      </main>
    </Fragment>
  );
}

export default Layout;