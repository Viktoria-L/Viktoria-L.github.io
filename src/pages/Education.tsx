// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import SwiperCore, { Navigation, Mousewheel } from 'swiper/modules';
// SwiperCore.use([Navigation, Mousewheel]);

const Education = () => {


  return (
      <div className="flex flex-col justify-center items-center pt-20">
      <div className="education box w-full pl-4 text-my-100" id="education">
      <div>Sidan är under uppdatering. Titta tillbaka snart igen</div>

    {/* //                 <span className="s-label text-my-300 text-xs tracking-[7px] mb-6 block js-reveal-0">- utbildning</span>
        
    //                 <div className="default-title text-xl leading-7 font-semibold mb-8 text-my-200 text-shadow-33">
    //                     <span className="block">Kurser:</span>
    //                     <span className="block">Programmering</span>
    //                 </div>
        
    //                 <Swiper 
    //                     slidesPerView="auto"
    //                     spaceBetween={30}
    //                     speed={450}
    //                     loop={false}
    //                     mousewheel={true}
    //                     navigation={{
    //                         nextEl: ".swiper-button-next",
    //                         prevEl: ".swiper-button-prev",
    //                     }}
    //                     className="mySwiperEducation mt-24 h-72 lg:h-80 overflow-hidden"
    //                     >
    //                 {/* <div className="vertical-carousel lg:relative">
    //                     <div className="swiper mt-24 h-72 lg:h-80 mySwiperEducation overflow-hidden">
    //                         <div className="swiper-wrapper flex mx-4 js-reveal-1"> 
                               
    //                      
    //                             <SwiperSlide className="sm:max-lg:w-fit">
    //                                 <div className="dot"></div>
    //                                 <div className="card bg-black bg-opacity-40 w-fit min-h-250 min-w-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
    //                                     <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
    //                                     <div className="text mb-7 lg:mb-0">
    //                                         <span className="course text-xl text-my-200 font-semibold mb-1">Javascript 1-4</span>
    //                                         <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
    //                                     </div>
    //                                     <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
    //                                         <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2022/2023</span>
    //                                     </div>
    //                                 </div>
    //                                 </SwiperSlide>
    //                        
    //                             <div className="swiper-slide sm:max-lg:w-fit">
    //                                 <div className="dot"></div>
    //                                 <div className="card bg-black bg-opacity-40 w-fit min-h-250 min-w-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
    //                                     <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
    //                                     <div className="text mb-7 lg:mb-0">
    //                                         <span className="course text-xl text-my-200 font-semibold mb-1">Javascript som backendspråk</span>
    //                                         <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
    //                                     </div>
    //                                     <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
    //                                         <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2023</span>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="swiper-slide sm:max-lg:w-fit">
    //                                 <div className="dot"></div>
    //                                 <div className="card bg-black bg-opacity-40 w-fit min-w-250 min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
    //                                     <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
    //                                     <div className="text mb-7 lg:mb-0">
    //                                         <span className="course text-xl text-my-200 font-semibold mb-1">Interaktion med CMS</span>
    //                                         <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
    //                                     </div>
    //                                     <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
    //                                         <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2023</span>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="swiper-slide sm:max-lg:w-fit">
    //                                 <div className="dot"></div>
    //                                 <div className="card bg-black bg-opacity-40 w-fit min-h-250 min-w-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
    //                                     <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
    //                                     <div className="text mb-7 lg:mb-0">
    //                                         <span className="course text-xl text-my-200 font-semibold mb-1">Frontend-projekt</span>
    //                                         <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
    //                                     </div>
    //                                     <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
    //                                         <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2023</span>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="swiper-slide sm:max-lg:w-fit">
    //                                 <div className="dot"></div>
    //                                 <div className="card bg-black bg-opacity-40 w-fit min-w-250 min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
    //                                     <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
    //                                     <div className="text mb-7 lg:mb-0">
    //                                         <span className="course text-xl text-my-200 font-semibold mb-1">Grafikverktyg</span>
    //                                         <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
    //                                     </div>
    //                                     <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
    //                                         <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2023</span>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="swiper-slide sm:max-lg:w-fit">
    //                                 <div className="dot"></div>
    //                                 <div className="card bg-black bg-opacity-40 w-fit min-h-250 min-w-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
    //                                     <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
    //                                     <div className="text mb-7 lg:mb-0">
    //                                         <span className="course text-xl text-my-200 font-semibold mb-1">HTML & CSS</span>
    //                                         <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
    //                                     </div>
    //                                     <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
    //                                         <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2022</span>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="swiper-slide sm:max-lg:w-fit">
    //                                 <div className="dot"></div>
    //                                 <div className="card bg-black bg-opacity-40 w-fit min-w-250 min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
    //                                     <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
    //                                     <div className="text mb-7 lg:mb-0">
    //                                         <span className="course text-xl text-my-200 font-semibold mb-1">Frontend, introduktion</span>
    //                                         <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
    //                                     </div>
    //                                     <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
    //                                         <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2022</span>
    //                                     </div>
    //                                 </div>
    //                             </div>
                                
    //                         {/* </div>
    //                         <div className="flex w-full flex-row-reverse justify-end mt-2 ml-4 gap-2">
    //                         <div className="swiper-button-next js-reveal-3 transform scale-75 top-80 text-my-900 hover:text-my-700" id="nextSwiperEdu"><i className="fa-solid fa-arrow-right-long text-3xl"></i></div>
    //                         <div className="swiper-button-prev transform scale-75 top-80 text-my-900 hover:text-my-700" id="prevSwiperEdu"><i className="fa-solid fa-arrow-left-long text-3xl"></i></div>
    //                         </div>
    //                     </div>
    //                 </div> 
    //                 </Swiper> */}
                </div>
                </div>
              
  )
}

export default Education