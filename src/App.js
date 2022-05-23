import logo from './logo.svg';
import selfie from "./images/me.jpg"
import linkedinIcon from "./images/linkedin-icon.png"
import githubIcon from "./images/github-icon.png"
import './App.css';

export function EmailLink() {
  window.open("mailto:watkins.braedon@gmail.com", "_self");
}

export function LinkedinLink() {
  window.open("https://linkedin.com/in/braedonwatkins", "_blank");
}

export function GithubLink() {
  window.open("https://github.com/braedonwatkins", "_blank");
}

function App() {
  return (
    <div className="App">
      <div className="card">
          <div className="info">
            <img src={selfie}/>
            <h1>Braedon Watkins</h1>
            <span>Frontend Developer</span>
            <a href="https://braedonwatkins.github.io/index">my site (coming soon)</a>
            <button onClick={EmailLink}>Email</button>
          </div>
          
          <div className="exposition">
            <h1>About</h1>
            <span>Rig Veda are creatures of the cosmos from which we spring with pretty stories 
              for which there's little good evidence prime number Vangelis? Another world finite
              but unbounded shores of the cosmic ocean invent the universe hearts of the stars two 
              ghostly white figures in coveralls and helmets are softly dancing?.</span>
          </div>

          <div className="exposition">
            <h1>Interests</h1>
            <span>Extraordinary claims require extraordinary evidence the ash of stellar alchemy
              Rig Veda vanquish the impossible rich in mystery muse about. Tendrils of gossamer 
              clouds rings of Uranus invent the universe the sky calls to us two ghostly white 
              figures in coveralls and helmets are softly dancing tendrils of gossamer clouds?
              </span>
          </div>

          <footer>
            <img onClick={LinkedinLink} src={linkedinIcon}/>
            <img onClick={GithubLink} src={githubIcon}/>
          </footer>
      </div>
    </div>
  );
}

export default App;
