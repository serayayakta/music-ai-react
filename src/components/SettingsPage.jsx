import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 mt-[17px] text-white text-[13px] mx-6">
      <p className="text-center">Ayarlar</p>

      <div
        className="flex items-center  p-4 bg-[#262626] rounded-lg"
        onClick={() => navigate("/profile")}
      >
        <img src="avatar.svg" alt="Avatar" className="w-10 h-10 rounded-full" />
        <p className="ml-[10px]">Lorem Ipsum</p>
        <img src="arrow.svg" alt="Arrow" className="ml-auto" />
      </div>

      <div className="flex flex-col items-center gap-4  p-4 bg-[#262626] rounded-lg">
        <div
          className="w-full flex items-center"
          onClick={() => navigate("/subscriptions")}
        >
          <p>Abonelikler</p>

          <img src="arrow.svg" alt="Arrow" className="ml-auto" />
        </div>

        <div className="w-full flex items-center">
          <p>Kayıtlı Kartlarım</p>
          <img src="arrow.svg" alt="Arrow" className="ml-auto" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-4 bg-[#262626] rounded-lg">
        <div className="w-full flex items-center">
          <p>Bildirimler</p>
          <p className="ml-auto">Toggle</p>
        </div>

        <div className="w-full flex items-center">
          <p>Dil</p>
          <p className="ml-auto text-[12px]"> English</p>
          <img src="arrow.svg" alt="Arrow" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4  p-4 bg-[#262626] rounded-lg">
        <div className="w-full flex items-center">
          <p>Destek</p>
          <img src="arrow.svg" alt="Arrow" className="ml-auto" />
        </div>

        <div className="w-full flex items-center">
          <p>Gizlilik Politikası</p>
          <img src="arrow.svg" alt="Arrow" className="ml-auto" />
        </div>

        <div className="w-full flex items-center">
          <p>Bizi Değerlendirin</p>
          <img src="arrow.svg" alt="Arrow" className="ml-auto" />
        </div>
      </div>

      <div className="flex items-center text-[#FF9999] p-4 bg-[#262626] rounded-lg">
        <div className="w-full flex items-center">
          <p>Çıkış Yap</p>
          {/* todo: change the icon color */}
          <img src="arrow.svg" alt="Arrow" className="ml-auto text-[#FD6C6C]" />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
