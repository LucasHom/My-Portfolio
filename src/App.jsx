import './App.css';

const skills = [
  {
    "language": "Python",
    "img": "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
  },
  {
    "language": "JavaScript",
    "img": "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
  },
  {
    "language": "React",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    "language": "HTML",
    "img": "https://cdn-icons-png.flaticon.com/512/919/919827.png",
  },
  {
    "language": "CSS",
    "img": "https://cdn-icons-png.flaticon.com/512/919/919826.png",
  },
  {
    "language": "SQL",
    "img": "https://cdn-icons-png.flaticon.com/512/2772/2772165.png",
  },
  {
    "language": "Git",
    "img": "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
]

const projects = [
  {
    "name": "",
    "description": "",
    "technologies": "",
    "github": "",
    "img": "",
  },
]

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


        <h1 className="text-center">Skills</h1>
        <div className="icon-container">
        {
            skills.map((skill,index) => {
              return (
                <div key={index}>
                  <p>{skill.language}</p>
                  <img className="icon" src={skill.img}/>
                </div>
              )
            })
        }
        </div>

        <h1 className="text-center">Projects</h1>
        
        <div className='projects-container'>

          <div>


            
            <a href="https://github.com/LucasHom/Space-Invaders"><img className='project-screenshot' src='https://user-images.githubusercontent.com/61358556/155899552-a5d6bc12-261a-40e4-a384-f75e816bb74e.png'/></a>
            
            <a href="https://github.com/LucasHom/Space-Invaders">Space Invaders</a>
            <p>Place holder description</p>



            
          </div>


          

        </div>
      
      </main>
    </>
  )
}
