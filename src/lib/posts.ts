const modules = import.meta.glob("../../content/**/*.{md,mdx}", { eager: true });

export type Post = {
  slug: string;
  title: string;
};

export function getPosts(): Post[] {
  return Object.entries(modules).map(([path, mod]: [string, any]) => {
    const filename = path.split("/").pop()!;
    const isIndex = filename === "index.md" || filename === "index.mdx";
    const slug = isIndex
      ? path.split("/").at(-2)!
      : filename.replace(/\.(md|mdx)$/, "");
    return {
      slug,
      title: mod.frontmatter?.title ?? slug,
    };
  });
}
