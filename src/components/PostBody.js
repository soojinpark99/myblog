import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import styles from "@/styles/PostBody.module.css";

const PostBody = ({ data }) => {
  return (
    <article className={styles.article}>
      <MDXRemote
        source={data}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkBreaks],
            rehypePlugins: [[rehypePrettyCode], rehypeSlug],
          },
        }}
      />
    </article>
  );
};

export default PostBody;
