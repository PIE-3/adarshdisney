import Image from "next/image";
import React, { useState } from 'react';


function Brands() {
  const [isShown, setIsShown] = useState(false);
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-40 gap-6 px-10 max-w-[1400px] mx-auto">
      <div className="brand group bgdummy">

        <div className="dummy" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
          <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
          {isShown ? <div>
            <div className="" >
              <div>
                <video autoPlay loop playsInline className="vid">
                  <source src="/videos/disney.mp4" type="video/mp4" />
                </video>
              </div>
              <div>
                <button className="button">share</button>
                <button className="button">like</button>
              </div>

            </div>
          </div> : <div></div>
          }
        </div>

      </div>
      <div className="brand group bgdummy">
        <div className="dummy">
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
      </div>

      <div className="brand group bgdummy">
        <div className="dummy">
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
      </div>

      <div className="brand group bgdummy">
        <div className="dummy">
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
      </div>

      <div className="brand group bgdummy">
        <div className="dummy">
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
      </div>
    </section>
  );
}

export default Brands;
