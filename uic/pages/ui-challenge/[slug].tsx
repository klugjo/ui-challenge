import clsx from 'clsx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import SignUp from '../../data/001-sign-up';

import styles from './styles.module.css'

const config = {
  '001-sign-up': { idx: '001', label: 'Sign Up', component: SignUp },
  '002-checkout': { idx: '002', label: 'Checkout', component: SignUp },
  '003-landing-page': { idx: '003', label: 'Landing Page', component: SignUp },
  '004-calculator': { idx: '004', label: 'Calculator', component: SignUp },
};

type Slug = keyof typeof config;

const slugs = Object.keys(config) as Slug[];

type PostProps = {
  currentSlug: Slug;
}

export default function Post({ currentSlug }: PostProps) {
  return <div className={styles.container}>
    <div className={styles.menu}>
      <div className={styles.title}>UIChallenge</div>
      {slugs.map((slug: Slug) => <div key={slug} className={clsx(styles.menuItem, { [styles.selected]: slug === currentSlug })}>
        <aside>{config[slug].idx}</aside><main>{config[slug].label}</main>
      </div>)}
    </div>

    {config[currentSlug].component()}
  </div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false
  }
}

interface Params extends ParsedUrlQuery {
  slug: Slug
}

export const getStaticProps: GetStaticProps<PostProps, Params> = async ({ params }) => {
  const slug = params?.slug ?? '001-sign-up';
  return { props: { currentSlug: slug } };
}