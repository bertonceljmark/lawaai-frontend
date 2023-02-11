import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Seo from "next";
import { useRouter } from "next/router";
import { getBase64ImageUrl, getPosts } from "../utils/api";
import PostList from "../components/blog/postlist";

export default function Blog({ postdata }) {
  return (
    <div className="mt-[3.5rem] md:mt-0 min-h-screen text-white">
      {postdata && (
        <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
          <h1 className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            Blog
          </h1>
          <div className="text-center">
            <p className="mt-2 text-lg">See all posts we have ever written.</p>
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
