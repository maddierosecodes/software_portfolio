import Image, { StaticImageData } from 'next/image';

type FrameShape = 'circle' | 'star' | 'square' | 'oblong';

interface FramedImageProps {
  src: string | StaticImageData;
  alt: string;
  size?: 'default' | 'large';
  role?: string;
  shape?: FrameShape;
  priority?: boolean;
}

export default function FramedImage({
  src,
  alt,
  size = 'default',
  role = 'img',
  shape = 'circle',
  priority = false,
}: FramedImageProps) {
  const sizeClasses = {
    default: 'w-[clamp(8rem,20vw,14rem)]',
    large: 'w-[clamp(8rem,30vw,14rem)] lg:w-[clamp(14rem,40vw,22rem)]',
  };

  const shapeClasses = {
    circle: 'rounded-full',
    star: 'clip-path-star',
    square: 'rounded-lg',
    oblong: 'rounded-md',
  };

  const aspectRatioClass =
    shape === 'oblong' ? 'aspect-[2.5/1]' : 'aspect-square';

  return (
    <div
      className={`border-gradient-pink overflow-hidden bg-pink-200 p-3 pink-glow-box-shadow ${shapeClasses[shape]}`}
      role={role}
      aria-label={alt}
    >
      <div
        className={`overflow-hidden bg-blue-500 ${sizeClasses[size]} ${shapeClasses[shape]} ${aspectRatioClass}`}
      >
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover"
          quality={85}
        />
      </div>
    </div>
  );
}
