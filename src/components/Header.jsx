import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="topbar">
        <div className="brand">
          <img src="/images/banger.png" alt="Banger Logo" />
        </div>

        <nav className="topnav">
          <Link to="/">HOME</Link>
          <Link to="/trending">TRENDING</Link>
          <Link to="/feed">THE FEED</Link>
          <Link to="/editors">EDITOR'S PICKS</Link>
          <Link to="/festivals">FESTIVAL WATCH</Link>
        </nav>

        <button className="subscribe-btn">Subscribe</button>
      </header>

      <div className="subnav">
        <Link to="/trending">Trending</Link>
        <Link to="/feed">The Feed</Link>
        <Link to="/editors">Editor’s Picks</Link>
        <Link to="/festivals">Festival Watch</Link>
      </div>
    </>
  );
}