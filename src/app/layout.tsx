import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Manrope } from "next/font/google";

import ThemeProvider from "theme/ThemeProvider";
import { AuthProvider } from "context/AuthContext";
import { CartProvider } from "context/CartContext";

// ANIMATE CSS
import "animate.css";
// SWIPER CSS
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// REACT VIDEO PLYR CSS
import "plyr-react/plyr.css";
// G-LIGHTBOX CSS
import "glightbox/dist/css/glightbox.css";
// SCROLL CUE CSS
import "plugins/scrollcue/scrollCue.css";
// BOOTSTRAP & CUSTOM CSS
import "assets/scss/style.scss";
import Topbar from "components/elements/Topbar";
import Navbar from "components/blocks/navbar/navbar-1/Navbar-1";
import Footer9 from "components/blocks/footer/Footer9";

const manrope = Manrope({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Legallens India",
  description: "Legallens India",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="li-theme">
      <head>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="{manrope.className}">
        <AuthProvider>
          <CartProvider>
            {/* ========== topbar section ========== */}
            <Topbar />
            {/* ========== header ========== */}

            <header className="wrapper bg-soft-primary">
              <Navbar
                info
                search
                cart
                stickyBox={false}
                logoAlt="logo-light"
                navClassName="navbar navbar-expand-lg center-nav position-absolute navbar-dark caret-none"
              />
            </header>
            <ThemeProvider>{children}</ThemeProvider>
            <Footer9 />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
