import Head from "next/head";

import Brands from "../components/Brands";

import MoviesCollection from "../components/MoviesCollection";

// import Creative from "../components/Creative";
// import ParallaxGrid from "../components/ParallaxGrid";
// import CrResume from "../components/CrResume";
// import NeonSocialIcons from "../components/NeonSocialIcons";
// import ParticleCanvas from "../components/ParticleCanvas";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Rathi </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Brands />
        <MoviesCollection />
        {/* <Creative /> */}
        {/* <ParallaxGrid /> */}
        {/* <CrResume /> */}
        {/* <NeonSocialIcons /> */}
        {/* <ParticleCanvas /> */}
      </main>
    </div>
  );
}