import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("yearly"); // Default selected plan

  return (
    <div className="flex flex-col items-center text-white text-[13px] min-h-screen bg-gradient-to-b from-[#A099FF] to-[#161616] w-full max-w-md mx-auto">
      {/* Top Navigation */}
      <div className="flex w-full px-4 py-3 items-center max-w-[375px]">
        <button onClick={() => navigate(-1)}>
          <img src="arrow-left.svg" alt="Back" />
        </button>
        <div className="flex justify-center items-center gap-2 w-full">
          <p className="text-black text-[22px] font-medium leading-7">
            MusicAI
          </p>

          <div className="bg-black text-white text-[11px] h-5 w-9 rounded-xl ml-2 items-center justify-center flex">
            <p> PRO </p>
          </div>
        </div>
      </div>

      {/* Title and Subtitle */}
      <p className="text-center text-black text-[15px] font-medium leading-tight mt-2">
        MusicAI Uygulamasının tadını çıkar!
      </p>

      {/* Subscription Options */}
      <div className="bg-[#5C4A99] mt-5 p-4 rounded-xl w-[90%] max-w-[340px]">
        <div className="flex flex-col divide-y divide-[#ffffff33]">
          <div className="flex items-center pb-2">
            <input
              type="radio"
              name="subscription"
              value="monthly"
              checked={selectedPlan === "monthly"}
              onChange={() => setSelectedPlan("monthly")}
              className="mr-2"
            />
            <div className="w-full">
              <p>Aylık</p>
              <p className="text-gray-300">₺3.99 / aylık</p>
            </div>
          </div>

          <div className="flex items-center pt-2">
            <input
              type="radio"
              name="subscription"
              value="yearly"
              checked={selectedPlan === "yearly"}
              onChange={() => setSelectedPlan("yearly")}
              className="mr-2"
            />
            <div className="w-full">
              <p>Yıllık</p>
              <p className="text-gray-300">₺19.99 / yıllık</p>
            </div>
            <p className="w-21 h-7 justify-center items-center flex bg-white text-black text-[10px] rounded-md ml-auto px-2 py-1">
              <div className="text-black text-xs font-medium leading-none">
                AVANTAJLI
              </div>
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <p className="text-[12px] text-gray-400 mt-5">İÇİNDEKİLER</p>
      <div className="w-[90%] max-w-[340px] flex flex-col gap-4.5 mt-3">
        {Array(6)
          .fill("Lorem ipsum dolor sit amet")
          .map((text, index) => (
            <div key={index} className="flex items-center gap-[17px]">
              <img src="share.svg" alt="Feature" />
              <p>{text}</p>
            </div>
          ))}
      </div>

      {/* Upgrade Button */}
      <button className="flex items-center justify-center gap-2 w-[90%] max-w-[340px] mt-auto bg-[#9A88FF] text-black py-3 rounded-lg">
        <img src="fi_66834.svg" alt="Gift Icon" />
        <span>Hemen Yükselt</span>
      </button>

      {/* Footer */}
      <div className="text-center text-[#b0b0b0] text-xs font-normal leading-none w-[90%] max-w-[340px] my-3">
        3 gün ücretsiz dene, sonra ₺19.99 / yıllık. İstediğin zaman iptal et.
      </div>
    </div>
  );
};

export default SubscriptionPage;
