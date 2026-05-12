import { useParams, Link } from "react-router-dom";

const modules = import.meta.glob("../../content/*.{md,mdx}", { eager: true });

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const entry = Object.entries(modules).find(([path]) =>
    path.endsWith(`/${slug}.md`) || path.endsWith(`/${slug}.mdx`)
  );
  const mod = entry?.[1] as any;

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "1rem" }}>
      <Link to="/">← Voltar</Link>
      <article>
        <h1>{mod?.frontmatter?.title ?? slug}</h1>
        {mod?.html
          ? <div dangerouslySetInnerHTML={{ __html: mod.html }} />
          : <p>Post não encontrado.</p>
        }
      </article>
    </main>
  );
}
