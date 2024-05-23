import MainText from "./MainText";
import SubTexts from "./SubTexts";
import RoundedRectangle from "./RoundedRectangle";

const Landing = () => {
  return (
    <div className="flex flex-col md:min-h-[85vh] items-center">
      <MainText />
      <SubTexts />
      <RoundedRectangle />
    </div>
  );
};

export default Landing;
