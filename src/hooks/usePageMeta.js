import { useEffect } from "react";

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function usePageMeta() {
  useEffect(() => {
    document.title = "Klaws by Koko";
    setMeta(
      "description",
      "Share your experience and stay connected with Klaws by Koko."
    );
    setMeta("viewport", "width=device-width, initial-scale=1, viewport-fit=cover");
  }, []);
}
