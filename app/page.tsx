import Image from 'next/image';
import profilePic from './profile.png';

export default function Home() {
  return (
    <section className="flex flex-wrap justify-between items-center mx-[10%] px-10 pt-10 h-fit pb-20 custom-flex-col">
      <div className="mt-10 sm:w-1/2 w-full flex flex-col items-start justify-between space-y-4 text-left custom-text-align">
        <h2 className="subtitle w-full text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
          Hello! I am
        </h2>
        <h1 className="title w-full lg:pl-3 pb sm:text-7xl lg:text-8xl xl:text-9xl">
          Maddie
        </h1>
        <h3 className="body-text w-full lg:pl-10 sm:px-20 text-lg sm:text-xl lg:text-2xl xl:text-3xl pb-5">
          <i>a Freelance Web & Software Dev</i>
        </h3>
        <button className="custom-margin text-pink-500 bg-gold-200 py-2 px-4 rounded-3xl border-4 border-pink-200 text-xl sm:text-2xl lg:text-3xl font-bold">
          CTA Button
        </button>
      </div>

      <div className="flex justify-center sm:w-1/2 w-full">
        <div className="overflow-hidden rounded-full border-4 border-pink-200 bg-pink-200 p-2 mt-10 sm:mt-0">
          <div
            className="overflow-hidden rounded-full bg-blue-500 
                          w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 custom-image-size"
          >
            <Image
              src={profilePic}
              width={500}
              height={500}
              alt="Picture of Maddie"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
