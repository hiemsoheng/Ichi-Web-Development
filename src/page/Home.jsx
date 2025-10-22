import Banner from "@/components/Banner";
import { MonitorUp, MonitorUpIcon, Settings } from "lucide-react";

const Home = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPtQS4-c9nU5mcu2w6f3VQG0gssWoF-Frdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXweu8iPySOJzsQYM89MJNY3kCC7ZZmtu88A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_PbAeLDLwhoJW1HcMBOkrNjxSSEKZ2sXKA&s",
    "IWD.png",
  ];

  return (
    <div>
      <section>
        <Banner images={images} />
      </section>

      <section>
        <div className="flex justify-evenly items-center pt-6 pb-[30px]">
          <div>
            <h1 className="text-4xl font-bold grid space-y-8">
              System Service
            </h1>
            <h1 className="text-4xl font-bold grid space-y-8">& Web Service</h1>
            <div className="text-2xl grid space-y-2 pt-4">
              <p>We provide reliable scalable</p>
              <p>system and web services for your</p>
              <p>business</p>
            </div>
          </div>
          <div>
            <img src="Home.png" alt="Home_iamge" className="grid w-100 h-100" />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-evenly max-w-7xl mx-auto space-x-6 pt-[30px] text-1xl pb-5 ">
          <div className="grid justify-items-center text-center space-y-2">
            <Settings
              size={2}
              className="bg-blue-800 w-10 h-10 rounded-full p-1 text-white"
            />
            <h1 className="text-2xl font-bold ">System Service</h1>
            <p>We offer robust system services</p>
            <p>including development, mai-</p>
            <p>tennance, and support.</p>
          </div>

          <div className="grid justify-items-center text-center space-y-2">
            <MonitorUpIcon
              size={2}
              className="bg-blue-800 w-10 h-10 rounded-full p-1 text-white"
            />
            <h1 className="text-2xl font-bold">Web Service</h1>
            <p>Our web services are designd</p>
            <p>to ensure seamless integration</p>
            <p>and performance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
