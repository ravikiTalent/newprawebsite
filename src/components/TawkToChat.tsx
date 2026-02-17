"use client";
import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (document.getElementById("tawkto-script")) return;
      var s1 = document.createElement("script");
      s1.id = "tawkto-script";
      s1.async = true;
      s1.src = "https://embed.tawk.to/69943dd53a5ba51c3b88e259/1jhlh32i2";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      var s0 = document.getElementsByTagName("script")[0];
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      } else {
        document.head.appendChild(s1);
      }
    }
  }, []);
  return null;
}
