import React from "react";
import Header from "../components/header";
import Button from "../components/button";
import { Link } from "react-router-dom";

const e404 = () => {
    return (
        <div className="404">
            <Header />
        <section className="flex items-center h-full p-16 text-light">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-light">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Beklager, men vi har ikke svejset siden sammen endnu.</p>
                    <p className="mt-4 mb-8 text-gray-200">Ingen grund til bekymring. Du kan hurtigt vende tilbage til forsiden nedenfor.</p>
                    <Link to="/" className="text-light">
                            <Button label={'Gå til forsiden'} />
                        </Link>
                </div>
            </div>
        </section>
    </div>
    );
}

export default e404;
