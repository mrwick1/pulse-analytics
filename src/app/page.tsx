'use client';

import { createElement, ReactNode } from 'react';

import Link from 'next/link';
import { IconArrowRight, IconBrandGithub } from '@tabler/icons-react';

import { HOME_APPS } from '@/constants/home-apps';
import { HOME_DASHBOARDS } from '@/constants/home-dashboard';
import { HOME_FEATURES } from '@/constants/home-features';
import { TECH_STACK } from '@/constants/tech-stack';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import GuestLayout from '@/layouts/Guest';
import PulseMark from '@/components/logo/PulseMark';
import { PATH_DASHBOARD, PATH_GITHUB } from '@/routes';

import classes from './page.module.css';

function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`${classes.reveal} ${isVisible ? classes.revealVisible : ''} ${className}`}
    >
      {children}
    </div>
  );
}

const GRID_COLS = Array.from({ length: 12 });

export default function Home() {
  const [featured, ...restDashboards] = HOME_DASHBOARDS;

  return (
    <>
      <title>Pulse Analytics</title>
      <meta
        name="description"
        content="A modern analytics dashboard with 13 dashboard variants, 13+ app modules, and a fully customizable theme system. Built with Next.js 16, React 19, and Mantine 7."
      />
      <GuestLayout>
        <div className={classes.page}>
          {/* Grid Background */}
          <div className={classes.gridBg} aria-hidden="true">
            <div className={classes.gridBgInner}>
              {GRID_COLS.map((_, i) => (
                <div key={i} className={classes.gridBgCol} />
              ))}
            </div>
          </div>

          {/* ── Hero ──────────────────────────────── */}
          <section className={classes.hero}>
            <div className={classes.sectionLabel} aria-hidden="true">
              Introduction
            </div>
            <div className={classes.heroInner}>
              <div className={classes.heroContent}>
                <p className={classes.heroSubtitle}>// ANALYTICS DASHBOARD</p>
                <h1 className={classes.heroTitle}>
                  Data-driven dashboards built with{' '}
                  <span className={classes.heroAccent}>precision.</span>
                </h1>
                <p className={classes.heroDescription}>
                  13 dashboard variants, 13+ app modules, 136 components, and a
                  live theme customizer. Built with Next.js 16, React 19,
                  Mantine 7, and TypeScript.
                </p>
                <div className={classes.heroMeta}>
                  <div className={classes.heroMetaItem}>
                    <span className={classes.heroMetaLabel}>Dashboards</span>
                    <span className={classes.heroMetaValue}>13</span>
                  </div>
                  <div className={classes.heroMetaItem}>
                    <span className={classes.heroMetaLabel}>Apps</span>
                    <span className={classes.heroMetaValue}>13+</span>
                  </div>
                  <div className={classes.heroMetaItem}>
                    <span className={classes.heroMetaLabel}>Components</span>
                    <span className={classes.heroMetaValue}>136</span>
                  </div>
                  <div className={classes.heroMetaItem}>
                    <span className={classes.heroMetaLabel}>APIs</span>
                    <span className={classes.heroMetaValue}>30+</span>
                  </div>
                </div>
                <div className={classes.heroCta}>
                  <Link
                    href={PATH_DASHBOARD.default}
                    className={classes.btnPrimary}
                  >
                    Explore Dashboard
                    <IconArrowRight size={14} />
                  </Link>
                  <a
                    href={PATH_GITHUB.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.btnOutline}
                  >
                    <IconBrandGithub size={14} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Screenshot with browser chrome */}
              <div className={classes.heroScreenshot}>
                <div className={classes.browserFrame}>
                  <div className={classes.browserBar}>
                    <div className={classes.browserDot} />
                    <div className={classes.browserDot} />
                    <div className={classes.browserDot} />
                  </div>
                  <div className={classes.browserImageWrap}>
                    <img
                      src="/showcase/dashboard-default.png"
                      alt="Pulse Analytics dashboard preview"
                      className={classes.browserImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 01 Dashboards ─────────────────────── */}
          <section className={classes.section}>
            <div className={classes.sectionLabel} aria-hidden="true">
              Every Metric
            </div>
            <div className={classes.sectionInner}>
              <Reveal>
                <div className={classes.sectionHeading}>
                  <span className={classes.sectionNumber}>01</span>Dashboards
                </div>
              </Reveal>

              {/* Featured dashboard */}
              <Reveal>
                <Link href={featured.link} className={classes.featuredCard}>
                  <div className={classes.featuredImageWrap}>
                    <img
                      src={featured.img}
                      alt={featured.title}
                      className={classes.featuredImage}
                      loading="lazy"
                    />
                    <div className={classes.featuredOverlay}>
                      <div className={classes.featuredTitle}>
                        {featured.title}
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>

              {/* Supporting dashboard cards */}
              <div className={`${classes.dashboardGrid} ${classes.stagger}`}>
                {restDashboards.map((d) => (
                  <Reveal key={d.title}>
                    <Link href={d.link} className={classes.dashboardCard}>
                      <div className={classes.dashboardImageWrap}>
                        <div className={classes.dashboardBar}>
                          <div className={classes.dashboardDot} />
                          <div className={classes.dashboardDot} />
                          <div className={classes.dashboardDot} />
                        </div>
                        <img
                          src={d.img}
                          alt={d.title}
                          className={classes.dashboardImage}
                          loading="lazy"
                        />
                      </div>
                      <div className={classes.dashboardTitle}>{d.title}</div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── 02 Applications ───────────────────── */}
          <section className={classes.section}>
            <div className={classes.sectionLabel} aria-hidden="true">
              App Modules
            </div>
            <div className={classes.sectionInner}>
              <Reveal>
                <div className={classes.sectionHeading}>
                  <span className={classes.sectionNumber}>02</span>Applications
                </div>
              </Reveal>

              <div className={`${classes.appsGrid} ${classes.stagger}`}>
                {HOME_APPS.map((app) => (
                  <Reveal key={app.title}>
                    <Link href={app.link} className={classes.appCard}>
                      <div className={classes.appCardImageWrap}>
                        <img
                          src={app.img}
                          alt={app.title}
                          className={classes.appCardImage}
                          loading="lazy"
                        />
                      </div>
                      <div className={classes.appCardOverlay}>
                        <div className={classes.appCardTitle}>{app.title}</div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── 03 Features ───────────────────────── */}
          <section className={classes.section}>
            <div className={classes.sectionLabel} aria-hidden="true">
              Capabilities
            </div>
            <div className={classes.sectionInner}>
              <Reveal>
                <div className={classes.sectionHeading}>
                  <span className={classes.sectionNumber}>03</span>Features
                </div>
              </Reveal>

              <div className={`${classes.featuresGrid} ${classes.stagger}`}>
                {HOME_FEATURES.map((f) => (
                  <Reveal key={f.title}>
                    <div className={classes.featureCard}>
                      <div className={classes.featureIcon}>
                        {createElement(f.icons, { size: 22 })}
                      </div>
                      <div className={classes.featureTitle}>{f.title}</div>
                      <div className={classes.featureDesc}>{f.description}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── 04 Tech Stack ─────────────────────── */}
          <section className={classes.section}>
            <div className={classes.sectionLabel} aria-hidden="true">
              Tooling
            </div>
            <div className={classes.sectionInner}>
              <Reveal>
                <div className={classes.sectionHeading}>
                  <span className={classes.sectionNumber}>04</span>Tech Stack
                </div>
              </Reveal>

              <div className={`${classes.techGrid} ${classes.stagger}`}>
                {TECH_STACK.map((t) => (
                  <Reveal key={t.title}>
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.techTag}
                    >
                      <span className={classes.techTagPrefix}>&gt;</span>
                      {t.title} {t.version}
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ───────────────────────────────── */}
          <section className={classes.ctaSection}>
            <Reveal>
              <div className={classes.ctaMark}>
                <PulseMark size={80} />
              </div>
            </Reveal>
            <Reveal>
              <h2 className={classes.ctaTitle}>
                Ready to see it in action?
              </h2>
            </Reveal>
            <Reveal>
              <p className={classes.ctaDesc}>
                Sign in with the demo credentials and explore every dashboard,
                app, and component.
              </p>
            </Reveal>
            <Reveal>
              <div className={classes.ctaButtons}>
                <Link
                  href={PATH_DASHBOARD.default}
                  className={classes.btnPrimary}
                >
                  Explore Dashboard
                  <IconArrowRight size={14} />
                </Link>
                <a
                  href={PATH_GITHUB.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.btnOutline}
                >
                  <IconBrandGithub size={14} />
                  View Source
                </a>
              </div>
            </Reveal>
          </section>
        </div>
      </GuestLayout>
    </>
  );
}
