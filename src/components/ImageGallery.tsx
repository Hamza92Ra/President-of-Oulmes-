import ImagePlaceholder from "./ImagePlaceholder";
import { images, ImageKey } from "@/config/images";

type ImageGalleryProps = {
  imageKeys: ImageKey[];
  className?: string;
};

export default function ImageGallery({ imageKeys, className = "" }: ImageGalleryProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
      {imageKeys.map((key) => (
        <ImagePlaceholder
          key={key}
          src={images[key]}
          alt={key}
          label={images[key].replace("/images/", "")}
          aspectRatio="4/3"
        />
      ))}
    </div>
  );
}
