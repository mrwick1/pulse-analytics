import {
  Box,
  Burger,
  Container,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconArrowRight, IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';

import { Logo } from '@/components';
import { PATH_DASHBOARD, PATH_GITHUB } from '@/routes';

import classes from './HeaderNav.module.css';

const HeaderNav = () => {
  const theme = useMantineTheme();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const tablet_match = useMediaQuery('(max-width: 768px)');

  return (
    <Box>
      <header className={classes.header}>
        <Container className={classes.inner} fluid>
          <Logo style={{ color: theme.white }} />
          <div className={classes.links}>
            <a
              href={PATH_GITHUB.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.navLink}
            >
              <IconBrandGithub size={14} />
              GitHub
            </a>
            <Link href={PATH_DASHBOARD.default} className={classes.navCta}>
              <IconArrowRight size={14} />
              Explore Dashboard
            </Link>
          </div>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
            color={theme.white}
          />
        </Container>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        transitionProps={{
          transition: tablet_match ? 'slide-up' : 'slide-left',
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <a
            href={PATH_GITHUB.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.drawerLink}
          >
            <IconBrandGithub size={16} />
            GitHub
          </a>
          <Link
            href={PATH_DASHBOARD.default}
            className={classes.drawerCta}
            onClick={closeDrawer}
          >
            <IconArrowRight size={14} />
            Explore Dashboard
          </Link>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default HeaderNav;
