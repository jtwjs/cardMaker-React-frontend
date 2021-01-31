import React, {memo} from 'react';
import styles from './maker_button.module.css';

const MakeButton = memo(({name, onSubmit}) => {
  return (
    <button className={styles.button} onClick={onSubmit}>
          {name}
    </button>
  );
});

export default MakeButton;