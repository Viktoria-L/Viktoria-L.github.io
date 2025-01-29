import { Link } from 'react-router-dom';
import image from '../assets/image0.png';

export const Aboutme = () => {
  return (
    <div className="upside w-full h-auto py-7 px-0 sm:pb-0 sm:pt-20 bg-my-400">
      <div className="containerDiv max-w-screen-xl ps-4 pe-4 my-0 mx-auto relative flex justify-between flex-wrap">
        <div className="name_photo relative w-full h-96 mb-12 sm:w-2/5 sm:pb-0 flex flex-column justify-center items-center flex-nowrap ">
          <div className="name absolute z-10 pt-32 text-shadow-33">
            <span className="js-reveal-0 text-4xl sm:text-5xl text-my-200 block ml-2 sm:max-lg:ml-24">
              Viktoria
            </span>
            <span className="js-reveal-1 text-5xl sm:text-7xl text-my-300 block ml-7 sm:max-lg:ml-24 tracking-widest">
              Lindberg
            </span>
          </div>
          <div className="photo w-full h-full flex justify-center items-center sm:max-h-90">
            <img
              src={image}
              alt="Personal photo"
              className="w-full scale-120 h-full object-cover max-w-sm"
            />
          </div>
          <div className="socials w-screen absolute bottom-0 flex justify-evenly items-center bg-my-400 px-0 py-1 mr-1 sm:w-32 sm:justify-between sm:bg-transparent sm:right-1/4 sm:bottom-5">
            <a
              className="js-reveal-0 text-my-200 text-2xl text-shadow-33"
              href="mailto:viktorial86@hotmail.com"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              className="js-reveal-1 text-my-700 text-2xl text-shadow-33"
              href="https://www.linkedin.com/in/viktorialindberg/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="js-reveal-2  text-my-200 text-2xl text-shadow-33"
              href="https://github.com/Viktoria-L"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="about relative w-full lg:pt-10 sm:w-2/5 mx-2">
          <span className="s-label text-my-300 text-xs tracking-[7px] mb-6 block js-reveal-3">
            - om mig
          </span>
          <div className="title default-title text-xl leading-7 font-semibold mb-6 text-my-100 text-shadow-33">
            <span>Frontend-Utvecklare med C#-kunskaper</span>
          </div>
          <div className="default-text font-montserrat text-md tracking-wide leading-6 mr-2 text-my-100">
            <span>
              Kreativ, lösningsfokuserad och alltid nyfiken på att lära nytt!
              Har väldigt lätt för att lära mig nya saker och tar mig gärna an
              kluriga uppgifter. Jag älskar att programmera och finner stor
              glädje och engagemang när jag löser komplexa problem med kod.
            </span>
          </div>
          <div className="default-btn w-full mt-10 flex justify-center items-center flex-nowrap sm:items-start js-reveal-1">
            <Link
              to="/portfolio"
              className="bg-my-700 rounded-sm text-my-100 w-48 h-8 no-underline text-lg font-bold cursor-pointer tracking-widest flex justify-center outline-none box-shadow-33 transition-all border-2 border-transparent border-solid hover:border-my-100"
            >
              projekt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
