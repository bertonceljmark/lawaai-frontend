import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const EventGallery = () => {
  const router = useRouter();
  const { photoId } = router.query;

  return (
    <>
      {images.map(({ id, url }) => (
        <Link
          key={id}
          href={`/?photoId=${id}`}
          as={`/p/${id}`}
          shallow
          className="..."
        >
          <Image src={url} className="..." />
        </Link>
      ))}
    </>
  );
};

export default EventGallery;
