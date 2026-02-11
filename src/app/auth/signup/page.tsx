'use client';

import {
  Button,
  Center,
  Flex,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  TextProps,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';

import { Surface } from '@/components';
import { PATH_AUTH, PATH_DASHBOARD } from '@/routes';

import classes from './page.module.css';

function Page() {
  const theme = useMantineTheme();
  const colorScheme = useColorScheme();
  const mobile_match = useMediaQuery('(max-width: 425px)');

  const LINK_PROPS: TextProps = {
    className: classes.link,
  };

  return (
    <>
      <>
        <title>Sign up | Pulse Analytics</title>
        <meta
          name="description"
          content="Pulse Analytics — a modern analytics dashboard with 13 dashboard variants, 13+ app modules, and a fully customizable theme system."
        />
      </>
      <Title ta="center">Welcome!</Title>
      <Text ta="center">Create your account to continue</Text>

      <Surface component={Paper} className={classes.card}>
        <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 'md' }}>
          <TextInput
            label="First name"
            placeholder="John"
            required
            classNames={{ label: classes.label }}
          />
          <TextInput
            label="Last name"
            placeholder="Doe"
            required
            classNames={{ label: classes.label }}
          />
        </Flex>
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          mt="md"
          classNames={{ label: classes.label }}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          classNames={{ label: classes.label }}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm password"
          required
          mt="md"
          classNames={{ label: classes.label }}
        />
        <Button
          fullWidth
          mt="xl"
          component={Link}
          href={PATH_DASHBOARD.default}
        >
          Create account
        </Button>
        <Center mt="md">
          <Text
            size="sm"
            component={Link}
            href={PATH_AUTH.signin}
            {...LINK_PROPS}
          >
            Already have an account? Sign in
          </Text>
        </Center>
      </Surface>
    </>
  );
}

export default Page;
