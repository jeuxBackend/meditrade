import React from "react";
import { useNavigate } from "react-router-dom";
import closeicon from "./Assets/closeicon.png";
import aboutus from "./Assets/aboutus.jpg";
import aboutuslogo from "./Assets/aboutuslogo.png";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-7 py-4 mt-4">
      {/* Back button */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={closeicon} alt="" className="h-8 md:h-9" />
        <p className="text-xl md:text-2xl font-semibold text-[#333333]">
          About Us
        </p>
      </div>

      <div className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-4 gap-y-2 mt-5 items-start">
          {/* Left Content */}
          <div className="col-span-2">
            <p className="text-justify text-[#767980]">
              Lorem ipsum dolor sit amet consectetur. Auctor pellentesque a arcu
              suspendisse libero at ultricies. Aliquam non porttitor viverra
              nibh. Dui pulvinar sed pretium ipsum id sit phasellus aliquet.
              Ipsum velit sagittis id egestas nulla imperdiet quisque sit.
              Nullam aenean id ut porta imperdiet quis congue et. Dictumst
              imperdiet in urna aliquam sed vel nisl mattis. Lorem ipsum dolor
              sit amet consectetur. Auctor pellentesque a arcu suspendisse
              libero at ultricies. Aliquam non porttitor viverra nibh. Dui
              pulvinar sed pretium ipsum id sit phasellus aliquet. Ipsum velit
              sagittis id egestas nulla imperdiet quisque sit. Nullam aenean id
              ut porta imperdiet quis congue et. Dictumst imperdiet in urna
              aliquam sed vel nisl mattis. Aenean fermentum vitae et arcu. Ac
              pellentesque duis orci urna morbi etiam. Pharetra sit a ac id. Ut
              volutpat cras at tortor. Risus nec habitasse tincidunt urna. Dui
              ac quisque convallis dolor adipiscing ante fames. Risus bibendum
              consectetur velit orci. Amet arcu gravida ultricies arcu. Maecenas
              lectus fringilla consequat et nibh aliquam bibendum. Massa
              facilisis mi vulputate dui. Lorem ipsum dolor sit amet
              consectetur. Auctor pellentesque a arcu suspendisse libero at
              ultricies. Aliquam non porttitor viverra nibh. Dui pulvinar sed
              pretium ipsum id sit phasellus aliquet. Ipsum velit sagittis id
              egestas nulla imperdiet quisque sit. Nullam aenean id ut porta
              imperdiet quis congue et. Dictumst imperdiet in urna aliquam sed
              vel nisl mattis. Lorem ipsum dolor sit amet consectetur. Auctor
              pellentesque a arcu suspendisse libero at ultricies
            </p>
          </div>

          <div className="relative  rounded-2xl col-span-1 overflow-hidden">
            <img
              src={aboutus}
              alt="FAQ Illustration"
              className="rounded-xl w-full mx-auto h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/25"></div>

            <img
              src={aboutuslogo}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 md:h-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
