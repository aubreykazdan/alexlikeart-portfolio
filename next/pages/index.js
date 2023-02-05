import { getAllPostsForHome } from "../lib/api";

import Layout from "../components/layouts/base/layout";

export default function Home({ blogPost, preview }) {
  return (
    <Layout page="Home">
      <main>
        <h1>Hello</h1>
        <p className="">hello</p>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const blogPost = await getAllPostsForHome(preview);
  return {
    props: { blogPost, preview },
    revalidate: 1,
  };
}
