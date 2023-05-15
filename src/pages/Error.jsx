
import Nav from "../components/Nav"

function Error() {
    return (
        <>
            <div className="container mx-auto h-screen pt-5 overflow-hidden">
                <Nav />

                <div className="flex flex-col items-center justify-center h-full text-light-tan-0">
                    <strong className="text-8xl">404</strong> Could not find this page
                </div>
            </div>
        </>
    )
}

export default Error