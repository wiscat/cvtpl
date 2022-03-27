import React from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';

type NextLinkProps = {
  href: string,
  className?: string,
  title?: string,
  children: ReactNode,
  onClick?: (e: React.BaseSyntheticEvent) => void,
};
const NextLink = ({ href, children, ...restProps }: NextLinkProps) => {
  return (
    <Link href={href}>
      <a {...restProps}>{children}</a>
    </Link>
  );
};

export default NextLink;
