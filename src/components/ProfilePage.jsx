import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-white text-[13px] min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#1A1A1A] w-full max-w-md mx-auto">
      {/* Top Navigation */}
      <div className="flex w-full px-4 py-3 items-center max-w-[375px]">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#262626] rounded-lg"
        >
          <img src="arrow-left.svg" alt="Back" />
        </button>
        <div className="flex justify-center items-center gap-2 w-full">
          <p className="text-white leading-7">Profil</p>
        </div>
      </div>

      {/* Profile Title */}
      <div className="text-center text-white text-[22px] font-medium leading-7">
        Profilini Düzenle 👤
      </div>

      {/* Profile Image */}
      <div className="relative mt-5">
        <img src="avatar.svg" alt="Avatar" className="w-24 h-24 rounded-full" />
        <button className="absolute bottom-1 right-1 bg-white p-1 rounded-full">
          <img src="camera.svg" alt="Camera Icon" className="w-5 h-5" />
        </button>
      </div>

      {/* Input Fields */}
      <div className="w-[90%] max-w-[340px] flex flex-col gap-4 mt-6">
        <div className="flex items-center bg-[#262626] rounded-lg p-4">
          <img src="user.svg" alt="User Icon" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Ad Soyad"
            className="ml-3 bg-transparent text-white w-full focus:outline-none"
          />
        </div>
        <div className="flex items-center bg-[#262626] rounded-lg p-4">
          <img src="call.svg" alt="Phone Icon" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Telefon Numarası"
            className="ml-3 bg-transparent text-white w-full focus:outline-none"
          />
        </div>
        <div className="flex items-center bg-[#262626] rounded-lg p-4">
          <img src="email.svg" alt="Email Icon" className="w-5 h-5" />
          <input
            type="email"
            placeholder="Email"
            className="ml-3 bg-transparent text-white w-full focus:outline-none"
          />
        </div>
      </div>

      {/* Update Button */}
      <button className="w-[90%] max-w-[340px] bg-[#9A88FF] text-black py-3 rounded-lg text-center font-medium mt-auto mb-5">
        Güncelle
      </button>
    </div>
  );
};

export default ProfilePage;
