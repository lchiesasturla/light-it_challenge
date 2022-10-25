import { Dispatch, SetStateAction } from 'react'

import ButtonWithChevron from '../../Common/Button/ButtonWithChevron/ButtonWithChevron';
import { ICategory, ISubCategory } from '../../../types/categories';

interface IProps {
  title: string;
  category: ICategory | undefined;
  setDetail: Dispatch<SetStateAction<ISubCategory | null>>;
}

const CategoryList = ({title, category, setDetail}: IProps): JSX.Element => {
  return (
    <>
    <h2 className='font-bold text-gray-600 mb-2'>{title}</h2>
    <div className='flex flex-col'>
      {category && category.map((subCategory: ISubCategory, idx: number) => (
        <ButtonWithChevron
          type='button'
          key={`subCategory-${idx}`}
          className='my-1 text-gray-600'
          onClick={() => setDetail(subCategory)}
        >
          {subCategory.name}
        </ButtonWithChevron>
      ))}
    </div>
  </>
  );
}
 
export default CategoryList;