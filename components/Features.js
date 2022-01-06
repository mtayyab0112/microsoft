import { ChevronRightIcon } from "@heroicons/react/outline";
import FeatureData from "./FeatureData";

const Features = () => {
  return (
    <div className="max-w-screen-2xl mx-5 2xl:mx-auto mt-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 mb-10 -mt-3">
        {FeatureData.map((feature) => {
          return (
            <div className="cursor-pointer" key={feature.id}>
              <div className="aspect-w-7 aspect-h-5 ">
                <img
                  src={feature.img}
                  alt={feature.img}
                  className="object-contain filter hover:brightness-[1.04]"
                />
              </div>

              <h1 className="font-semibold text-xl mt-1">{feature.heading}</h1>
              <p className="text-sm mt-1">{feature.description}</p>
              <div className="text-blue-700/80 font-medium mt-2 flex features">
                <span className="flex justify-between hover:cursor-pointer group ">
                  <span className="border-b-2 border-transparent group-hover:border-blue-700/80 transition duration-300">
                    {feature.linktext1}
                  </span>
                  <ChevronRightIcon className="stroke-2 h-5 mt-0.5 ml-1 transform group-hover:translate-x-0.5 transition duration-300" />
                </span>
                {feature.linktext2 && (
                  <span className="flex justify-between ml-5 hover:cursor-pointer group">
                    <span className="border-b-2 border-transparent group-hover:border-blue-700/80 transition duration-300">
                      {feature.linktext2}
                    </span>
                    <ChevronRightIcon className="h-5 mt-0.5 ml-1 transform group-hover:translate-x-0.5 transition duration-300" />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
