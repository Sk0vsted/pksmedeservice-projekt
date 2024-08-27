import React from 'react';
import { Link } from 'react-router-dom';

export default function Description({
  title,
  description,
  description2,
  description3,
}) {
  return (
    <div className="py-12 px-4 lg:px-80">
      <h1 className="font-roboto bg-gray-100 text-dark font-thin text-3xl pb-12">
        {title}
      </h1>
      <p className="font-ubuntu text-dark text-xl font-thin text-start">
        {description}
      </p>
      <p className="font-ubuntu text-dark text-xl font-thin text-start pt-6">
        {description2}
      </p>
      <p className="font-ubuntu text-dark text-xl font-thin text-start pt-6">
        {description3}
      </p>
      <h2 className="font-roboto bg-gray-100 text-dark font-thin text-2xl pb-6 pt-12">
        Kontakt os i dag, og få et godt tilbud!
      </h2>
      <div className="button buttonCorrect lg:mt-2 md:mt-0 mt-2 relative z-1 flex justify-center">
        <Link to="/kontakt">
          <button
            className="border-2 border-dark text-dark text-xl py-2 px-8 rounded-full relative hover:drop-shadow-xl hover:bg-dark hover:cursor-pointer hover:text-light
                    hover:text-transform transition duration-300 font-ubuntu ease-in-out before:"
          >
            Kontakt os
          </button>
        </Link>
      </div>
    </div>
  );
}
