import posts from "../posts";
import { Link } from "react-router-dom";

export default function Editors() {

  const picks = posts.slice(0,2);

  return (
    <div className="article-page">
      <div className="article-container">

        <h1>Editor’s Picks</h1>

        {picks.map((post) => (
          <div key={post.slug} style={{marginBottom:"30px"}}>

            <Link to={`/article/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>

            <p>{post.excerpt}</p>

          </div>
        ))}

      </div>
    </div>
  );
}