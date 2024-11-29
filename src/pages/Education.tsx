import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// SwiperCore.use([Navigation, Mousewheel]);

const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div className="education box w-full pl-4 text-my-100" id="education">
        {/* <div>Sidan är under uppdatering. Titta tillbaka snart igen</div> */}

        <span className="s-label text-my-300 text-xs tracking-[7px] mb-6 block js-reveal-0">
          - utbildning
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
          scrollbar={{draggable: true}}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ enabled:true, el: '.swiper-pagination',
            type: 'bullets'}}
          modules={[Navigation, Mousewheel, Pagination, Scrollbar]}
          className="mySwiperEducation mt-12 mb-12 h-72 lg:h-80"
        >
          
          {/* Slides */}
          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                  Javascript 1-4
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Nackademin AB
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2022/2023
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                  Javascript som backendspråk
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Nackademin AB
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2023
                </span>
              </div>
            </div>
          </SwiperSlide>
          {/* Lägg till fler slides här */}
          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                  Interaktion med CMS (Strapi)
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Nackademin AB
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2023
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                  Examensarbete Frontend
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Nackademin AB
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2024
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                  Frontend-projekt, agilt arbete
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Nackademin AB
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2023
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                  Grafikverktyg
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Nackademin AB
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2023
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                  HTML & CSS
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Nackademin AB
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2022
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                  Frontend, introduktion
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Nackademin AB
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2022
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="default-title text-xl leading-7 font-semibold mb-8 text-my-200 text-shadow-33">
          <span className="block">Övriga kurser</span>
          {/* <span className="text-sm"><a href='https://nackademin.se/utbildningar/frontendutvecklare/' target='_blank'>Länk till utbildningen</a></span> */}
          {/* <span className="block">Kurser:</span> */}
        </div>

        <Swiper
          slidesPerView={'auto'} // Ändra till "auto" eller ett specifikt antal om det behövs
          spaceBetween={20} // Mellanrum mellan slides
          speed={450}
          mousewheel={{ enabled: true, forceToAxis: true }}
          loop={false} // Om du vill att det ska loopa, ändra till true
          scrollbar={{draggable:true}}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation, Mousewheel, Scrollbar]}
          className="mySwiperEducation mt-12 mb-12 h-72 lg:h-80"
        >
          {/* Slides */}
          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                 Programmering med C# 40 YHP
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Nackademin AB
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2024
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                 Databasteknik (Sql) 25 YHP
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Nackademin
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2024
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                 Web Design UI/UX
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Udemy
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  LÄNK TILL CERTIFIKAT
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2024
                </span>
              </div>
            </div>
          </SwiperSlide> */}

          <SwiperSlide className="flex justify-center w-fit">
            <div className="card bg-black bg-opacity-40 w-[250px] min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
              <div className="icon mb-7 lg:mb-0">
                <i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i>
              </div>
              <div className="text mb-7 lg:mb-0">
                <span className="course text-xl text-my-200 font-semibold mb-1">
                 Programmering 1 C#
                </span>
                <span className="location text-base text-my-700 leading-5 block">
                  Komvux
                </span>
              </div>
              <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                <span>
                  <i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>
                  2022
                </span>
              </div>
            </div>
          </SwiperSlide>



        </Swiper>
      </div>
    </div>
  );
};

export default Education;
