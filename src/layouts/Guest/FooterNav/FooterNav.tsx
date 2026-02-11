import {
  ActionIcon,
  ActionIconProps,
  Container,
  Divider,
  Flex,
  Group,
  Text,
} from '@mantine/core';
import {
  IconBrandGithub,
} from '@tabler/icons-react';

import { Logo } from '@/components';
import { PATH_GITHUB } from '@/routes';

import classes from './FooterNav.module.css';

const ICON_SIZE = 18;

const ACTION_ICON_PROPS: ActionIconProps = {
  size: 'lg',
  color: 'primary.3',
  variant: 'transparent',
};

const FooterNav = () => {
  return (
    <footer className={classes.footer}>
      <Container fluid>
        <Divider mb="md" />
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ base: 'center', sm: 'space-between' }}
          align={{ base: 'center' }}
          py="md"
        >
          <Logo c="white" />
          <Text size="sm" c="dimmed" ff="monospace">
            Built with Next.js 16, React 19 & Mantine 7
          </Text>
          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <ActionIcon
              component="a"
              href={PATH_GITHUB.repo}
              target="_blank"
              {...ACTION_ICON_PROPS}
            >
              <IconBrandGithub size={ICON_SIZE} />
            </ActionIcon>
          </Group>
        </Flex>
      </Container>
    </footer>
  );
};

export default FooterNav;
