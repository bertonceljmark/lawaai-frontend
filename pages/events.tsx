import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import EventCard from "../components/eventCard";
import Modal from "../components/gallery/Modal";
import Loader from "../components/loader";
import { getBase64ImageUrl, getEventPhotos, getEvents } from "../utils/api";

const Events = ({ events }) => {
  const [eventPhotos, setEventPhotos] = useState([]);
  const [galleryId, setGalleryId] = useState<number | string | undefined>(
    undefined
  );
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [photoId, setPhotoId] = useState<number | string | undefined>(
    undefined
  );

  const modalRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryId) return;
    getEventPhotos({
      galleryId: galleryId || "0",
      setEventPhotos,
    });
  }, [galleryId]);

  useEffect(() => {
    if (eventPhotos.length > 0) {
      setCurrentPhoto(
        eventPhotos.find((image: any) => image.id == photoId) || {}
      );
    }
  }, [photoId, eventPhotos]);

  useEffect(() => {
    if (eventPhotos.length > 0 && modalRef && modalRef.current) {
      modalRef.current.scrollIntoView();
    }
  }, [eventPhotos]);

  const handleClick = (id: number) => {
    return () => {
      setGalleryId(id);
    };
  };

  if (!events) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Lawaai | Events</title>
        <meta
          name="description"
          content="Check out our past techno events and gallery of images."
        />
        <meta name="keywords" content="lawaai, events, past events, gallery" />
        <meta property="og:title" content="Lawaai - Events" />
        <meta
          property="og:description"
          content="Check out our past techno events and gallery of images."
        />
        <meta property="og:url" content="https://lawaai.club/events/" />
        <meta name="twitter:title" content="Lawaai - Events" />
        <meta
          name="twitter:description"
          content="Check out our past techno events and gallery of images."
        />
        <meta name="twitter:image" content="/images/lawaai-events.png" />
        <meta name="twitter:url" content="https://lawaai.club/events" />
        <link rel="canonical" href="https://lawaai.club/events" />
        <meta name="robots" content="index,follow" />
        <script type="application/ld+json">
          {`"@context": "http://schema.org",
      "@type": "Event",
      "name": "Lawaai - Past Events",
      "description": "Check out our past techno events and gallery of images.",
      }`}
        </script>
      </Head>
      <div className="mt-[3.5rem] lg:mt-0 min-h-screen">
        <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg text-white">
          <h1 className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            Events
          </h1>
          <div className="text-center">
            <p className="mt-2 text-lg">
              Check out some highlights from past events
            </p>
          </div>
          <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {events.map((event: any) => {
              return (
                <EventCard
                  key={event.id}
                  thumbnail={event.attributes.thumbnail.data.attributes.url}
                  location={event.attributes.location}
                  date={event.attributes.date}
                  onClick={handleClick(event.attributes.photo.data.id)}
                  blurDataUrl={event.blurDataUrl}
                />
              );
            })}
          </div>
        </div>
        <main ref={modalRef} className="mx-auto max-w-[1960px] p-4">
          {photoId && (
            <Modal
              images={eventPhotos}
              currentPhoto={currentPhoto}
              setCurrentPhoto={setCurrentPhoto}
              photoId={photoId}
              setPhotoId={setPhotoId}
            />
          )}
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            {!!eventPhotos?.length &&
              eventPhotos[0]?.id &&
              eventPhotos.map(
                ({
                  id,
                  sizes,
                  blurDataUrl,
                }: {
                  id: any;
                  sizes: any;
                  blurDataUrl: string;
                }) => (
                  <div
                    key={id}
                    className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                    onClick={() => setPhotoId(id)}
                  >
                    <Image
                      alt="Photo from an event"
                      className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      src={sizes.medium.url}
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                      width={720}
                      height={480}
                      sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                    />
                  </div>
                )
              )}
          </div>
        </main>
      </div>
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  let events = await getEvents();

  const blurImagePromises = events.map((event) => {
    const publicId =
      event.attributes.thumbnail.data.attributes.provider_metadata.public_id;
    const format = event.attributes.thumbnail.data.attributes.ext.replace(
      ".",
      ""
    );
    return getBase64ImageUrl(publicId, format);
  });

  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < events.length; i++) {
    events[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      events,
    },
  };
}

export default Events;
