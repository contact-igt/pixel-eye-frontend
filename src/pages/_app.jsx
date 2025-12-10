import Preloader from "@/common/Preloader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      <Component {...pageProps} />
    </>
  )
}
