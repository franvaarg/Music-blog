import { useParams, Link } from "react-router-dom";
import posts from "./posts";

export default function Article() {
  const { slug } = useParams();

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div style={{ maxWidth: "900px", margin: "60px auto", padding: "20px" }}>
        <h1>Article not found</h1>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="article-container">
        <Link to="/" className="back-link">← Back to Home</Link>

        <p className="article-category">{post.category}</p>
        <h1 className="article-title">{post.title}</h1>

        <img src={post.image} alt={post.title} className="article-image" />

        <div className="article-content">
          {post.content.split("\n").map((paragraph, index) =>
            paragraph.trim() ? <p key={index}>{paragraph}</p> : null
          )}
        </div>
      </div>
    </div>
  );
}