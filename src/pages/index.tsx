import Head from "next/head";

import Top from "../components/top";
import TopMenu from "../components/top-menu";
import Footer from "../components/footer";
import ContainerTitle from "../components/Container_title";
import ContainerBody from "../components/Container_body";
import ProductAoNi from "../components/ProductAoni";
import ProductAoLen from "../components/ProductAolen";
import Cart from "../components/Cart";
import ProductBoMacNha from "../components/ProductBoMacNha";
import SearchBar from "../components/SearchBar";
import HeartIcon from "../components/HeartIcon";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/asset/css/main.css" />
        <link rel="stylesheet" href="/asset/css/basa.css" />
        <link rel="stylesheet" href="/asset/css/style.css" />
        <link rel="stylesheet" href="/asset/css/searchBar.css" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Top />
      <TopMenu />
      <SearchBar />
      <ContainerTitle />
      <ContainerBody />
      <ProductAoNi />
      <ProductAoLen />
      <ProductBoMacNha />
      <Cart />
      <HeartIcon />

      <div
        style={{
          width: "100vw",
          height: "80vh",
        }}
      >
        {/* Container */}
      </div>
      <Footer />
    </>
  );
}
