import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./projects.module.css";

const PROJECTS = [
  {
    id: "mini-orderbook",
    title: "Mini Orderbook: Market Making Game",
    description:
      "Play as a market maker on a simulated exchange. Quote two-sided markets, read the bot's reactions, and converge on a hidden fair value — while managing P&L and inventory.",
    tags: ["python", "simulation", "quant"],
    slug: "/projects/mini-orderbook",
  },
];

const ALL_TAGS = [...new Set(PROJECTS.flatMap((p) => p.tags))].sort();

export default function Projects(): ReactNode {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return PROJECTS.filter((p) => {
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q));
      const matchesTags =
        activeTags.length === 0 ||
        activeTags.every((t) => p.tags.includes(t));
      return matchesSearch && matchesTags;
    });
  }, [search, activeTags]);

  return (
    <Layout
      title="Projects"
      description="Structured projects to build real software engineering experience."
    >
      <header className={styles.header}>
        <div className="container">
          <Heading as="h1" className={styles.heading}>
            Projects
          </Heading>
          <p className={styles.subtitle}>
            Build real things. Go beyond LeetCode.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <div className={styles.controls}>
            <input
              className={styles.search}
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className={styles.tagRow}>
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  className={`${styles.tagBtn} ${
                    activeTags.includes(tag) ? styles.tagBtnActive : ""
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.grid}>
            {filtered.map((project) => (
              <Link
                key={project.id}
                to={project.slug}
                className={styles.card}
              >
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className={styles.cardCta}>View Project →</span>
              </Link>
            ))}

            <div className={styles.ghostCard}>
              <span className={styles.ghostIcon}>+</span>
              <p className={styles.ghostText}>More projects coming soon</p>
            </div>
          </div>

          {filtered.length === 0 && (
            <p className={styles.noResults}>
              No projects match — try a different search or tag.
            </p>
          )}
        </div>
      </main>
    </Layout>
  );
}
