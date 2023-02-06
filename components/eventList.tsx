import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { getEventPhotos, getEvents } from "../utils/api";
import EventCard from "./eventCard";
import Modal from "./gallery/Modal";
import Loader from "./loader";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [eventPhotos, setEventPhotos] = useState([]);
  const [galleryId, setGalleryId] = useState<number | string | undefined>(
    undefined
  );
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [photoId, setPhotoId] = useState<number | string | undefined>(
    undefined
  );

  useEffect(() => {
    getEvents(setEvents);
  }, []);

  useEffect(() => {
    if (!galleryId) return;

    getEventPhotos({
      galleryId: galleryId || "0",
      setEventPhotos,
    });
  }, [galleryId]);

  useEffect(() => {
    if (eventPhotos.length > 0) {
      return setCurrentPhoto(
        eventPhotos.find((image: any) => image.id == photoId) || {}
      );
    }
  }, [photoId, eventPhotos]);

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex justify-center items-center flex-col lg:flex-row relative min-h-screen">
        {events.map((event: any) => {
          return (
            <EventCard
              key={event.id}
              thumbnail={event.attributes.thumbnail.data.attributes.url}
              location={event.attributes.location}
              date={event.attributes.date}
              onClick={handleClick(event.attributes.photo.data.id)}
            />
          );
        })}
      </div>
      <main className="mx-auto max-w-[1960px] p-4">
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
            eventPhotos.map(({ id, sizes }: { id: any; sizes: any }) => (
              <div
                key={id}
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                onClick={() => setPhotoId(id)}
              >
                <Image
                  alt="Lawaai event photo"
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  src={sizes?.medium?.url || ""}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                />
              </div>
            ))}
        </div>
      </main>
    </>
  );
};
export default EventList;
