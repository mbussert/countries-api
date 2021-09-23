import React from "react";

function CountyCard() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
          <div className="bg-white shadow-xl rounded-md overflow-hidden">
            <div className="bg-cover bg-center content-div image-cover h-56 p-4"></div>
            <div className="p-5 pl-7 pb-12">
              <p className="tracking-wide text-xl font-bold text-gray-700 pb-3">
                Germany
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Population:</span> 81,770,900
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Region:</span> Europe
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Capital:</span> Berlin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountyCard;
