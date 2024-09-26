import { makeClassName } from "@/utils/utils";
import { TransitionLink } from "@/utils/TransitionLink";

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
            JMWD
          </TransitionLink>
        </div>
        <div className={makeClassName("flex", "items-center", "gap-8")}>
          <TransitionLink
            href={"/pages/blog"}
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            Blog
          </TransitionLink>
          <TransitionLink
            href={"/pages/projects"}
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            Projects
          </TransitionLink>
          <TransitionLink
            href={"/pages/about"}
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            About
          </TransitionLink>
          <TransitionLink
            href={"/pages/contact"}
            className={makeClassName("text-lg", "font-bold", "navbar")}
          >
            Contact
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
