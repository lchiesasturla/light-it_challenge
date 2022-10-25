import { Dispatch, SetStateAction } from 'react';

import SubCategoryItem from '../SubCategoryItem/SubCategoryItem';
import ButtonWithChevron from '../../Common/Button/ButtonWithChevron/ButtonWithChevron';
import { ChevronPosition } from '../../../types/button';
import { ISubCategory } from '../../../types/categories';

interface IProps {
  categoryName: string;
  detail: ISubCategory;
  setDetail: Dispatch<SetStateAction<ISubCategory | null>>
}

const SubCategoryDetail = ({categoryName, detail, setDetail}: IProps): JSX.Element => {
  
  const {name, items} = detail;

  return (
    <>
        <ButtonWithChevron
          type='button'
          className='!bg-transparent !px-0 !py-0 mb-2 text-xxs text-gray-600 font-semibold'
          onClick={() => setDetail(null)}
          chevronOptions={{chevronClassName: '!w-2 !mr-0.5', position: ChevronPosition.Left}}
        >
          {categoryName}
        </ButtonWithChevron>
        <h2 className='text-lg font-bold text-gray-600 mb-2'>{name}</h2>
        <div className='grid grid-cols-3 gap-1'>
          {items.map((item: any) => (
            <SubCategoryItem key={item.name} name={item.name} imgSource={item.img}/>
          ))}
        </div>
    </>
  );
}

export default SubCategoryDetail;