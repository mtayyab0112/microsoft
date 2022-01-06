import { ChevronRightIcon } from "@heroicons/react/outline";

const CovidNote = () => {
  return (
    <div className="max-w-screen-2xl mx-5 2xl:mx-auto bg-gray-200 mb-10">
      <div className="flex flex-col justify-center items-center py-5">
        <h1 className="text-3xl font-semibold">
          Microsoft’s response to COVID-19
        </h1>
        <p className="my-2">
          Read how we’re responding to the COVID-19 outbreak, and get resources
          to help.
        </p>
        <button className="flex group">
          <span className="font-semibold border-b-2 border-transparent group-hover:border-black trasition duration-300">
            Learn more
          </span>
          <ChevronRightIcon className="h-4 mt-[5px] transform group-hover:translate-x-1 transition duration-300" />
        </button>
      </div>
    </div>
  );
};

export default CovidNote;
