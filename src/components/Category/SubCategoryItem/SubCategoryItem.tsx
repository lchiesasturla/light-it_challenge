interface IProps {
  name: string;
  imgSource: string;
}

const SubCategoryItem = ({name, imgSource}: IProps): JSX.Element => {
  return (
    <div className='flex flex-col items-center'>
      <img src={imgSource} alt={name} className='w-32 h-32' />
      <h3 className='text-sm text-gray-600'>{name}</h3>
    </div>
  );
}
 
export default SubCategoryItem;