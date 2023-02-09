import Image from "next/image";
import Link from "next/link";
import { PhotographIcon } from "@heroicons/react/outline";

export default function PostList({ post, aspect, blurDataUrl }) {
  const reformattedDate = () => {
    const parsedDate = new Date(post.publishedAt);
    return (
      parsedDate.getDate() +
      "." +
      (Number(parsedDate.getMonth()) + 1) +
      "." +
      parsedDate.getFullYear()
    );
  };
  return (
    <div className="">
      <div className="cursor-pointer group">
        <div
          className={
            "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square"
          }
        >
          <Link href={`/post/${post.slug}`}>
            {post.image.data ? (
              <Image
                src={post.image.data.attributes.url}
                alt={post.image.data.attributes.name
                  .replace(".jpg", "")
                  .replace(".png", "")}
                sizes="80vw"
                fill
                placeholder="blur"
                priority
                blurDataURL={blurDataUrl}
                style={{ objectFit: "cover" }}
                className="transition-all"
              />
            ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <PhotographIcon />
              </span>
            )}
          </Link>
        </div>
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary text-white">
          <Link href={`/post/${post.slug}`}>
            <span
              className="     bg-gradient-to-r from-purple-800 to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
            >
              {post.title}
            </span>
          </Link>
        </h2>
        <div className="flex items-center justify-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <span className="text-sm"> {post.timeToRead + " min read,"}</span>
          <time className="text-sm" dateTime={reformattedDate()}>
            {reformattedDate()}
          </time>
        </div>
      </div>
    </div>
  );
}
