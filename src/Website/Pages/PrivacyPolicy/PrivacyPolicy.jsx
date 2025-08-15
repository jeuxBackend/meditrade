import React from "react";
import { useNavigate } from "react-router-dom";
import closeicon from "./Assets/closeicon.png";

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-7 min-h-screen py-4 mt-4">
      {/* Back button */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={closeicon} alt="" className="h-8 md:h-9" />
        <p className="text-xl md:text-2xl font-semibold text-[#333333]">
          Privacy Policy
        </p>
      </div>

      <div className="text-center mt-4">
        <div className="">
          {/* Left Content */}
          <p className="text-justify text-[#767980]">
            Lorem ipsum dolor sit amet consectetur. Auctor pellentesque a arcu
            suspendisse libero at ultricies. Aliquam non porttitor viverra nibh.
            Dui pulvinar sed pretium ipsum id sit phasellus aliquet. Ipsum velit
            sagittis id egestas nulla imperdiet quisque sit. Nullam aenean id ut
            porta imperdiet quis congue et. Dictumst imperdiet in urna aliquam
            sed vel nisl mattis. Lorem ipsum dolor sit amet consectetur. Auctor
            pellentesque a arcu suspendisse libero at ultricies. Aliquam non
            porttitor viverra nibh. Dui pulvinar sed pretium ipsum id sit
            phasellus aliquet. Ipsum velit sagittis id egestas nulla imperdiet
            quisque sit. Nullam aenean id ut porta imperdiet quis congue et.
            Dictumst imperdiet in urna aliquam sed vel nisl mattis. Aenean
            fermentum vitae et arcu. Ac pellentesque duis orci urna morbi etiam.
            Pharetra sit a ac id. Ut volutpat cras at tortor. Risus nec
            habitasse tincidunt urna. Dui ac quisque convallis dolor adipiscing
            ante fames. Risus bibendum consectetur velit orci. Amet arcu gravida
            ultricies arcu. Maecenas lectus fringilla consequat et nibh aliquam
            bibendum. Massa facilisis mi vulputate dui. Lorem ipsum dolor sit
            amet consectetur. Auctor pellentesque a arcu suspendisse libero at
            ultricies. Aliquam non porttitor viverra nibh. Dui pulvinar sed
            pretium ipsum id sit phasellus aliquet. Ipsum velit sagittis id
            egestas nulla imperdiet quisque sit. Nullam aenean id ut porta
            imperdiet quis congue et. Dictumst imperdiet in urna aliquam sed vel
            nisl mattis. Lorem ipsum dolor sit amet consectetur. Auctor
            pellentesque a arcu suspendisse libero at ultricies
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
