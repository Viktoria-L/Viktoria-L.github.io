

export const Infobox = () => {
  return (
    <div className="contact mb-10 sm:w-5/12 sm:mb-0 mx-2">
    <span className="s-label text-my-300 text-xs tracking-[7px] mb-6 block js-reveal-3">- aktuellt</span>
    <div className="default-title text-xl leading-7 font-semibold mb-6 text-my-200 text-shadow-33">
        <span>Nu är det inte långt kvar till examen!</span>
    </div>
    <div className="default-text text-md tracking-wide leading-6 font-medium text-my-200">
        <span className="font-montserrat">Jag gör just nu min LIA (praktik) och i april påbörjar jag mitt examensarbete för att sedan i maj ta examen. Jag ser SÅ framemot att få komma ut i arbetslivet som frontend-utvecklare!
          Har ni tips på något spännande jobb eller uppdrag, tveka inte att höra av er!</span>
    </div>
    <div className="default-btn w-full mt-10 flex justify-center items-center flex-nowrap sm:items-start js-reveal-1">
        <a href="mailto:viktorial86@hotmail.com" className="bg-my-700 rounded-sm text-my-100 w-48 h-8 no-underline text-lg font-bold cursor-pointer tracking-widest flex justify-center outline-none box-shadow-33 transition-all border-2 border-transparent border-solid hover:border-my-100">
          kontakt</a>
    </div>
</div>
  )
}
