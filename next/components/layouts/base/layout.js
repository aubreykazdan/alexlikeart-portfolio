import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alexlikeart's personal portfolio"
          key="ogdesc"
        />
        <meta property="og:title" content={page} key="ogtitle" />
        <meta property="og:image" content="/images/portait.jpg" key="ogimage" />
        <title>Alexlikeart | {page}</title>
      </Head>
      <div
        id="body"
        className="tt-transition tt-boxed tt-smooth-scroll tt-magic-cursor"
      >
        {/* <Header /> */}
        <main id="body-inner">{children}</main>
        <Footer />
      </div>
    </>
  );
}
