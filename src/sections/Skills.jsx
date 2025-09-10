import { MonitorCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import { data1, data2 } from "../constants/skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col h-full lg:h-screen gap-8 justify-center items-center lg:py-8 bg-off-white px-2"
    >
      {/* Heading */}
      <div className="flex gap-2 items-center">
        <MonitorCheck size={28} className="text-primary" />
        <h1 className="text-lg lg:text-2xl font-bold text-secondary">Skills</h1>
      </div>

      {/* Skills Container */}
      <div className="w-full lg:w-[75%] bg-white rounded-xl py-6 px-3 shadow-md hover:shadow-lg transition-all duration-300">
        {/* First Row */}
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            480: { slidesPerView: 3, spaceBetween: 12 },
            768: { slidesPerView: 4, spaceBetween: 16 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {data1.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-center bg-off-white rounded-lg shadow-sm hover:shadow-md px-3 py-3 gap-2 w-20 lg:w-28 transition hover:-translate-y-1">
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="h-10 w-10 lg:h-16 lg:w-16 object-contain"
                />
                <h1 className="text-[10px] lg:text-sm font-semibold text-secondary text-center">
                  {item.label}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Row (Reverse) */}
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            480: { slidesPerView: 3, spaceBetween: 12 },
            768: { slidesPerView: 4, spaceBetween: 16 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
        >
          {data2.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-center bg-off-white rounded-lg shadow-sm hover:shadow-md px-3 py-3 gap-2 w-20 lg:w-28 transition hover:-translate-y-1">
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="h-10 w-10 lg:h-16 lg:w-16 object-contain"
                />
                <h1 className="text-[10px] lg:text-sm font-semibold text-secondary text-center">
                  {item.label}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
