import { Aboutme } from '../components/Aboutme';
import { Infobox } from '../components/Infobox';
import { LatestsProjectsSection } from '../components/LatestsProjectsSection';
//import { LatestsProjectsSection } from "../components/LatestsProjectsSection"
// import { QuickInfoBoxes } from "../components/QuickInfoBoxes"
import { Skills } from '../components/Skills';

const Home = () => {
  return (
    <>
      <section id="welcome-section" className="flex flex-col xl:justify-evenly">
        <Aboutme />

        <div className="bottom bg-my-400 pb-12 px-0">
          <div className="containerDiv max-w-screen-xl ps-4 pe-4 my-0 mx-auto relative flex justify-between items-center flex-wrap">
            <Infobox />

            <div className="skills sm:w-5/12 sm:mb-0 flex flex-col justify-between mx-2">
              <div className="default-title sm:mb-5 text-xl leading-7 font-semibold mb-8 text-my-200 text-shadow-33">
                <span>Mina kompetenser</span>
              </div>
              <Skills />
            </div>
          </div>

          {/* <div className="practice-section w-screen">               
                <QuickInfoBoxes />          
            </div> */}
        </div>
      </section>

      <LatestsProjectsSection />

      {/* 

    <section id="experience-education">
        <div className="experience-education-section bg-my-400 py-16 px-0">
            <div className="containerDiv flex justify-between items-center flex-wrap max-w-screen-xl ps-4 pe-4 my-0 mx-2 lg:mx-auto relative">
                {/* <div className="education box w-full" id="education">
                    <span className="s-label text-my-300 text-xs tracking-[7px] mb-6 block js-reveal-0">- utbildning</span>
        
                    <div className="default-title text-xl leading-7 font-semibold mb-8 text-my-200 text-shadow-33">
                        <span className="block">Kurser:</span>
                        <span className="block">Programmering</span>
                    </div>
        
                    <div className="vertical-carousel lg:relative">
                        <div className="swiper mt-24 h-72 lg:h-80 mySwiperEducation overflow-hidden">
                            <div className="swiper-wrapper flex mx-4 js-reveal-1">
                               
                                <div className="swiper-slide sm:max-lg:w-fit">
                                    <div className="dot"></div>
                                    <div className="card bg-black bg-opacity-40 w-fit min-h-250 min-w-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
                                        <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
                                        <div className="text mb-7 lg:mb-0">
                                            <span className="course text-xl text-my-200 font-semibold mb-1">Javascript 1-4</span>
                                            <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
                                        </div>
                                        <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                                            <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2022/2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide sm:max-lg:w-fit">
                                    <div className="dot"></div>
                                    <div className="card bg-black bg-opacity-40 w-fit min-h-250 min-w-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
                                        <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
                                        <div className="text mb-7 lg:mb-0">
                                            <span className="course text-xl text-my-200 font-semibold mb-1">Javascript som backendspråk</span>
                                            <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
                                        </div>
                                        <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                                            <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide sm:max-lg:w-fit">
                                    <div className="dot"></div>
                                    <div className="card bg-black bg-opacity-40 w-fit min-w-250 min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
                                        <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
                                        <div className="text mb-7 lg:mb-0">
                                            <span className="course text-xl text-my-200 font-semibold mb-1">Interaktion med CMS</span>
                                            <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
                                        </div>
                                        <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                                            <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide sm:max-lg:w-fit">
                                    <div className="dot"></div>
                                    <div className="card bg-black bg-opacity-40 w-fit min-h-250 min-w-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
                                        <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
                                        <div className="text mb-7 lg:mb-0">
                                            <span className="course text-xl text-my-200 font-semibold mb-1">Frontend-projekt</span>
                                            <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
                                        </div>
                                        <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                                            <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide sm:max-lg:w-fit">
                                    <div className="dot"></div>
                                    <div className="card bg-black bg-opacity-40 w-fit min-w-250 min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
                                        <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
                                        <div className="text mb-7 lg:mb-0">
                                            <span className="course text-xl text-my-200 font-semibold mb-1">Grafikverktyg</span>
                                            <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
                                        </div>
                                        <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                                            <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide sm:max-lg:w-fit">
                                    <div className="dot"></div>
                                    <div className="card bg-black bg-opacity-40 w-fit min-h-250 min-w-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
                                        <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
                                        <div className="text mb-7 lg:mb-0">
                                            <span className="course text-xl text-my-200 font-semibold mb-1">HTML & CSS</span>
                                            <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
                                        </div>
                                        <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                                            <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide sm:max-lg:w-fit">
                                    <div className="dot"></div>
                                    <div className="card bg-black bg-opacity-40 w-fit min-w-250 min-h-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
                                        <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-graduation-cap text-my-300 text-2xl mr-5"></i></div>
                                        <div className="text mb-7 lg:mb-0">
                                            <span className="course text-xl text-my-200 font-semibold mb-1">Frontend, introduktion</span>
                                            <span className="location text-base text-my-700 leading-5 block">Nackademin AB</span>
                                        </div>
                                        <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                                            <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>2022</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex w-full flex-row-reverse justify-end mt-2 ml-4 gap-2">
                            <div className="swiper-button-next js-reveal-3 transform scale-75 top-80 text-my-900 hover:text-my-700" id="nextSwiperEdu"><i className="fa-solid fa-arrow-right-long text-3xl"></i></div>
                            <div className="swiper-button-prev transform scale-75 top-80 text-my-900 hover:text-my-700" id="prevSwiperEdu"><i className="fa-solid fa-arrow-left-long text-3xl"></i></div>
                            </div>
                        </div>
                    </div>
                </div>  */}

      {/* <Education /> */}

      {/* <div className="experience box w-full text-end mt-16 lg:mt-0" id="experience">
                    <span className="s-label text-my-300 text-xs tracking-[7px] mb-6 block js-reveal-0">- erfarenhet</span>
                    <div className="default-title text-xl leading-7 font-semibold mb-8 text-my-200 text-shadow-33">
                        <span className="block">Erfarenhet och praktik:</span>
                        <span className="block">Utveckling</span>
                    </div>
                    <div className="vertical-carousel lg:relative">
                        <div className="swiper mt-24 h-72 lg:h-80 mySwiperExperience overflow-hidden">
                            <div className="swiper-wrapper mx-4 flex js-reveal-1">
                                <div className="swiper-slide sm:max-lg:w-fit">
                                    <div className="dot"></div>
                                    <div className="card ml-auto bg-black bg-opacity-40 w-fit min-h-250 min-w-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
                                        <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-briefcase  text-my-300 text-2xl mr-5"></i></div>
        
                                        <div className="text mb-7 lg:mb-0">
                                            <span className="course text-xl text-my-200 font-semibold mb-1">SÖKER</span>
                                            <span className="location text-base text-my-700 leading-5 block">LIA-praktik</span>
                                        </div>
                                        <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                                            <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>Start v.47</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide sm:max-lg:w-fit">
                                    <div className="dot"></div>
                                    <div className="card ml-auto mr-10 bg-black bg-opacity-40 w-fit min-h-250 min-w-250 rounded-md text-left box-shadow-33 py-4 px-6 flex flex-col justify-between items-start">
                                        <div className="icon mb-7 lg:mb-0"><i className="fa-solid fa-briefcase  text-my-300 text-2xl mr-5"></i></div>
        
                                        <div className="text mb-7 lg:mb-0">
                                            <span className="course text-xl text-my-200 font-semibold mb-1">CV</span>
                                            <span className="location text-base text-my-700 leading-5 block"><a href="./assets/cv.pdf">Länk</a></span>
                                        </div>
                                        <div className="date ml-5 text-my-200 text-base leading-5 mb-7 lg:mb-0">
                                            <span><i className="fa-solid fa-calendar-days mr-2 text-my-300"></i>Tidigare erfarenhet</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="swiper-button-next js-reveal-3 transform scale-75 top-80 text-my-700 lg:scale-100 lg:top-unset lg:opacity-50 lg:-bottom-2 lg:left-1/3 lg:right-36 lg:rotate-90" id="nextSwiperExp"></div>
                            <div className="swiper-button-prev lg:hidden transform scale-75 top-80 text-my-700 lg:scale-100 lg:top-unset lg:opacity-50" id="prevSwiperExp"></div>
                        </div>
                    </div>
                </div> */}

      {/* </div>
        </div>
    </section> */}

      {/* */}
    </>
  );
};

export default Home;
