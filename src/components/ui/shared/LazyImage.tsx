import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string | undefined;
  alt?: string;
  placeholder: React.ReactElement;
  className?: string;
}

export const LazyImage = ({ src, alt, placeholder, className }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div ref={ref}>
      {!loaded && placeholder}
      {/* Show the skeleton loader while image is loading */}
      {inView && (
        <img
          src={src}
          alt={alt}
          width={250}
          height={250}
          onLoad={handleLoad}
          style={{ display: loaded ? "block" : "none" }}
          className={className}
        />
      )}
    </div>
  );
};
