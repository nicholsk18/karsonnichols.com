import teamwork from '../assets/teamworkconstructionllc.png'
import floorminds from '../assets/floorminds.png'
import { Link } from 'react-router-dom'
function Portfolio() {
  return (
    <div className="w-11/12 md:container mx-auto">
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="bg-light-green-0 rounded-3xl relative hover:brightness-50 z-10 flex-1">
          <Link to="https://teamworkconstructionllc.com/" target="_blank">
            <img
              src={teamwork}
              alt="team work construction project image rounded-3xl"
            />
          </Link>

          {/*<div className="absolute flex items-center justify-center top-0 bottom-0 right-0 left-0 z-20">*/}
          {/*  <h3>Project Title</h3>*/}
          {/*  <p>Project Details</p>*/}
          {/*</div>*/}
        </div>

        <div className="bg-light-green-0 rounded-3xl relative hover:brightness-50 z-10 flex-1">
          <Link
            to="https://floorminds.com/"
            target="_blank"
            rel="nofollow noopener"
          >
            <img
              src={floorminds}
              alt="team work construction project image rounded-3xl"
            />
          </Link>

          {/*<div className="absolute flex items-center justify-center top-0 bottom-0 right-0 left-0 z-20">*/}
          {/*  <h3>Project Title</h3>*/}
          {/*  <p>Project Details</p>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
