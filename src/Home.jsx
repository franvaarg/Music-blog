import { Link } from "react-router-dom";
import posts from "./posts";

export default function Home() {
  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 4);

  return (
    <div className="site">
      <div className="page-wrap">
        <div className="headline-strip">
          <h1>BANGER PICKS</h1>
        </div>

        <section className="top-grid">
          <Link
            to={`/article/${mainPost.slug}`}
            style={{ textDecoration: "none" }}
          >
            <article className="main-story">
              <div
                className="image-block main-image"
                style={{ backgroundImage: `url(${mainPost.image})` }}
              ></div>

              <div className="story-content">
                <p className="story-tag">{mainPost.category}</p>
                <h2>{mainPost.title}</h2>
                <p className="story-copy">{mainPost.excerpt}</p>
                <span className="read-link">Read full story</span>
              </div>
            </article>
          </Link>

          <div className="side-stories">
            {sidePosts.map((post) => (
              <Link
                key={post.slug}
                to={`/article/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article className="mini-story">
                  <div
                    className="image-block mini-image"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>

                  <div className="mini-text">
                    <p className="story-tag">{post.category}</p>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}

            <div className="mini-story dark-card">
              <div className="mini-text">
                <p className="story-tag">ABOUT</p>
                <h3>Banger</h3>
                <p>
                  A music blog for people who still care about records, live
                  shows and stories with weight.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-layout">
          <div>
            <p className="section-kicker">TOP HEADLINES</p>

            <div className="news-row">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/article/${post.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article className="news-card">
                    <div
                      className="image-block card-image"
                      style={{ backgroundImage: `url(${post.image})` }}
                    ></div>

                    <p className="story-tag">{post.category}</p>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          <aside className="right-column">
            <div className="sidebar-box">
              <h3>The Hot 5</h3>

              <ul className="chart-list">
                {posts.map((post, index) => (
                  <li key={post.slug}>
                    <span>{index + 1}</span>
                    {post.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Genres</h3>

              <ul className="link-list">
                <li>Rock</li>
                <li>Alternative</li>
                <li>Indie</li>
                <li>Post-Punk</li>
                <li>Shoegaze</li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}