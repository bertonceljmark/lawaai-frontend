import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Seo from "next";
import { useRouter } from "next/router";
import { getBase64ImageUrl, getPosts } from "../utils/api";
import PostList from "../components/blog/postlist";

export default function Blog({ postdata }) {
  return (
    <>
      <Head>
        <title>Blog | Lawaai</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest techno music and events at Lawaai. Our blog features the latest news, insights, and behind-the-scenes stories from the techno music scene."
        />
        <meta name="keywords" content="techno, music, events, blog, Lawaai" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph metadata */}
        <meta property="og:title" content="Blog - Lawaai" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lawaai.club/blog" />
        <meta
          property="og:description"
          content="Stay up-to-date with the latest techno music and events at Lawaai. Our blog features the latest news, insights, and behind-the-scenes stories from the techno music scene."
        />

        {/* Twitter Cards metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Lawaai" />
        <meta
          name="twitter:description"
          content="Stay up-to-date with the latest techno music and events at Lawaai. Our blog features the latest news, insights, and behind-the-scenes stories from the techno music scene."
        />

        {/* Schema.org data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Blog - Lawaai",
          "description": "Stay up-to-date with the latest techno music and events at Lawaai. Our blog features the latest news, insights, and behind-the-scenes stories from the techno music scene."
        }
      `,
          }}
        />
      </Head>
      <div className="mt-[3.5rem] lg:mt-0 min-h-screen text-white">
        {postdata && (
          <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
            <h1 className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              Blog
            </h1>
            <div className="text-center">
              <p className="mt-2 text-lg">
                See all posts we have ever written.
              </p>
            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {postdata.map((post) => (
                <PostList
                  key={post.id}
                  post={post.attributes}
                  aspect="square"
                  blurDataUrl={post.blurDataUrl}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  let post = await getPosts();

  const blurImagePromises = post.map((singlePost) => {
    const publicId =
      singlePost.attributes.image.data.attributes.provider_metadata.public_id;
    const format = singlePost.attributes.image.data.attributes.ext.replace(
      ".",
      ""
    );
    return getBase64ImageUrl(publicId, format);
  });

  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < post.length; i++) {
    post[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      postdata: post,
    },
  };
}
