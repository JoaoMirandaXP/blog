import { useParams, Link } from "react-router-dom";

const modules = import.meta.glob("../../content/**/*.{md,mdx}", { eager: true });
const images = import.meta.glob("../../content/**/*.{png,jpg,jpeg,gif,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function resolveImages(html: string, postDir: string): string {
  return html.replace(/src="([^"]+)"/g, (match, src) => {
    const filename = src.replace(/^\.\//, "");
    const key = Object.keys(images).find(
      (k) => k.startsWith(postDir + "/") && k.endsWith("/" + filename)
    );
    return key ? `src="${images[key]}"` : match;
  });
}

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const entry = Object.entries(modules).find(([path]) => {
    const filename = path.split("/").pop()!;
    const isIndex = filename === "index.md" || filename === "index.mdx";
    return isIndex
      ? path.split("/").at(-2) === slug
      : path.endsWith(`/${slug}.md`) || path.endsWith(`/${slug}.mdx`);
  });

  const [entryPath, mod] = (entry ?? [undefined, undefined]) as [string | undefined, any];
  const postDir = entryPath ? entryPath.replace(/\/[^/]+\.(md|mdx)$/, "") : "";

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "1rem" }}>
      <Link to="/">← Voltar</Link>
      <article>
        <h1>{mod?.frontmatter?.title ?? slug}</h1>
        {mod?.html
          ? <div dangerouslySetInnerHTML={{ __html: resolveImages(mod.html, postDir) }} />
          : <p>Post não encontrado.</p>
        }
      </article>
    </main>
  );
}
