import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { marked } from 'marked';

const BLOG_DIR = join(process.cwd(), 'blog');

export const getBlogPostPaths = async (): Promise<string[]> => {
  const files = await readdir(BLOG_DIR);
  return files
    .filter(f => f.endsWith('.md') && f !== 'README.md')
    .map(f => f.replace(/\.md$/, ''))
    .sort()
    .reverse();
};

export const getBlogPosts = async (): Promise<{ slug: string; title: string }[]> => {
  const slugs = await getBlogPostPaths();
  return Promise.all(
    slugs.map(async (slug) => {
      const content = await readFile(join(BLOG_DIR, `${slug}.md`), 'utf-8');
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1] : slug;
      return { slug, title };
    })
  );
};

export const getBlogPost = async (slug: string): Promise<{ title: string; html: string }> => {
  const content = await readFile(join(BLOG_DIR, `${slug}.md`), 'utf-8');
  const html = await marked(content);
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : slug;
  return { title, html };
};
