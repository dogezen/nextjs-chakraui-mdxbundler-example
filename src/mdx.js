import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
// remark plugin import
import { remarkMdxCodeMeta } from 'remark-mdx-code-meta';
import {colocateImagesPlugin} from "remark-plugin-colocate-images"

// path and file locations
export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), "src/data/blogposts");
export const PUBLIC_IMG_PATH = path.join(process.cwd(), "public/img");

// loads all the contents of a single .mdx file
// in the blogposts folder
export const getFileContent = (filename) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

// takes the content of a .mdx file and runs
// the mdx-bundler with the desired plugins to
// return the generated jsx code and frontmatter content
const getCompiledMDX = async (content) => {
  // esbuild
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }
  // Add your remark and rehype plugins here
  const remarkPlugins = [remarkMdxCodeMeta, colocateImagesPlugin({
    diskRoot: POSTS_PATH,
    diskReplace: PUBLIC_IMG_PATH,
    urlReplace: '/img/'
  })];
  const rehypePlugins = [];

  try {
    return await bundleMDX(content, {
      xdmOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...remarkPlugins,
        ];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...rehypePlugins,
        ];

        return options;
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

// method to take a url slug (ie domain.com/blog/slug)
// and find the relevant file in the blog folder
// if the file is found, it is compiled to JSX
// and the code and frontmatter are returned
export const getSinglePost = async (slug) => {
  const source = getFileContent(`${slug}.mdx`);
  const { code, frontmatter } = await getCompiledMDX(source);

  return {
    code,
    frontmatter,
  };
};

// method to return all the post frontmatter and slug information
// from the directory, in future will fillter for isPublished
export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    });
};