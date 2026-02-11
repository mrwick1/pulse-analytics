import { UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import Link from 'next/link';

import PulseMark from './PulseMark';
import classes from './Logo.module.css';

type LogoProps = {
  href?: string;
  showText?: boolean;
  size?: number;
  variant?: 'horizontal' | 'stacked';
} & UnstyledButtonProps;

const Logo = ({
  href,
  showText = true,
  size = 28,
  variant = 'horizontal',
  ...others
}: LogoProps) => {
  return (
    <UnstyledButton
      className={`${classes.logo} ${variant === 'stacked' ? classes.stacked : ''}`}
      component={Link}
      href={href || '/'}
      {...others}
    >
      <PulseMark size={size} />
      {showText && (
        <span className={classes.wordmark}>
          <span className={classes.wordmarkPulse}>PULSE</span>
          <span className={classes.wordmarkAnalytics}>ANALYTICS</span>
        </span>
      )}
    </UnstyledButton>
  );
};

export default Logo;
