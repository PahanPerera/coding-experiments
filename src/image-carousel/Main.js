import { useRef, useState } from "react";
import styles from "./Main.module.css";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://www.w3schools.com/howto/img_nature_wide.jpg",
  "https://www.w3schools.com/howto/img_snow_wide.jpg",
  "https://www.w3schools.com/howto/img_lights_wide.jpg",
  "https://www.w3schools.com/howto/img_mountains_wide.jpg",
];

function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const directionRef = useRef(1);

  const goBack = (curr) => {
    if (curr === 0) return IMAGES.length - 1;
    return curr - 1;
  };

  const goForward = (curr) => {
    if (curr === IMAGES.length - 1) return 0;
    return curr + 1;
  };

  return (
    <main className={styles.container}>
      <h1>Image Carousel</h1>
      <div className={styles.slidesContainer}>
        <div className={styles.actionButtons}>
          <button
            className={styles.leftBtn}
            onClick={() => {
              setIndex((i) => goBack(i));
              directionRef.current = -1;
            }}
          >
            ⬅️
          </button>
          <button
            className={styles.rightBtn}
            onClick={() => {
              setIndex((i) => goForward(i));
              directionRef.current = 1;
            }}
          >
            ➡️
          </button>
        </div>

        <div className={styles.slides}>
          <AnimatePresence>
            <motion.img
              key={IMAGES[index]}
              src={IMAGES[index]}
              initial={{ opacity: 0.5, x: directionRef.current * 600 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "ease" }}
            />
          </AnimatePresence>
        </div>

        <div className={styles.footer}>
          {IMAGES.map((_, i) => (i === index ? "🔵" : "⚪"))}
        </div>
      </div>
      <p style={{ fontSize: "10px" }}>
        Images from https://www.w3schools.com/howto/howto_js_slideshow.asp
      </p>
    </main>
  );
}

export default ImageCarousel;
