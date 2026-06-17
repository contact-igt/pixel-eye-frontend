import Preloader from "@/common/Preloader";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      <Component {...pageProps} />
    </>
  )
}
