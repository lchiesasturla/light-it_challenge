import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'

import Loader from '../Common/Loader/Loader';
import CategoryList from './CategoryList/CategoryList';
import CategoryDetail from './SubCategoryDetail/SubCategoryDetail';
import { ICategory, ISubCategory } from '../../types/categories';

interface IProps {
  title: string;
}

const Category = ({ title }: IProps): JSX.Element => {
  const [detail, setDetail] = useState<ISubCategory | null>(null);
  const fetchCategory = (): Promise<ICategory> => fetch(`https://us-central1-prueba-front-280718.cloudfunctions.net/${title.toLowerCase()}`).then(res => res.json());

  const { isLoading, data: category } = useQuery(["category", title], fetchCategory);

  const renderCategorySection = (): JSX.Element => {
    if(detail) return <CategoryDetail categoryName={title} detail={detail} setDetail={setDetail}/>
    return <CategoryList title={title} category={category} setDetail={setDetail}/>
  }

  return (
      <section className='flex flex-col w-120 bg-gray-100 p-4'>
        { isLoading ? <Loader className='m-auto self-center'/> : renderCategorySection() }
      </section>
  );
}

export default Category;