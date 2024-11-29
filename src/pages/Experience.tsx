import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div className=" box w-full pl-4 text-my-100">
        <span className="s-label text-my-300 text-xs tracking-[7px] mb-6 block js-reveal-0">
          - erfarenhet
        </span>

        <div className="default-title text-xl leading-7 font-semibold mb-8 text-my-200 text-shadow-33">
          <span className="block">Frontendutvecklare Nackademin 2022-2024</span>
          <span className="text-sm">
            <a
              href="https://nackademin.se/utbildningar/frontendutvecklare/"
              target="_blank"
            >
              Länk till utbildningen
            </a>
          </span>
          {/* <span className="block">Kurser:</span> */}
        </div>

        <Swiper
          slidesPerView={'auto'} // Ändra till "auto" eller ett specifikt antal om det behövs
          spaceBetween={20} // Mellanrum mellan slides
          speed={450}
          mousewheel={{ enabled: true, forceToAxis: true }}
          loop={false} // Om du vill att det ska loopa, ändra till true
          scrollbar={{ draggable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            enabled: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          modules={[Navigation, Mousewheel, Pagination, Scrollbar]}
          className="mySwiperEducation mt-12 mb-12 ml-2 lg:h-80"
        >
          {/* Slides */}
          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 md:w-[700px] w-[400px] lg:w-[1000px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon w-full flex justify-between items-center mb-7">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
                  <div className="date ml-5 text-my-200 text-base leading-5 lg:mb-0">
                    <span>
                      <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                      2023/2024
                    </span>
                  </div>
              </div>
              <div className="flex flex-col text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                  LIA (Praktik), 20v
                </span>
                <span className="location text-base text-my-700 leading-5 block mb-3">
                  Probisma AB
                </span>
                <span className="text-sm text-my-200 block mb-3">
                  Byggde en frontend-lösning för ett Consultant lifecycle
                  management-system från grunden. Systemet byggdes med
                  Typescript, React, Styled-components, Zod, REST-api. I
                  systemet skulle det finnas registering av kunder/leverantörer,
                  som skulle kunna logga in, registrera sina
                  företag/konsulter/uppdrag och sedan ska dessa kunna söka till
                  uppdrag med olika konsulter och följa gången från ansökan,
                  till urval, till intervju, till erbjudande om kontrakt,
                  kontraktgodkännande och hela vägen till att ett uppdrag blir
                  aktivt och pågående till att tidrapportera tid för konsulterna
                  och sedan att kunden ska kunna godkänna dessa tidrapporter.
                </span>
              </div>
             
              <div className='flex flex-wrap mb-7'>
                <span className="bg-my-500 flex justify-center items-center flex-nowrap mr-2 p-1 mb-1 text-sm font-bold text-my-200 rounded-md">
                  Typescript
                </span>
                <span className="bg-my-500 flex justify-center items-center flex-nowrap mr-2 p-1 mb-1 text-sm font-bold text-my-200 rounded-md">
                  React
                </span>
                <span className="bg-my-500 flex justify-center items-center flex-nowrap mr-2 p-1 mb-1 text-sm font-bold text-my-200 rounded-md">
                  Styled-components
                </span>
                <span className="bg-my-500 flex justify-center items-center flex-nowrap mr-2 p-1 mb-1 text-sm font-bold text-my-200 rounded-md">
                  Zod
                </span>
                <span className="bg-my-500 flex justify-center items-center flex-nowrap mr-2 p-1 mb-1 text-sm font-bold text-my-200 rounded-md">
                  Azure DevOps
                </span>
                <span className="bg-my-500 flex justify-center items-center flex-nowrap mr-2 p-1 mb-1 text-sm font-bold text-my-200 rounded-md">
                  REST-Api
                </span>
                <span className="bg-my-500 flex justify-center items-center flex-nowrap mr-2 p-1 mb-1 text-sm font-bold text-my-200 rounded-md">
                  Jira
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='w-full h-96'>

        </div>
      </div>
    </div>
  );
};

export default Experience;
