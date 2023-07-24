import * as React from "react";

export const useMenuWithIntersection = () => {
  const [activeNav, setActiveNav] = React.useState<string>("");

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          setActiveNav(`#${entry.target.getAttribute("id")}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeNav;
};
