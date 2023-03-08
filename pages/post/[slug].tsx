import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ErrorPage from "next/error";
import { getBase64ImageUrl, getPosts } from "../../utils/api";
import Container from "../../components/blog/container";
import { richTextReducer } from "../../utils/textParser";

export default function Post(props) {
  const { postdata, notFound } = props;

  if (notFound) {
    return <ErrorPage statusCode={404} />;
  }

  const description = "";
  const title = postdata?.attributes?.title || "Article";
  const articleDate = postdata?.attributes?.publishedAt;
  const keywords =
    postdata?.attributes?.keywords?.join(", ") ||
    "Lawaai, Techno, Music, Events";

  const reformattedDate = () => {
    const parsedDate = new Date(postdata?.attributes?.publishedAt);
    return (
      parsedDate.getDate() +
      "." +
      (Number(parsedDate.getMonth()) + 1) +
      "." +
      parsedDate.getFullYear()
    );
  };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={"Lawaai"} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={articleDate} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content={"Lawaai"} />

        {/* Schema.org Markup */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
          },
          "headline": "${title}",
          "datePublished": "${articleDate}",
          "publisher": {
            "@type": "Organization",
            "name": "Lawaai",
          },
          "description": "${description}"
        }`,
          }}
        /> */}
        <title>{title} | Lawaai</title>
      </Head>
      <div className="relative mt-[3.5rem] lg:mt-28">
        {postdata && (
          <>
            <Container className="!pt-0">
              <div className="max-w-screen-md mx-auto ">
                <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl text-white">
                  {postdata.attributes.title}
                </h1>

                <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex items-center space-x-2 text-sm">
                        <time
                          className="text-gray-500 dark:text-gray-400"
                          dateTime={reformattedDate()}
                        >
                          {reformattedDate()}
                        </time>
                        <span>
                          · {postdata.attributes.timeToRead || "5"} min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
              {postdata.attributes.image && (
                <Image
                  src={postdata.attributes.image.data.attributes.url}
                  alt={postdata.attributes.image.data.attributes.name
                    .replace(".jpg", "")
                    .replace(".png", "")}
                  placeholder="blur"
                  blurDataURL={postdata.blurDataUrl}
                  fill
                  loading="eager"
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>

            <Container>
              <article className="max-w-screen-md mx-auto text-white">
                <div
                  dangerouslySetInnerHTML={{
                    __html: richTextReducer(postdata.attributes.content),
                  }}
                  className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500 text-justify text-lg article"
                ></div>
                <div className="flex justify-center mt-7 mb-7">
                  <Link
                    href="/blog"
                    className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 "
                  >
                    ← View all posts
                  </Link>
                </div>
              </article>
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const allPosts = await getPosts();

  let post = allPosts.find((post) => post.attributes.slug === params.slug);

  if (!post) {
    return {
      props: {
        notFound: true,
      },
      revalidate: 10,
    };
  }
  const publicId =
    post.attributes.image.data.attributes.provider_metadata.public_id;
  const format = post.attributes.image.data.attributes.ext.replace(".", "");

  const blurImagePromise = getBase64ImageUrl(publicId, format);

  const imageWithBlurDataUrl = await Promise.resolve(blurImagePromise);

  post.blurDataUrl = imageWithBlurDataUrl;

  return {
    props: {
      postdata: { ...post },
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const allPosts = await getPosts();
  return {
    paths:
      allPosts?.map((page) => ({
        params: {
          slug: page.attributes.slug,
        },
      })) || [],
    fallback: true,
  };
}
