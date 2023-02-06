export async function getEvents(setEvents: (newData: []) => void) {
  try {
    const results = await fetch(
      "https://stingray-app-o5rkj.ondigitalocean.app/api/events?populate=*"
    );
    const parsedResults = await results.json();
    const data = await parsedResults.data;

    setEvents(data);
  } catch (error) {}
}

export async function getEventPhotos({
  galleryId,
  setEventPhotos,
}: {
  galleryId: any;
  setEventPhotos: any;
}) {
  try {
    const results = await fetch(
      "https://stingray-app-o5rkj.ondigitalocean.app/api/photos/" +
        galleryId +
        "?populate=*"
    );
    const parsedResults = await results.json();
    const data = await parsedResults.data;

    setEventPhotos(
      data.attributes.images.data
        .map((item: any) => {
          return {
            id: item.id,
            height: item.attributes.height,
            width: item.attributes.width,
            url: item.attributes.url,
            public_id: item.attributes.provider_metadata.public_id,
            format: item.attributes.ext.replace(".", ""),
            sizes: item.attributes.formats,
          };
        })
        .sort((a: any, b: any) => Number(a.id) - Number(b.id))
    );
  } catch (error) {}
}

export async function getCurrentPhoto({
  eventId,
  photoId,
}: {
  eventId: string;
  photoId: string;
}) {
  try {
    const results = await fetch(
      `https://stingray-app-o5rkj.ondigitalocean.app//api/photos/${photoId}?populate=*`
    );
    const parsedResults = await results.json();
    const data = await parsedResults.data;
  } catch (error) {}
}
