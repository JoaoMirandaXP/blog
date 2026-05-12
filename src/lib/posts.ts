const modules = import.meta.glob("../../content/*.{md,mdx}", { eager: true });

export type Post = {
  slug: string;
  title: string;
};

export function getPosts(): Post[] {
  return Object.entries(modules).map(([path, mod]: [string, any]) => {
    const slug = path.split("/").pop()!.replace(/\.(md|mdx)$/, "");
    return {
      slug,
      title: mod.frontmatter?.title ?? slug,
    };
  });
}
