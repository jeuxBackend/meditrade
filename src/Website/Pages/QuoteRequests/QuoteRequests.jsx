import React, { useState } from "react";
import RespondRequest from "./Components/RespondRequest/RespondRequest";
import SentOffersRequest from "./Components/SentOffersRequest/SentOffersRequest";
import AcceptedRequest from "./Components/AcceptedRequest/AcceptedRequest";
import RefusedRequest from "./Components/RefusedRequest/RefusedRequest";

function QuoteRequests() {
  const [activeTab, setActiveTab] = useState("respond");

  return (
    <div className="px-4 md:px-7 min-h-screen py-4 mt-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-y-3 gap-x-6">
        <p
          onClick={() => setActiveTab("respond")}
          className={`py-3 text-center rounded-lg cursor-pointer ${
            activeTab === "respond" ? "bg-[#00427e] text-white" : "bg-white"
          }`}
        >
          Respond
        </p>

        <p
          onClick={() => setActiveTab("offers")}
          className={`py-3 text-center rounded-lg cursor-pointer ${
            activeTab === "offers" ? "bg-[#00427e] text-white" : "bg-white"
          }`}
        >
          Offers Sent
        </p>

        <p
          onClick={() => setActiveTab("accepted")}
          className={`py-3 text-center rounded-lg cursor-pointer ${
            activeTab === "accepted" ? "bg-[#00427e] text-white" : "bg-white"
          }`}
        >
          Accepted
        </p>

        <p
          onClick={() => setActiveTab("refused")}
          className={`py-3 text-center rounded-lg cursor-pointer ${
            activeTab === "refused" ? "bg-[#00427e] text-white" : "bg-white"
          }`}
        >
          Refused
        </p>
      </div>
      <div className="mt-6">
        {activeTab === "respond" && <RespondRequest />}
        {activeTab === "offers" && <SentOffersRequest />}
        {activeTab === "accepted" && <AcceptedRequest />}
        {activeTab === "refused" && <RefusedRequest />}
      </div>
    </div>
  );
}

export default QuoteRequests;
