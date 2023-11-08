import { socialMedia } from "../../app/Data/data";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#191919] p-5 text-white font-display">
      <div className="container m-auto">
        <div className="flex gap-3 items-center">
          <div className="text-[25px]">تابعنا</div>
          <div className="flex gap-3 text-[30px]">
            {socialMedia.map((i, index) => (
              <div key={i.link}>
                <a target="_blank" href={i.link}>
                  <div>{i.img}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          جميع الحقوق محفوظة © محمصة الرفاعي {year}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
