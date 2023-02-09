export async function getEvents() {
  try {
    const results = await fetch(
      "https://stingray-app-o5rkj.ondigitalocean.app/api/events?populate=*"
    );
    const parsedResults = await results.json();
    const data = await parsedResults.data;

    return data;
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

    let mappedPhotos = data.attributes.images.data
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
      .sort((a: any, b: any) => Number(a.id) - Number(b.id));

    const blurImagePromises = mappedPhotos.map((image) => {
      return getBase64ImageUrl(image.public_id, image.format);
    });

    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

    for (let i = 0; i < mappedPhotos.length; i++) {
      mappedPhotos[i].blurDataUrl = imagesWithBlurDataUrls[i];
    }

    setEventPhotos(mappedPhotos);
  } catch (error) {}
}

export async function getBase64ImageUrl(
  imageId: string,
  format: string
): Promise<string | undefined> {
  const response = await fetch(
    `https://res.cloudinary.com/dz3mbvvzj/image/upload/f_jpg,w_8,q_70/${imageId}.${format}`
  );
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString("base64");

  return `data:image/webp;base64,${data}`;
}

export async function getPosts(): Promise<any> {
  try {
    const results = await fetch(
      "https://stingray-app-o5rkj.ondigitalocean.app/api/articles?populate=*"
    );
    const parsedResults = await results.json();
    const data = await parsedResults.data;

    return data;
  } catch (error) {}
}
