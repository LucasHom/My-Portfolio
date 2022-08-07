import './App.css'

export default function App() {
  return (
    <>
      <header>
        <h1>Computer Science Student</h1>
        <h1>Lucas Hom</h1>
      </header>

      <hr />
      
      <main>
        <p>I am currently a computer science student in High School. I enjoy playing the            ukelele, going to the gym with friends and volunteering for non-profits.</p>
        {/*Github/linkedin icons*/}

        <h1 className="text-center">Skills</h1>
        <div className="icon-container">
          
          <div>
            <img className="icon" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"/>
            <h3>Python</h3>
          </div>

          <div>
            <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"/>
            <h3>JavaScript</h3>
          </div>

          <div>
            <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
            <h3>React</h3>
          </div>


          <div>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/919/919827.png"/>
            <h3>HTML</h3>
          </div>


          <div>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/919/919826.png"/>
            <h3>CSS</h3>
          </div>

          <div>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/2772/2772165.png"/>
            <h3>SQL</h3>
          </div>


          <div>
            <img className="icon" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"/>
            <h3>Git</h3>
          </div>
          
        </div>

        
      </main>
    </>
  )
}
