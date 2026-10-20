import Image from "next/image";
import { APP_STORE_URL, IMAGES, PLAY_STORE_URL } from "@/lib/constants";

type StoreBadgesProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

/** Intrinsic widths used for next/image; visual size controlled via CSS height */
const INTRINSIC = {
  sm: { h: 40, wApple: 120, wPlay: 122 },
  md: { h: 52, wApple: 156, wPlay: 160 },
  lg: { h: 72, wApple: 216, wPlay: 222 },
  xl: { h: 96, wApple: 288, wPlay: 296 },
} as const;

const HEIGHT_CLASS = {
  sm: "h-10",
  md: "h-[52px]",
  lg: "h-[72px]",
  xl: "h-14 sm:h-[80px] md:h-[96px]",
} as const;

export function StoreBadges({ className = "", size = "md" }: StoreBadgesProps) {
  const { h, wApple, wPlay } = INTRINSIC[size];
  const heightClass = HEIGHT_CLASS[size];

  return (
    <div
      className={`flex flex-nowrap items-center justify-center gap-3 sm:gap-5 ${className}`}
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="shrink-0 transition-opacity hover:opacity-90"
      >
        <Image
          src={IMAGES.appStoreBadge}
          alt="Download on the App Store"
          width={wApple}
          height={h}
          className={`${heightClass} w-auto max-w-none`}
          priority={size === "xl"}
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="shrink-0 transition-opacity hover:opacity-90"
      >
        <Image
          src={IMAGES.playStoreBadge}
          alt="Get it on Google Play"
          width={wPlay}
          height={h}
          className={`${heightClass} w-auto max-w-none`}
          priority={size === "xl"}
        />
      </a>
    </div>
  );
}
