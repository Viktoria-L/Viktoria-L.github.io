

export const LatestProjectCard = () => {

    
  return (
    <div className="project w-full h-80 mr-8 overflow-hidden relative mb-10 box-shadow-33 sm:w-2/5 project-1 js-reveal-0">
    <img src="./assets/star-wars-trivia.jpg" alt="Project 1" className="bg-img absolute z-10 w-full h-full object-cover object-center" />
    <div className="action bg-white bg-opacity-10 rounded-sm backdrop-blur-sm absolute top-50 left-50 w-1/2 h-1/2 -translate-x-2/4 -translate-y-2/4 z-30 text-center text-my-100 flex flex-col justify-center">
        <span className="block text-xl font-semibold">Star Wars Trivia</span>
        <span className="block text-xs">Javascript 2 examinationsuppgift</span>
        <div className="default-btn flex mt-4 justify-center">
            <a href="https://viktoria-l.github.io/Javascript-2-assignment-Star-Wars/" target="_blank"><button className="bg-my-300 rounded-sm w-32 h-8 mr-2 text-my-100 no-underline text-base font-bold cursor-pointer tracking-widest outline-none transition-all border-2 border-transparent border-solid hover:border-my-100">Projekt<i className="fa-solid fa-up-right-from-square ml-1"></i></button></a>
            <a href="https://github.com/Viktoria-L/Javascript-2-assignment-Star-Wars" target="_blank"><button className="bg-my-300 rounded-sm h-8 text-my-100 no-underline text-base font-bold cursor-pointer tracking-widest outline-none transition-all border-2 border-transparent border-solid hover:border-my-100"><i className="fa-brands fa-github mx-1"></i></button></a>
        </div>     
    </div>
</div>
  )
}
