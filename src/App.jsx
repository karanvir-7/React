import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';


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
    <div>``
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
        <sections id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton>Component</TabButton>
              <TabButton>JSX</TabButton>
              <TabButton>Props</TabButton>
              <TabButton>State</TabButton>
            </menu>
        </sections>
      </main>
    </div>
  );
}

export default App;
