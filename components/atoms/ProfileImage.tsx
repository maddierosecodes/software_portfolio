import Image, { StaticImageData } from 'next/image';

interface ProfileImageProps {
  src: string | StaticImageData;
  alt: string;
  size?: 'default' | 'large';
  role?: string;
}

export default function ProfileImage({
  src,
  alt,
  size = 'default',
  role,
}: ProfileImageProps) {
  const sizeClasses = {
    default: 'w-[clamp(8rem,20vw,14rem)]',
    large: 'w-[clamp(8rem,30vw,14rem)] lg:w-[clamp(14rem,40vw,22rem)]',
  };

  return (
    <div className="border-gradient-pink overflow-hidden rounded-full bg-pink-200 p-2">
      <div
        className={`overflow-hidden rounded-full bg-blue-500 aspect-square ${sizeClasses[size]}`}
        role={role}
      >
        <Image
          src={src}
          width={500}
          height={500}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
