'use client';

import { createElement } from 'react';

import {
  Anchor,
  Container,
  Paper,
  PaperProps,
  SimpleGrid,
  Stack,
  Text,
  Title,
  ThemeIcon,
  Flex,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandTypescript,
  IconChartBar,
  IconExternalLink,
} from '@tabler/icons-react';

import { PageHeader, Surface } from '@/components';
import { PATH_DASHBOARD, PATH_GITHUB } from '@/routes';

const items = [
  { title: 'Dashboard', href: PATH_DASHBOARD.default },
  { title: 'Pages', href: '#' },
  { title: 'About', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const CARDS = [
  {
    title: 'Next.js 16',
    description: 'App Router with React Server Components and React Compiler.',
    icon: IconBrandNextjs,
  },
  {
    title: 'TypeScript',
    description: 'Strict mode enabled with full type safety across all components.',
    icon: IconBrandTypescript,
  },
  {
    title: 'Mantine 7',
    description: '100+ accessible UI components with built-in theming.',
    icon: IconBrandMantine,
  },
  {
    title: 'Recharts',
    description: 'Composable charting for area, bar, line, pie, and radar charts.',
    icon: IconChartBar,
  },
];

const PAPER_PROPS: PaperProps = {
  p: 'md',
  shadow: 'md',
  radius: 'md',
};

function About() {
  return (
    <>
      <title>About | Pulse Analytics</title>
      <Container fluid>
        <Stack gap="lg">
          <PageHeader title="About" breadcrumbItems={items} />
          <Surface component={Paper} {...PAPER_PROPS}>
            <Title order={4} mb="xs">
              Pulse Analytics
            </Title>
            <Text mb="md">
              A modern analytics dashboard with 13 dashboard variants, 13+ app
              modules, 136 components, and a live theme customizer. Built with
              Next.js 16, React 19, Mantine 7, and TypeScript.
            </Text>
            <Text size="sm" c="dimmed">
              Featuring Swiss Precision design language — Space Grotesk + JetBrains
              Mono fonts, #0055FF accent, sharp corners, and dark mode by default.
            </Text>
          </Surface>
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            {CARDS.map((s) => (
              <Surface key={s.title} component={Paper} {...PAPER_PROPS}>
                <Stack gap="xs">
                  <ThemeIcon size="lg" variant="light">
                    {createElement(s.icon)}
                  </ThemeIcon>
                  <Title order={5}>{s.title}</Title>
                  <Text size="sm">{s.description}</Text>
                </Stack>
              </Surface>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}

export default About;
