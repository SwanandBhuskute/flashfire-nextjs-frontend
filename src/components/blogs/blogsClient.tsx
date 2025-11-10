"use client";

import styles from "./blogs.module.css";
import BlogCard from "./blogCard";

export default function BlogsClient() {
  return (
    <section className={styles.blogsSection}>
      <header className={styles.header}>
        <h2>Insights That Spark Career Growth.</h2>
        <p>
          Learn how to outsmart hiring systems, stand out to recruiters, and
          stay ahead with{" "}
          <span className={styles.highlight}>Flashfire’s expert-backed</span>{" "}
          tips.
        </p>
      </header>

      <div className={styles.blogGrid}>
        {[...Array(6)].map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </section>
  );
}
