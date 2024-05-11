import { Button } from "@nextui-org/react";
const SubTexts = () => {
  return (
    <div className="flex md:items-center md:px-64 px-10 mt-10 flex-col md:flex-row gap-5 text-sm md:text-lg">
      <div className="">
        <p className="text-balance">
          I&apos;m <b>Muhammed Sahal K C</b>, a final year BTech student
          majoring in Computer Science and Engineering at MES College of
          Engineering, Kuttippuram. 🎓
        </p>
      </div>
      <div className="">
        <p className="text-balance">
          🔭 I&apos;m passionate about coding and problem-solving, constantly
          exploring new technologies and honing my skills to become a proficient{" "}
          <b>software developer.</b>
        </p>
      </div>
      <div className="">
        <Button className="bg-transparent border-1 text-[#eee5e0] rounded-none">Get in Touch</Button>
      </div>
    </div>
  );
};

export default SubTexts;
