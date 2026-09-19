import Image from "next/image";
import type { ImageAsset } from "@/lib/images";
import { cn } from "@/lib/utils";

type PhotoProps = {
  image: ImageAsset;
  /** Tells the browser how wide the image renders so it downloads the right size. */
  sizes: string;
  className?: string;
  imageClassName?: string;
  /** Use for the one above-the-fold image on a page. */
  preload?: boolean;
};

/**
 * A photo that fills its box and crops to it. The box's shape comes from
 * `className` (an aspect ratio or a fixed height), so callers never need to
 * know the image's intrinsic size.
 */
export function Photo({
  image,
  sizes,
  className,
  imageClassName,
  preload,
}: PhotoProps) {
  return (
    <div className={cn("relative overflow-hidden bg-ink-100", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
