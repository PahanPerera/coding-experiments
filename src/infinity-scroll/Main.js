import { useCallback, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "./Main.module.css";

const postTemplate = (index) => ({
  id: index,
  title: "My Post Title " + index,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
});

const loadPostsFromApi = (size, cursor = 0) => {
  const newPosts = [];
  for (let i = 0; i < size; i++) {
    newPosts.push(postTemplate(cursor + i + 1));
  }
  return newPosts;
};

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadNext = useCallback((size) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPosts((posts) => {
        const newPosts = loadPostsFromApi(size, posts.length);
        return [...posts, ...newPosts];
      });
    }, 5000);
  }, []);

  return { data: posts, loadNext, isLoading };
};

const useInfinityScroll = () => {
  const containerRef = useRef();
  const [initialSize, setInitialSize] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const containerScrollHeightRef = useRef(0);

  const scrollEventHandler = useCallback(() => {
    if (
      Math.floor(
        containerRef.current.scrollTop + containerRef.current.offsetHeight
      ) >= containerRef.current.scrollHeight
    ) {
      setHasReachedEnd(true);
    } else {
      setHasReachedEnd(false);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const element = containerRef.current;
      const h = containerRef.current.offsetHeight;
      containerScrollHeightRef.current = containerRef.current.scrollHeight;
      const s = Math.floor(h / 100) + 2;
      setInitialSize(s);
      element.addEventListener("scroll", scrollEventHandler);
      return () => {
        element.removeEventListener("scroll", scrollEventHandler);
      };
    }
  }, [scrollEventHandler]);

  return { containerRef, initialSize, hasReachedEnd };
};

function InfinityScroll() {
  const { data, isLoading, loadNext } = usePosts();
  const { containerRef, initialSize, hasReachedEnd } = useInfinityScroll();

  useEffect(() => {
    if (initialSize > 0) {
      loadNext(initialSize);
    }
  }, [initialSize, loadNext]);

  useEffect(() => {
    if (hasReachedEnd & !isLoading) {
      loadNext(5);
    }
  }, [hasReachedEnd, loadNext, isLoading]);

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
