import React from "react";
import RespondRequest from "./Components/RespondRequest/RespondRequest";
import SentOffersRequest from "./Components/SentOffersRequest/SentOffersRequest";

function QuoteRequests() {
  return (
    <div className="px-4 md:px-7 min-h-screen py-4 mt-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-y-3 gap-x-6">
        <p className="bg-[#00427e] py-3 text-center rounded-lg text-white cursor-pointer">
          Respond
        </p>
        <p className="bg-white py-3 text-center rounded-lg cursor-pointer text-nowrap">
          Offers Sent
        </p>
        <p className="bg-white py-3 text-center rounded-lg cursor-pointer">
          Accepted
        </p>
        <p className="bg-white py-3 text-center rounded-lg cursor-pointer">Refused</p>
      </div>
        <RespondRequest />
        <SentOffersRequest />
    </div>
  );
}

export default QuoteRequests;
