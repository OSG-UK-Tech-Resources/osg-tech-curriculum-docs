import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function Pillar({
  title,
  description,
  to,
  cta,
}: {
  title: string;
  description: string;
  to: string;
  cta: string;
}) {
  return (
    <div className={styles.pillar}>
      <h3 className={styles.pillarTitle}>{title}</h3>
      <p className={styles.pillarDesc}>{description}</p>
      <Link
        className="button button--outline button--primary button--sm"
        to={to}
      >
        {cta}
      </Link>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="OSG UK Tech"
      description="From zero programming knowledge to interview-ready."
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            OSG UK Tech
          </Heading>
          <p className="hero__subtitle">
            From zero programming knowledge to interview-ready.
          </p>
          <p className={styles.heroDescription}>
            A structured mentorship programme covering data structures &amp;
            algorithms, real-world projects, and Python &amp; data science
            fundamentals.
          </p>
        </div>
      </header>

      <section className={styles.pillars}>
        <div className="container">
          <div className={styles.pillarGrid}>
            <Pillar
              title="Data Structures and Algorithms"
              description="8 lessons taking you from Python basics through sorting, trees, graphs, dynamic programming, and system design — everything interviewers test."
              to="/curriculum"
              cta="View Curriculum →"
            />
            <Pillar
              title="Structured Projects"
              description="Guided projects that go beyond LeetCode. Build real things, learn software engineering fundamentals, and have something to show on your CV."
              to="/projects"
              cta="View Projects →"
            />
            <Pillar
              title="Python & Data Science Fundamentals"
              description="Supplementary practice notebooks covering Python, NumPy, and Pandas in a quant and data science context — using real COVID-19 and stock market datasets."
              to="/curriculum/python-ds"
              cta="View Notebooks →"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
