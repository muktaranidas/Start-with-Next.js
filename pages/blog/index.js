import Head from "next/head";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <Head>
        <title>Blog Page</title>
      </Head>

      <h2>This is Blog </h2>
      <Link href="blog/blog1">Blog Page 1</Link>
    </div>
  );
};

export default Blog;
