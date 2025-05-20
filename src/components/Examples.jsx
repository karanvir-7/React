import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
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

  return (
    <Section title="Examples" id="examples">
      <Tabs 
        buttonsContainer="menu"
        // buttonsContainer="{CustomComponent}"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>{" "}
            {/* 
                1. if we are passing onSelect={handleSelect('state')} it will run only on loading
                2.  onSelect={ handleSelect}  by passing function pointer and it will be 
                    called whenever we click tab button although can't pass value in this thats 
                    why we are returning function from function
              */}
          </>
        }
      >
        {selectedTopic}
      </Tabs>
      <menu></menu>

      {selected}
    </Section>
  );
}
