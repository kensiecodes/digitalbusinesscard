import './App.css'

function App() {


  return (
    <div className="App">
      <div className="card">
        <img src="/name.svg" alt="" className="name--logo"/>
        <img src="/profile.svg" alt="" className="card--image" />

        <div className="bio--section">
          
          <p>I'm a frontend developer using the MERN stack, with experience in Java and C. 
            I'm sharing my journey as a software engineer, mom, & gardener online.
          </p>

          <div className="link--buttons">
            <button><a href="https://kensiejack.netlify.app/">portfolio</a> </button>
            <button><a href="https://kensie.codes/">blog</a> </button>
          </div>
          
          <div className="font--buttons">
            <a href="https://twitter.com/MackensieJack">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/mackensie-jack/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/kensiecodes">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
