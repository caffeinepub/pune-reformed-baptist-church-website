interface PageHeaderImageProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}

export default function PageHeaderImage({ src, alt, children }: PageHeaderImageProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="eager"
      />
      {children && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
