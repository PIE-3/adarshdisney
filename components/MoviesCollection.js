import Image from "next/image";
import Brand_group from "./Brand_group";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function MoviesCollection() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8  max-w-[1400px] mx-auto  ">
      <h2 className="font-semibold">adarsh</h2>
      {/* className="flex flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto" */}
      <Carousel
        width="90%"
        emulateTouch={true}
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
      >
        <div className="brand group">
          <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/national-geographic.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="brand group">
          <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/national-geographic.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="brand group">
          <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/national-geographic.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="brand group">
          <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src="/images/national-geographic.png"
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
          </video>
        </div>

        <Brand_group
          divclassname="brand group"
          imgsrc="/images/disnep.png"
          vidsrc="/videos/disney.mp4"
        />
      </Carousel>
    </div>
  );
}

export default MoviesCollection;
