import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

// ==============================================================
interface NextLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}
// ==============================================================

export default function NextLink({ children, ...props }: NextLinkProps) {
  return <Link {...props}>{children}</Link>;
}
