import Head from "next/head";
import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  console.log(router);
  const { blogID } = router.query;
  return (
    <>
      <Head>
        <title>Post {blogID}</title>
      </Head>
      <div>
        This is Blog Details for <b>{blogID}</b>
      </div>
    </>
  );
};

export default BlogPage;
