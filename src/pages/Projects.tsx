import { useState, useEffect } from 'react';
import { MyProjects } from '../constants/projects';

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [modalCaption, setModalCaption] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(Array(MyProjects.length).fill(0));

  const showModal = (src:string, alt:string) => {
    setModalOpen(true);
    setModalImgSrc(src);
    setModalCaption(alt);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, url:string) => {
    e.stopPropagation(); 
    window.open(url, '_blank'); 
  };

     useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex.map((index, projectIndex) => {
          const project = MyProjects[projectIndex];
          if (!project.img) return 0;
          return (index + 1) % project.img.length;
        })
      );
    }, 2000);

    return () => clearInterval(interval); 
  }, []);

   return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div>
        <div className="relative w-full flex mx-2 justify-center items-center">
          <div className="title default-title text-xl leading-7 font-semibold mb-6 text-my-100 text-shadow-33">
            <span>Projekt</span>
          </div>
        </div>
        <div className="projectswrapper max-w-6xl flex flex-wrap flex-col sm:flex-row items-center justify-center mt-6 mb-20 gap-10">

          {MyProjects.map((project, i) => (       
          <div key={i}
          className="relative rounded-lg block w-3/4 sm:w-2/5 bg-gray-900 group cursor-pointer min-h-[400px]"
          onClick={() =>
            showModal(
              project.img[currentImageIndex[i]],
              project.title
              )
            }
             >
           
            <img
              className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 rounded-lg"
              src={project.img[currentImageIndex[i]]}
              alt={project.title}
              />
            <div className="relative p-5">
              <div className="mt-40">
                {/* Hidden content on hover */}
                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="p-2">
                    <p className="text-lg font-bold text-white">
                     {project.title}
                    </p>  
                    <p className="text-sm text-white my-2">
                     {project.info}
                    </p>
                    <div className='flex gap-4'>
                    {project.github && (<button onClick={(e) => handleButtonClick(e, project.github)} className="bg-my-300 rounded-sm text-my-100 w-24 h-8 no-underline text-lg font-bold cursor-pointer tracking-widest flex justify-center outline-none transition-all border-2 border-transparent border-solid hover:border-my-100">
                  Github
                </button>)}
                {project.url && (<button onClick={(e) => handleButtonClick(e, project.url)} className="bg-my-300 rounded-sm text-my-100 w-28 h-8 no-underline text-lg font-bold cursor-pointer tracking-widest flex justify-center outline-none transition-all border-2 border-transparent border-solid hover:border-my-100">
                  Hemsida
                </button>)}
                 </div>
                    <div className="boxes flex flex-wrap  mt-4">
                      {project.techstack.map((stack) => (

                        <span className="bg-my-500 flex justify-center items-center flex-nowrap mr-2 p-1 mb-1 text-sm font-bold text-my-200  rounded-md">
                       {stack}
                      </span>
                        ))}
          
                    </div>
                  </div>
                </div>
                {/* End of hidden content */}
              </div>
            </div>
          </div>
))}


        
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div id="myModal" className="modal" style={{ display: 'block' }}>
          <span
            className="close cursor-pointer"
            onClick={() => setModalOpen(false)}
          >
            &times;
          </span>
          <img 
            className="modal-content"
            id="img01"
            src={modalImgSrc}
            alt={modalCaption}
          />
          <div id="caption">{modalCaption}</div>
        </div>
      )}
    </div>
  );
};

export default Projects;
