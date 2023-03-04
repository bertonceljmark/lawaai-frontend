import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const posts = await getPosts();

  const newsSitemaps = posts.map((item) => ({
    loc: `https://lawaai.club/${item.attributes.slug}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
