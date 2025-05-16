import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function CoreConcept1({ image, title, description }) {
  // const { image, title, description } = props; destructuring props
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let selected = <p>Please Select a topic</p>;
  if (selectedTopic) {
    selected = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  console.log("App Component rendering"); //it will execute once not on any DOM change as REACT compnent only execute once -> we can do with state
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept1 {...CORE_CONCEPTS[1]} />
            <CoreConcept />
            <CoreConcept /> */}
          </ul>
        </section>
        <sections id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>{" "}
            {/* 
                1. if we are passing onSelect={handleSelect('state')} it will run only on loading
                2.  onSelect={ handleSelect}  by passing function pointer and it will be 
                    called whenever we click tab button although can't pass value in this thats 
                    why we are returning function from function
              */}
          </menu>
          {selectedTopic}
        </sections>
        {selected}
      </main>
    </div>
  );
}

export default App;
