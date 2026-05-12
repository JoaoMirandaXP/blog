import { Link } from "react-router-dom";
import { getPosts } from "../lib/posts";

const posts = getPosts();

export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "1rem" }}>
      <header>
        <h1>Ideias!</h1>
        <p>Aprendizados, ideias e experimentos</p>
      </header>

      <section>
        <h2>Posts</h2>

        {posts.length === 0 && <p>Nenhum post encontrado.</p>}
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
