import Link from "next/link";
import type { ReactNode } from "react";

import { getSiteRouteForLabel } from "@/lib/site-routes";

type SiteLinkProps = {
  label: string;
  href?: string;
  className?: string;
  ariaLabel?: string;
  children?: ReactNode;
};

export function SiteLink({
  label,
  href = "#",
  className,
  ariaLabel,
  children,
}: SiteLinkProps) {
  const route = getSiteRouteForLabel(label, href);
  const content = children ?? label;

  if (route) {
    return (
      <Link href={route} className={className} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {content}
    </a>
  );
}
