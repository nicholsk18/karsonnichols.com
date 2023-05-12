import Nav from './components/Nav.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className="container mx-auto h-screen pt-5">
        <Nav />

        <div className="flex flex-col items-center justify-center h-5/6 text-light-tan-0">
          <h1 className="text-8xl font-extrabold uppercase">Karson N.</h1>

          <hr className="h-4 bg-light-green-0 border-0 my-3 w-1/3" />

          <p className="text-5xl font-extrabold uppercase text-center">
            PHP Full Stack <br /> Developer
          </p>
        </div>
      </div>
    </>
  )
}

export default App
