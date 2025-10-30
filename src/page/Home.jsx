import Banner from "@/components/Banner";
import { MonitorUp, MonitorUpIcon, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [
    "https://t3.ftcdn.net/jpg/03/79/67/68/360_F_379676853_rhWrntGYANN5SdPtakjqmBePck49G5dy.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtK6FZxIXsjL33arAPJaxcJEYguCpDj2P5g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75z83XmQxMoSkVlSdADxGZjd3Cy6_gRinWw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOjmcMM_qx8-CB4UtsY2ZwqxdveGG-ovbZQ&s",
  ];

  return (
    <div>
      <section>
        <Banner images={images} />
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center pt-6 pb-[30px]">
          <div className="lg:pt-18 text-center">
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
          <Link to="/Products#system-products">
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
          </Link>

          <Link to="/Products#web-products">
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
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
