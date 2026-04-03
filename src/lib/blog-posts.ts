import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { Marked } from 'marked';

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
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : slug;

  const dateMatch = slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
  const bylineHtml = dateMatch
    ? `<p class="blog-byline">Mark Keller &middot; ${
        new Date(+dateMatch[1], +dateMatch[2] - 1, +dateMatch[3])
          .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      }</p>`
    : '';

  const instance = new Marked({
    hooks: {
      postprocess(html) {
        return html.replace('</h1>', `</h1>${bylineHtml}`);
      },
    },
  });

  const html = await instance.parse(content);
  return { title, html };
};
