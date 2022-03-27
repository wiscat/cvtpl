import React from 'react';
import cn from 'classnames';

import Link from 'features/ui/NextLink';
import StarsBackground from 'features/ui/StarsBackground';

import styles from './layout.module.scss';

type LayoutProps = {
  children: React.ReactNode,
  backLink?: string,
  nextLink?: string,
};

const Layout = (props: LayoutProps) => {
  const { children, backLink, nextLink } = props;

  const onBack = (e: React.BaseSyntheticEvent) => {
    e.target.classList.add(styles.fadeOut);
  };

  return (
    <div className={cn(styles.layout, 'layout')}>
      <StarsBackground />

      {backLink ? <Link href={backLink} className={styles.back} onClick={onBack}>&#10162;</Link> : null}

      {nextLink ? <Link href={nextLink} className={styles.next}>&#10162;</Link> : null}

      {children}
    </div>
  );
};

export default Layout;
