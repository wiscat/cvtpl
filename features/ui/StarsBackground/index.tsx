import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss'

class StarsBackground extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={cn(styles.parallax)}>
        <ul className={styles.scene}
            data-friction-x="0.1"
            data-friction-y="0.1"
            data-scalar-x="25"
            data-scalar-y="15"
        >
          <li className={styles.layer} data-depth="0.1">
            <div className={cn(styles.sts, styles.sts1)} />
          </li>
          <li className={styles.layer} data-depth="0.5">
            <div className={cn(styles.sts, styles.sts2)} />
          </li>
          <li className={styles.layer} data-depth="0.9">
            <div className={cn(styles.sts, styles.sts3)} />
          </li>
        </ul>
      </div>
    );
  }
}

export default StarsBackground;
