import Post from "./Post.tsx";
// import styles from "./Posts.module.css";

export default async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();
  const posts = data.slice(0, 2);

  return (
    // <section className={styles.posts}>
    <section>
      {posts.map((p) => (
        <Post key={p.id} {...p} />
      ))}
    </section>
  );
}
