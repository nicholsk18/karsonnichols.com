import teamwork from '../assets/teamwork1.png'
function Portfolio () {
    return (
        <div className="w-11/12 md:container mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 -mt-40">
                <div className="bg-light-green-0 rounded-3xl">
                  <a href='https://teamworkconstructionllc.com/' target='_blank'>
                    <img src={teamwork} alt="team work construction project image rounded-3xl" />
                  </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio