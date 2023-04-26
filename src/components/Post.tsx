import Button from "./Button";
// import styles from "./Post.module.css";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = (props) => {
  return (
    // <div className={styles.post}>
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <Button text="Like" />
      <Button text="Hide" />
    </div>
  );
};

export default Post;
