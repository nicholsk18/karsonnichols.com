import teamwork from '../assets/teamwork1.png'
import {Link} from "react-router-dom";
function Portfolio () {
    return (
        <div className="w-11/12 md:container mx-auto">

            <div className="grid grid-cols-3 md:grid-cols-2 grid-flow-row gap-4 -mt-40">
            {/*<div className="m-auto w-full lg:w-7/12">*/}
                <div className="bg-light-green-0 rounded-3xl relative hover:brightness-50 z-10">
                  <Link to='https://teamworkconstructionllc.com/' target='_blank'>
                    <img src={teamwork} alt="team work construction project image rounded-3xl" />
                  </Link>

                {/*  <div className="absolute flex items-center justify-center top-0 bottom-0 right-0 left-0 z-20">*/}
                {/*    <h3>Project Title</h3>*/}
                {/*    <p>Project Details</p>*/}
                {/*  </div>*/}
                </div>
            </div>
        </div>
    )
}

export default Portfolio