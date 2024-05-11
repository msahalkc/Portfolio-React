import { Card, CardBody, CardFooter } from "@nextui-org/react";

const About = () => {
  return (
    <div id="About" className="md:min-h-screen p-10 md:px-48 pt-28">
      <div className="text-6xl Bebas">ABOUT ME</div>
      <div className="flex justify-between mt-10 gap-10 flex-col md:flex-row">
        <Card shadow='none' className="border-1 border-[#eee5e0] p-3 rounded-none bg-transparent text-[#eee5e0]">
          <CardBody>
            <h5 className="Bebas text-3xl bg-[#f3d306] !text-[#0a0a0a] w-fit px-2 font-[Kanit]">
              Front End Development
            </h5>
          </CardBody>
          <CardFooter>
            <p className="text-justify">
              In Front End Development, I specialize in creating engaging and
              responsive web interfaces using{" "}
              <span className="italic bg-[#f3d306] text-black w-fit font-[Kanit]">
                React, HTML, CSS, JavaScript, and Bootstrap
              </span>
              . With these technologies, I ensure that websites are not only
              visually appealing but also functional and user-friendly,
              enhancing the overall user experience.
            </p>
          </CardFooter>
        </Card>
        <Card shadow='none' className="border-1 border-[#eee5e0] p-3 rounded-none bg-transparent text-[#eee5e0]">
          <CardBody>
            <h5 className="Bebas text-3xl bg-[#ec3d64] !text-[#eee5e0] w-fit px-2">
              UI/UX Design
            </h5>
          </CardBody>
          <CardFooter>
            <p className="text-justify">
              My expertise in UI/UX Design revolves around crafting intuitive
              user experiences and visually appealing designs. I proficiently
              use{" "}
              <span className="italic bg-[#ec3d64] text-[#eee5e0] w-fit font-[Kanit]">
                Figma and Adobe XD
              </span>{" "}
              to translate ideas into prototypes and wireframes, refining user
              flows and visual aesthetics to create seamless and captivating
              designs.
            </p>
          </CardFooter>
        </Card>
        <Card shadow='none' className="border-1 border-[#eee5e0] p-3 rounded-none bg-transparent text-[#eee5e0]">
          <CardBody>
            <h5 className="Bebas text-3xl bg-[#a4db73] !text-[#0a0a0a] w-fit px-2">
              Graphic Designing
            </h5>
          </CardBody>
          <CardFooter>
            <p className="text-justify">
              In Graphic Design, I leverage{" "}
              <span className="italic bg-[#a4db73] text-black w-fit font-[Kanit]">
                Adobe Illustrator, Photoshop, InDesign, and Canva
              </span>{" "}
              to create impactful visuals for both digital and print media.
              Whether it&apos;s designing vector graphics, manipulating images,
              or laying out print materials, I bring creativity and technical
              proficiency to deliver polished and professional results that
              resonate with audiences.
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-10 border-1 border-[#eee5e0] p-5">
        <h5 className="Bebas text-3xl bg-[#ec3d64] text-[#eee5e0] w-fit px-2">
          Graphic Design Portfolio
        </h5>
        <div className="flex justify-between mt-5 flex-col md:flex-row gap-10">
          <iframe
            src="https://www.behance.net/embed/project/164402949?ilo0=1"
            allowFullScreen
            loading="lazy"
            allow="clipboard-write"
            className="md:w-[30%] h-[300px] overflow-hidden"
            height={'300px'}
          ></iframe>
          <iframe
            src="https://www.behance.net/embed/project/164400157?ilo0=1"
            allowFullScreen
            loading="lazy"
            allow="clipboard-write"
            className="md:w-[30%] h-[300px] overflow-hidden"
            height={'300px'}
          ></iframe>
          <iframe
            src="https://www.behance.net/embed/project/164402641?ilo0=1"
            allowFullScreen
            loading="lazy"
            allow="clipboard-write"
            className="md:w-[30%] h-[300px] overflow-hidden"
            height={'300px'}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
