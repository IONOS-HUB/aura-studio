import Image from "next/image";

/**
 * Circular lockup (gold on cream). Use on nude surfaces — the black PNG
 * lockup is for hero, OG, and photo placeholders.
 */
export default function BrandMark({
  size = 40,
  className = "",
  priority = false,
  alt = "Aura Beauty Studio",
  ...rest
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
      {...rest}
    >
      <Image
        src="/imgs/icon_blancobg.jpeg"
        alt={alt}
        width={size}
        height={size}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
