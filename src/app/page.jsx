import { Suspense, lazy } from "react";
// import Posts from "../components/Posts.jsx";
import styles from "./page.module.css";

const Posts = lazy(() => import("../components/Posts"));

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback="loading...">
        <Posts />
      </Suspense>
    </main>
  );
}
