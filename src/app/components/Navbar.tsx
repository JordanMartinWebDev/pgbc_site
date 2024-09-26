import { makeClassName } from "@/utils/utils";
import { TransitionLink } from "@/utils/TransitionLink";
import Image from "next/image";

export default function Navbar() {
  return (
    <div
      className={makeClassName(
        "flex",
        "justify-between",
        "items-center",
        "h-12",
        "bg-foreground",
        "text-background",
        "relative",
        "shadow-sm",
        "border-b-highlight",
        "border-b-4"
      )}
    >
      <div
        className={makeClassName(
          "flex",
          "justify-between",
          "container",
          "mx-auto",
          "border-b-highlight",
          "boerder-2"
        )}
      >
        <div className={makeClassName("flex", "items-center")}>
          <TransitionLink
            href={"/"}
            className={makeClassName("flex", "text-lg", "font-bold", "navbar")}
          >
            <Image src="/images/PGLogo.png" alt="Logo" width={35} height={35} />
          </TransitionLink>
        </div>
        <div className={makeClassName("flex", "items-center", "gap-8")}>
          <TransitionLink
            href={"/pages/blog"}
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            About Us
          </TransitionLink>
          <TransitionLink
            href={"/pages/projects"}
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            Ministries
          </TransitionLink>
          <TransitionLink
            href={"/pages/about"}
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            Give
          </TransitionLink>
          <TransitionLink
            href={"/pages/contact"}
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            Visit Us
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
