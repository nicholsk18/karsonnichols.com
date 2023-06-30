import {Link} from "react-router-dom";

function Home () {
    return (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl md:text-8xl font-extrabold uppercase">Karson N.</h1>

          <hr className="h-4 bg-light-green-0 border-0 my-3 w-11/12 md:w-1/3" />

          <p className="text-4xl md:text-5xl font-extrabold uppercase text-center">
            PHP Full Stack <br /> Developer
          </p>

          <Link to="https://www.upwork.com/workwith/karsonn" className="border-2 px-10 py-3 w-11/12 md:w-1/3 text-center mt-10 bg-lime-green-0 border-lime-green-0 hover:bg-light-green-0">
            Hire Me!
          </Link>
        </div>
    )
}

export default Home