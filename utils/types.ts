/* eslint-disable no-unused-vars */
export interface ImageProps {
  sizes: any;
  url: string;
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
}

export interface SharedModalProps {
  photoId: any;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  setCurrentPhoto: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
