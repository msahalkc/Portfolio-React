import MainText from "./MainText";
import SubTexts from "./SubTexts";

const Landing = () => {
  return (
    <div className="flex flex-col gap-8 p-10 sm:px-48 pt-28">
      <MainText />
      <SubTexts />
    </div>
  );
};

export default Landing;
