import Navigation from "./components/CompNavigation/Navigation";
import Advertisement from "./components/advertisements/TextCarousel";
import "../styles/globals.css";

import { font } from "./fonts";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Advertisement />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
