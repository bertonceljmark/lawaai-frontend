import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import useKeypress from "react-use-keypress";
import type { ImageProps } from "../../utils/types";
import Loader from "../loader";
import SharedModal from "./SharedModal";

export default function Modal({
  images,
  currentPhoto,
  setCurrentPhoto,
  photoId,
  setPhotoId,
}: {
  images: ImageProps[];
  currentPhoto: any;
  setCurrentPhoto: any;
  photoId: number | string;
  setPhotoId: (newId: number | undefined) => void;
}) {
  const [direction, setDirection] = useState(0);

  function handleClose() {
    setPhotoId(undefined);
  }

  function changePhotoId(newVal: number) {
    if (newVal > Number(photoId)) {
      setDirection(1);
    } else {
      setDirection(-1);
    }

    setPhotoId(newVal);
  }

  useKeypress("ArrowRight", () => {
    if (Number(photoId) + 1 < Number(images[images.length - 1].id)) {
      setPhotoId(Number(photoId) + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (Number(photoId) > Number(images[0].id)) {
      setPhotoId(Number(photoId) - 1);
    }
  });

  return (
    <Fragment>
      {images.length == 0 || !images ? (
        <Loader></Loader>
      ) : (
        <Dialog
          static
          open={!!photoId}
          onClose={handleClose}
          className="fixed inset-0 z-10 flex items-center justify-center"
        >
          <Dialog.Overlay
            as={motion.div}
            key="backdrop"
            className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <SharedModal
            photoId={photoId}
            currentPhoto={currentPhoto}
            setCurrentPhoto={setCurrentPhoto}
            direction={direction}
            images={images}
            changePhotoId={changePhotoId}
            closeModal={handleClose}
            navigation={true}
          />
        </Dialog>
      )}
    </Fragment>
  );
}
