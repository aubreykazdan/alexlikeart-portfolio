import Layout from "../components/layouts/base/layout";

export default function Home({}) {
  return (
    <Layout page="Home">
      <div id="page-transition">
        <div className="ptr-overlay"></div>
        <div className="ptr-preloader">
          <div className="ptr-prel-content">
            <img
              src="assets/img/logo-light.png"
              className="ptr-prel-image tt-logo-light"
              alt="Logo"
            />
          </div>
        </div>
      </div>

      <div id="magic-cursor">
        <div id="ball"></div>
      </div>

      <div className="bg-noise"></div>
    </Layout>
  );
}
