import { MonitorCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import { Autoplay } from "swiper/modules";
import { data1, data2 } from "../constants/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col h-full lg:h-screen gap-10 justify-center items-center py-20 lg:py-28 bg-off-white">
      <div className="flex gap-3 items-center">
        <MonitorCheck size={52} className="text-primary" />
        <h1 className="text-3xl lg:text-5xl font-bold text-secondary">Skills</h1>
      </div>
      <div className="w-[80%] bg-secondary rounded-2xl py-4 px-5 shadow-lg shadow-secondary hover:shadow-xl hover:shadow-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 6,
            },
            700: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="max-w-[100%] lg:max-w-[100%]"
        >
          {data1.map((item) => (
            <SwiperSlide key={item.id} className="flex items-center justify-center">
              <div className="flex items-center my-5 w-fit">
                <div className="flex flex-col items-center bg-white rounded-xl shadow-xl px-8 py-6 gap-5 w-28 lg:w-40">
                  <img src={item.imgSrc} className="lg:h-24 lg:w-24 h-20 w-20" />
                  <h1 className="text-md lg:text-xl font-semibold text-secondary">
                    {item.label}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 6,
            },
            700: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
          className="max-w-[100%] lg:max-w-[100%]"
        >
          {data2.map((item) => (
            <SwiperSlide key={item.id} className="flex items-center justify-center">
              <div className="flex items-center my-5 w-fit">
                <div className="flex flex-col items-center bg-white rounded-xl shadow-xl px-8 py-6 gap-5 w-28 lg:w-40">
                  <img src={item.imgSrc} className="lg:h-24 lg:w-24 h-20 w-20" />
                  <h1 className="text-md lg:text-xl font-semibold text-secondary">
                    {item.label}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
