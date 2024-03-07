

export const QuickInfoBoxes = () => {
  return (
    <>
    <div className="top-side bg-my-400 w-full h-56"></div>
                <div className="bottom-side bg-my-900 w-full h-auto">

        <div className="containerDiv max-w-screen-xl ps-4 pe-4 my-0 mx-auto relative">
            <div className="squads flex w-full justify-center items-center flex-wrap relative -top-28">
                <div className="squad js-reveal-1 w-56 h-56 flex flex-col justify-end items-center text-my-200 bg-my-500 mb-7 m-9 box-shadow-33">
                    <span className="text-xl leading-6 font-bold"><i className="fa-solid fa-code mr-2"></i>Frontend-</span>
                    <span className="text-xl leading-6 font-bold mb-11">Utvecklare</span>
                    <span className="text-lg leading-5 text-my-500 font-medium mb-8">Länk kommer snart..</span>
                </div>
                <div className="squad js-reveal-2 w-56 h-56 flex flex-col justify-end items-center text-my-200 bg-my-500 mb-7 m-9 box-shadow-33">
                    <span className="text-xl leading-6 font-bold mb-11"><i className="fa-solid fa-pen-ruler mr-2"></i>Egna projekt</span>
                    <span className="text-sm leading-5 text-my-200 font-medium mb-8">Musikspelare kommer snart</span>
                </div>
                <div className="squad js-reveal-3 w-56 h-56 flex flex-col justify-end items-center text-my-200 bg-my-300 mb-7 m-9 box-shadow-33">
                    <span className="text-xl leading-6 font-bold mb-11"><i className="fa-solid fa-location-dot mr-2"></i>Stockholm</span>
                    <span className="text-lg leading-5 text-my-300 font-medium mb-8">-</span>
                </div>                        
            </div>
        </div>
    </div>
    </>
  )
}
