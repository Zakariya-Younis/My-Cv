import frontMatter from 'front-matter';
import fs from 'fs';
import path from 'path';

import type { TPostFrontMatter } from '@/types';

const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

export const getPostSlugs = () => {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));
  } catch (err) {
    return [];
  }
};

export const getPostFrontMatter = (slug: string): TPostFrontMatter => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { attributes } = frontMatter<TPostFrontMatter>(fileContents);
    return attributes;
  } catch (err) {
    return {} as TPostFrontMatter;
  }
};

export const getSortedPosts = () => {
  try {
    const slugs = getPostSlugs();
    const allPostsData = slugs.map((slug) => {
      const data = getPostFrontMatter(slug);
      return { slug, frontMatter: data };
    });
    return allPostsData.sort(
      ({ frontMatter: { date: a } }, { frontMatter: { date: b } }) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
      }
    );
  } catch (err) {
    return [];
  }
};
