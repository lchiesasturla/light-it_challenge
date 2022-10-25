import cn from 'classnames';

import { ArrowDirection, IArrow } from '../../../types/arrows';

const arrows: IArrow[] = [
  {direction: ArrowDirection.Top, className: 'inset-x-0 top-1.5 ml-auto mr-auto'},
  {direction: ArrowDirection.Right, className: 'inset-y-0 right-1.5 mt-auto mb-auto rotate-90'},
  {direction: ArrowDirection.Bottom, className: 'inset-x-0 bottom-1.5 ml-auto mr-auto rotate-180'},
  {direction: ArrowDirection.Left, className: 'inset-y-0 left-1.5 mt-auto mb-auto rotate-270'},
]

const Arrows = (): JSX.Element => {
  return (
    <div className='relative bg-white w-16 h-16 rounded-md'>
      {arrows.map((arrow: IArrow) => (
        <button key={arrow.direction}>
          <img
            src='/assets/arrow.png'
            alt={`arrow ${arrow.direction}`}
            className={cn('w-5 absolute', arrow.className)}
            onClick={() => console.log(`Clicked ${arrow.direction} arrow`)}
          />
        </button>
      ))}
    </div>
  );
}
 
export default Arrows;