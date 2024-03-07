export const Footer = () => {
  return (
    <footer className="bg-my-900 h-52">
      <div className="text-center gap-4 pt-4 flex flex-col justify-between h-full">
        <div className="default-title sm:text-lg leading-7 pt-2 font-semibold text-my-200 text-shadow-33">
          <span>
            Kontakta mig gärna om du har frågor eller om du vill starta ett
            projekt.
          </span>
        </div>
        <div>
          <a
            className="js-reveal-0 mr-4 text-my-200 hover:text-my-300 text-5xl text-shadow-33"
            href="mailto:viktorial86@hotmail.com"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            className="js-reveal-1 mr-4 text-my-700 hover:text-my-300 text-5xl text-shadow-33"
            href="https://www.linkedin.com/in/viktorialindberg/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="js-reveal-2  text-my-200 hover:text-my-300 text-5xl text-shadow-33"
            href="https://github.com/Viktoria-L"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div>
          {/* <p className="text-my-200">Denna sida är under uppbyggnad så besök mig gärna snart igen <i className="fa-solid fa-face-laugh-beam text-my-300"></i></p> */}
          <p className="text-my-200 mt-2">
            {' '}
            &#169; Viktoria Lindberg, mars 2024
          </p>
        </div>
      </div>
    </footer>
  );
};
