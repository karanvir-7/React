import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';


function CoreConcept1({image, title, description}) {
  // const { image, title, description } = props; destructuring props
  return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcept 
            title = {CORE_CONCEPTS[0].title}
            description = {CORE_CONCEPTS[0].description}
            image = {CORE_CONCEPTS[0].image}/>
          <CoreConcept1 { ...CORE_CONCEPTS[1]}/>
          <CoreConcept/>
          <CoreConcept/>
        </ul>
        </section>  
     
      </main>
    </div>
  );
}

export default App;
