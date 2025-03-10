import Head from "next/head";
import About from "../components/about";
import Events from "../components/events";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Messages from "../components/messages";
import Schedule from "../components/schedule";
// import Script from 'next/script';
const description =
  "Compufest is a National Level Technical Fest organized by the Department of Computer Technology, Yeshwantrao Chavan College of Engg., Nagpur";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-gray-400" style={{backgroundColor: "#c9c9c9"}} >
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <title>Compufest 2022</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Compufest 2022 : ACM CTSC YCCE" />
        <meta property="og:site_name" content="https://compufest.live" />
        <meta property="og:url" content="https://compufest.live" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://compufest.live/assets/imgs/ogbanner.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta
          name="twitter:image"
          content="https://compufest.live/assets/imgs/ogbanner.png?twitter"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="twitter:card" content="summary_large_image" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.spline.design/lib/anime.min.js"></script>
        <script src="https://assets.codepen.io/9589/spline.runtime.min.js"></script>
      </Head>
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <Events />
        <Schedule />
        <Messages />
        <About />
      </main>
      <Footer />
    </div>
  );
}
