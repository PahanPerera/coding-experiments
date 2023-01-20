import styles from "./Main.module.css";
import hanoi from "./images/hanoi.jpeg";
import memory from "./images/memory.jpeg";
import project from "./images/project.svg";
import tictactoe from "./images/tic.webp";
import lightdark from "./images/lightdark.webp";
import todo from "./images/todo.png";
import toast from "./images/toast.webp";
import cache from "./images/cache.png";
import infinityScroll from "./images/infinity_scroll.png";

function Card({ name, img = project, tags = [], url }) {
  const navigate = () => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.card} onClick={() => navigate()}>
      <h3>{name}</h3>
      <img src={img} alt={name + " image"} />
      <p className={styles.tags}>
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </p>
    </div>
  );
}

function Home() {
  return (
    <main className={styles.container}>
      <header>
        <h1>
          👋 Hi. I am{" "}
          <a
            href="http://pahanperera.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pahan
          </a>
        </h1>
        <p>
          Welcome to my coding experiments, which is a collection of all my code
          projects for my learning purposes
        </p>
      </header>

      <div className={styles.separator}></div>

      <section className={styles.grid}>
        <Card
          name={"Tower of Hanoi"}
          tags={["Game", "Algorithm", "ReactJS"]}
          img={hanoi}
          url={"https://coding-experiments.vercel.app/tower-of-hanoi"}
        />
        <Card
          name={"Memory Game"}
          tags={["Game", "ReactJS"]}
          img={memory}
          url={"https://coding-experiments.vercel.app/memory-game"}
        />
        <Card
          name={"Tic Tac Toe"}
          tags={["Game", "Multiplayer", "Heroku"]}
          img={tictactoe}
          url={"https://tictactoe-multiplayer-game.herokuapp.com/"}
        />
        <Card
          name={"Light/Dark Mode"}
          tags={["Tutorial", "Angular", "Github"]}
          img={lightdark}
          url={"https://github.com/PahanPerera/angular-light-dark-app"}
        />
        <Card
          name={"Cache Visualization"}
          tags={["Tutorial"]}
          img={cache}
          url={"https://coding-experiments.vercel.app/cache-viz"}
        />
        <Card
          name={"My Toast"}
          tags={["Tutorial", "ReactJS"]}
          img={toast}
          url={"https://coding-experiments.vercel.app/my-toast"}
        />
        <Card
          name={"Todo App (Redux)"}
          tags={["Tutorial", "Redux", "ReactJS"]}
          img={todo}
          url={"https://coding-experiments.vercel.app/my-toast"}
        />
        <Card
          name={"Infinity Scroll"}
          tags={["Tutorial", "ReactJS"]}
          img={infinityScroll}
          url={"https://coding-experiments.vercel.app/infinity-scroll"}
        />
      </section>
    </main>
  );
}

export default Home;
