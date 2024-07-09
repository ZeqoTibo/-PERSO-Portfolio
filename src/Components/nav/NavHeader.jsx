import { memojiCheck } from "../../assets/index";

const NavHeader = ({handleClick}) => {
  return (
    <div className="w-full h-[200px] flex flex-col items-center justify-end gap-4 p-4 bg-primary-600">
      <a href="#hero" onClick={handleClick} className="flex flex-col">
      <img
        className="cursor-pointer bounce object-cover w-[100px] h-[100px]"
        src={memojiCheck}
       alt="Memoji Ceck"/>
      <span
        style={{ fontFamily: "Vermin Vibes, sans-serif" }}
        className="text-3xl text-grayscale-50"
      >
        Thibault
      </span>
      </a>
      <span className="text-sm text-grayscale-300">Développeur Web FullStack</span>
    </div>
  );
};

export default NavHeader;
