
import { LatestProjectCard } from "./LatestProjectCard";

export const LatestsProjectsSection = () => {
  return (
    <section id="project-section">
    <div className="portfolio-section w-screen py-12 bg-my-400 sm:bg-my-900" id="portfolio">
        <div className="containerDiv max-w-screen-xl ps-4 pe-4 my-0 mx-auto relative">
            <div className="content w-full flex justify-between items-center flex-wrap mx-2">
                <div className="text w-full mb-10 sm:mr-0 mr-8 sm:w-4/12">
                    <span className="s-label text-my-300 text-xs tracking-[7px] mb-6 block js-reveal-0">- portfolio</span>
                    <div className="default-title text-xl leading-7 font-semibold mb-8 text-my-200 text-shadow-33">
                        <span>Mina senaste projekt</span>
                    </div>
                    <div className="default-text sm:mr-0 mr-2 text-lg leading-6 font-medium text-my-100">
                        <span className="font-montserrat">Här är de senaste projekten jag arbetat fram med länkar till koden och sidan för projektet. För fler projekt kolla in min portfolio (under utveckling!).
                        </span>
                        <button className="w-48 h-8 rounded-sm bg-my-300 my-2 text-my-100 no-underline text-lg font-bold cursor-pointer tracking-widest flex justify-center outline-none box-shadow-33 transition-all border-2 border-transparent border-solid hover:border-my-100"><a href="./portfolio.html">Portfolio</a></button>
                    </div>        
                </div>
                <LatestProjectCard />

                {/* <div className="project w-full h-80 mr-8 overflow-hidden relative mb-10 box-shadow-33 sm:w-2/5 project-1 js-reveal-0">
                        <img src="./assets/star-wars-trivia.jpg" alt="Project 1" className="bg-img absolute z-10 w-full h-full object-cover object-center" />
                        <div className="action bg-white bg-opacity-10 rounded-sm backdrop-blur-sm absolute top-50 left-50 w-1/2 h-1/2 -translate-x-2/4 -translate-y-2/4 z-30 text-center text-my-100 flex flex-col justify-center">
                            <span className="block text-xl font-semibold">Star Wars Trivia</span>
                            <span className="block text-xs">Javascript 2 examinationsuppgift</span>
                            <div className="default-btn flex mt-4 justify-center">
                                <a href="https://viktoria-l.github.io/Javascript-2-assignment-Star-Wars/" target="_blank"><button className="bg-my-300 rounded-sm w-32 h-8 mr-2 text-my-100 no-underline text-base font-bold cursor-pointer tracking-widest outline-none transition-all border-2 border-transparent border-solid hover:border-my-100">Projekt<i className="fa-solid fa-up-right-from-square ml-1"></i></button></a>
                                <a href="https://github.com/Viktoria-L/Javascript-2-assignment-Star-Wars" target="_blank"><button className="bg-my-300 rounded-sm h-8 text-my-100 no-underline text-base font-bold cursor-pointer tracking-widest outline-none transition-all border-2 border-transparent border-solid hover:border-my-100"><i className="fa-brands fa-github mx-1"></i></button></a>
                            </div>     
                        </div>
                </div> */}
            </div>

            <div className="content w-full flex justify-between items-center flex-wrap mx-2">

                <div className="project w-full h-80 overflow-hidden sm:mr-0 mr-8 mb-12 sm:mb-0 relative box-shadow-33 sm:w-2/5 project-1 js-reveal-0">
                        <img src="./assets/bookducks1.jpg" alt="Project 1" className="bg-img absolute z-10 w-full h-full object-cover object-center" />
                        <div className="action bg-black bg-opacity-20 rounded-sm backdrop-blur-sm absolute top-50 left-50 w-1/2 h-1/2 -translate-x-2/4 -translate-y-2/4 z-30 text-center text-my-100 flex flex-col justify-center">
                            <span className="block text-xl font-semibold text-my-100">Book Ducks bokaffär</span>
                            <span className="block text-xs text-my-100">Interaktion med Strapi CMS examinationsuppgift</span>
                            <div className="default-btn flex mt-4 justify-center">
                                <a href="https://github.com/Viktoria-L/book-ducks-assignment" target="_blank"><button className="bg-my-300 rounded-sm w-32 h-8 mr-2 text-my-100 no-underline text-base font-bold cursor-pointer tracking-widest outline-none transition-all border-2 border-transparent border-solid hover:border-my-100">Projekt<i className="fa-solid fa-up-right-from-square ml-1"></i></button>
                                <button className="bg-my-300 rounded-sm h-8 text-my-100 no-underline text-base font-bold cursor-pointer tracking-widest outline-none transition-all border-2 border-transparent border-solid hover:border-my-100"><i className="fa-brands fa-github mx-1"></i></button></a>
                            </div>     
                        </div>
                </div>
                
                <div className="project w-full h-80 mr-8 overflow-hidden relative box-shadow-33 sm:w-2/5 project-1 js-reveal-0">
                        <img src="./assets/art-of-plants1.jpg" alt="Project 1" className="bg-img absolute z-10 w-full h-full object-cover object-center" />
                        <div className="action bg-black bg-opacity-20 rounded-sm backdrop-blur-sm absolute top-50 left-50 w-1/2 h-1/2 -translate-x-2/4 -translate-y-2/4 z-30 text-center text-my-100 flex flex-col justify-center">
                            <span className="block text-xl font-semibold text-my-100">Art of Plants</span>
                            <span className="block text-xs text-my-100">HTML/CSS examinationsuppgift</span>
                            <div className="default-btn flex mt-4 justify-center">
                                <a href="https://viktoria-l.github.io/HTML-CSS-School-Assignment/" target="_blank"><button className="bg-my-300 rounded-sm w-32 h-8 mr-2 text-my-100 no-underline text-base font-bold cursor-pointer tracking-widest outline-none transition-all border-2 border-transparent border-solid hover:border-my-100">Projekt<i className="fa-solid fa-up-right-from-square ml-1"></i></button></a>
                                <a href="https://github.com/Viktoria-L/HTML-CSS-School-Assignment" target="_blank"><button className="bg-my-300 rounded-sm h-8 text-my-100 no-underline text-base font-bold cursor-pointer tracking-widest outline-none transition-all border-2 border-transparent border-solid hover:border-my-100"><i className="fa-brands fa-github mx-1"></i></button></a>
                            </div>     
                        </div>
                </div>
            </div>
            </div>
        </div>
</section>
  )
}
