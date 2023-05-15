import teamwork from '../assets/teamwork1.png'
function Portfolio () {
    return (
        <div className="container">

            <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 pt-10">
                <div className="bg-light-green-0 rounded-3xl">
                    <img src={teamwork} alt="" />
                    test
                </div>
                <div className="bg-light-green-0 rounded-3xl">
                    <img src={teamwork} alt="" />
                    test
                </div>
            </div>
        </div>
    )
}

export default Portfolio