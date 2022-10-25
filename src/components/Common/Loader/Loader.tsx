import cn from 'classnames';

import styles from './Loader.module.scss';

interface IProps {
  className?: string;
}

const Loader = ({ className }: IProps): JSX.Element => <div className={cn(styles.loader, className)}/>
 
export default Loader;