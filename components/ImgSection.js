import { ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

const ImgSection = ({
  imgSrc,
  heading,
  description,
  btnTitle,
  label,
  theme,
}) => {
  return (
    <div className={`max-w-screen-2xl mx-5 2xl:mx-auto relative ${theme}`}>
      <div className="aspect-w-16 aspect-h-9 md:aspect-h-9 lg:aspect-h-6 xl:aspect-h-6">
        <Image
          src={imgSrc}
          layout="fill"
          className="object-cover object-right-top md:object-center"
          priority="webp"
        />
      </div>
      <div className="bg-skin-detailBG md:bg-transparent py-[70px] px-12 relative items-center md:absolute h-full md:pl-20 inset-0 md:left-0 md:w-[605px] flex flex-col md:items-start justify-center">
        {label && (
          <span className="bg-yellow-500 py-1 px-3.5 font-semibold">
            {label}
          </span>
        )}
        <h1 className="text-skin-headingColor text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mt-1">
          {heading}
        </h1>
        <p className="text-sm text-skin-desColor mt-1 md:mt-5 text-center md:text-left ">
          {description}
        </p>
        <button className="bg-skin-btnBgColor hover:bg-skin-btnHoverBg font-semibold flex items-center py-1.5 px-4 mt-3 md:mt-5 group transition duration-300">
          <span className="text-skin-btnColor border-b-2 border-transparent group-hover:border-skin-btnTextBorderColor transform group-hover:-translate-x-0.5 transition duration-300">
            {btnTitle}
          </span>
          <ChevronRightIcon className="h-5 mt-0.5 ml-1 text-skin-btnColor transform group-hover:translate-x-0.5 transition duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ImgSection;
