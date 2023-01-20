import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "./Main.module.css";

const postTemplate = (index) => ({
  id: index,
  title: "My Post Title " + index,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
});

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadNext = (size) => {
    setIsLoading(true);
    const newPosts = [];
    const len = posts.length;
    for (let i = 0; i < size; i++) {
      newPosts.push(postTemplate(len + i));
    }
    setTimeout(() => {
      setIsLoading(false);
      setPosts([...posts, ...newPosts]);
    }, 2000);
  };

  return { data: posts, loadNext, isLoading };
};

const useInfinityScroll = () => {
  const containerRef = useRef();
  const [initialSize, setInitialSize] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const h = containerRef.current.offsetHeight;
      const s = Math.floor(h / 100) + 2;
      setInitialSize(s);
      containerRef.current.addEventListener("scroll", (e) => {
        if (
          containerRef.current.scrollTop + containerRef.current.offsetHeight ===
          containerRef.current.scrollHeight
        ) {
          setHasReachedEnd(true);
        } else {
          setHasReachedEnd(false);
        }
      });
    }
  }, [containerRef.current]);

  return { containerRef, initialSize, hasReachedEnd };
};

function InfinityScroll() {
  const { data, isLoading, loadNext } = usePosts();
  const { containerRef, initialSize, hasReachedEnd } = useInfinityScroll();

  useEffect(() => {
    if (initialSize > 0) {
      loadNext(initialSize);
    }
  }, [initialSize]);

  useEffect(() => {
    if (hasReachedEnd) {
      loadNext(5);
    }
  }, [hasReachedEnd]);

  return (
    <main className={styles.container} ref={containerRef}>
      <ul className={styles.list}>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </li>
          );
        })}
      </ul>
      {isLoading && <p>Loading Posts...</p>}
    </main>
  );
}

export default InfinityScroll;
