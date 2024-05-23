import MainText from "./MainText";
import SubTexts from "./SubTexts";
import RoundedRectangle from "./RoundedRectangle";

const Landing = () => {
  return (
    <div className="flex flex-col sm:min-h-[85vh] items-center gap-0">
      <MainText />
      <SubTexts />
      <RoundedRectangle />
    </div>
  );
};

export default Landing;
