import styles from "./homePageHappyUsers.module.css";

export default function HomePageHappyUsers() {
  return (
    <section className={styles.happySection}>
      {/* === Top Orange Section === */}
      <div className={styles.orangeSection}>
        <h2 className={styles.title}>100+ Happy User’s Love!</h2>

        {/* Placeholder images grid */}
        <div className={styles.imageGallery}>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className={styles.imgPlaceholder}></div>
          ))}
        </div>

        {/* Center grey circle logo */}
        <div className={styles.centerCircle}>
          <div className={styles.logoPlaceholder}>⚡</div>
        </div>
      </div>

      {/* === Bottom White Section === */}
      <div className={styles.whiteSection}>
        <div className={styles.videoRow}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.videoCard}>
              <video
                className={styles.userVideo}
                controls
                muted
                loop
                playsInline
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML video.
              </video>

              <div className={styles.videoInfo}>
                <p className={styles.userName}>Vaishnavi Vaish</p>
                <p className={styles.userCompany}>Microsoft</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
