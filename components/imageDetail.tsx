import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageDetail = ({ thumbnailUrl = "", title = "", id = "" }) => {
  return (
    <div>
      <Link as={`/preview/${id}`} href="/preview/[id]">
        <a>
          <Image
            alt="event-from-event"
            width={250}
            height={200}
            src={thumbnailUrl}
          />
          <div className="photoid"> {title}</div>
        </a>
      </Link>
    </div>
  );
};

export default ImageDetail;
