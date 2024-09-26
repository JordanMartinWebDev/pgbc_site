"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { sleep } from "./utils";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const main = document.querySelector("main");
    main?.classList.add("page-transition");
    await sleep(300);
    router.push(href);
    await sleep(300);
    main?.classList.remove("page-transition");
  };

  return (
    <Link
      onClick={handleTransition}
      href={href}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};
