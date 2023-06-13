import { ReactComponent as FolderIcon } from '../../../assets/folder.svg';
import classes from './CustomButton.module.scss';

import { MouseEventHandler } from 'react';

interface CustomButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ onClick }: CustomButtonProps) => {
  return (
    <div className={classes.wrapper}>
      <button className={classes.btn} onClick={onClick}>
        Create new folder
        <FolderIcon />
      </button>
    </div>
  );
};

export default CustomButton;
