import LaBelle from "../assets/labelle website.png";
import Kart from "../assets/shopping kart website.png";
import Todo from "../assets/todo website.png";
import { Button, Card, Image, CardBody, CardFooter } from "@nextui-org/react";

const Works = () => {
  return (
    <div className="md:min-h-screen p-10 md:px-48 pt-28" id="Works">
      <div className="text-6xl Bebas">My Works</div>
      <div className="flex justify-between mt-10 gap-10 flex-col md:flex-row">
        <Card shadow='none' className="p-3 border-1 border-[#eee5e0] rounded-none bg-transparent text-[#eee5e0]">
          <CardBody>
            <Image src={LaBelle} className="w-fit" radius="none" alt="" />
            <h4 className="md:text-2xl mt-5">
              <b>LaBelle &apos;23 Website</b>
            </h4>
          </CardBody>
          <CardFooter>
            <div className="flex flex-col gap-1">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae accusantium fugiat esse ratione qui totam
                consequatur voluptas, voluptatum eaque facilis soluta itaque
                ullam quae voluptatibus.
              </p>
              <div className='flex gap-4'>
                <Button className="bg-transparent border-1 text-[#eee5e0] rounded-none w-fit">
                  <a href="https://msahalkc.github.io/LaBelle/" className="">
                    View Website
                  </a>
                </Button>
                <Button className="bg-transparent border-1 text-[#eee5e0] rounded-none w-fit">
                  <a href="https://github.com/msahalkc/LaBelle" className="">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "#eee5e0" }}
                    ></i>
                  </a>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card shadow='none' className="p-3 border-1 border-[#eee5e0] rounded-none bg-transparent text-[#eee5e0]">
          <CardBody>
            <Image src={Todo} className="w-fit" radius="none" alt="" />
            <h4 className="md:text-2xl mt-5">
              <b>Todo Application using React</b>
            </h4>
          </CardBody>
          <CardFooter>
            <div className="flex flex-col gap-1">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae accusantium fugiat esse ratione qui totam
                consequatur voluptas, voluptatum eaque facilis soluta itaque
                ullam quae voluptatibus.
              </p>
              <div className='flex gap-4'>
                <Button className="bg-transparent border-1 text-[#eee5e0] rounded-none w-fit">
                  <a href="https://todo-react-kc.netlify.app/" className="">
                    View Website
                  </a>
                </Button>
                <Button className="bg-transparent border-1 text-[#eee5e0] rounded-none w-fit">
                  <a href="https://github.com/msahalkc/todo-react" className="">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "#eee5e0" }}
                    ></i>
                  </a>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card shadow='none' className="p-3 border-1 border-[#eee5e0] rounded-none bg-transparent text-[#eee5e0]">
          <CardBody>
            <Image src={Kart} className="w-fit" radius="none" alt="" />
            <h4 className="md:text-2xl mt-5">
              <b>E-Commerce Website</b>
            </h4>
          </CardBody>
          <CardFooter>
            <div className="flex flex-col gap-1">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae accusantium fugiat esse ratione qui totam
                consequatur voluptas, voluptatum eaque facilis soluta itaque
                ullam quae voluptatibus.
              </p>
              <div className='flex gap-4'>
                <Button className="bg-transparent border-1 text-[#eee5e0] rounded-none w-fit">
                  <a href="" className="">
                    View Website
                  </a>
                </Button>
                <Button className="bg-transparent border-1 text-[#eee5e0] rounded-none w-fit">
                  <a
                    href="https://github.com/msahalkc/E-Commerce-website-using-express-and-node.js"
                    className=""
                  >
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "#eee5e0" }}
                    ></i>
                  </a>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Works;
