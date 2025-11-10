"use client";

import styles from "./blogCard.module.css";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";

export default function BlogCard() {
  return (
    <section className={styles.blogCardOuter}>
      <section className={styles.blogCard}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/blogImg.jpg"
            alt="Blog cover"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.tag}>RESUME TIP</p>
          <h3 className={styles.title}>
            Why Your Job Applications in the U.S. Are Getting Ghosted — And How
            to Finally Break the Silence
          </h3>
          <p className={styles.excerpt}>
            For each and every application, your base resume is automatically
            optimized to the job description with ATS-friendly keywords and
            skills.
          </p>

          <div className={styles.meta}>
            <span>
              <div className={styles.metaSpanDiv}>
                <BsCalendarEvent className={styles.icon} />
                <p> JAN 2025</p>
              </div>
            </span>
            <span>
              <div className={styles.metaSpanDiv}>
                <FaRegClock className={styles.icon} />
                <p>12 MIN READ</p>
              </div>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
