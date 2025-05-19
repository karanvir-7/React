import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  console.log("App Component rendering"); //it will execute once not on any DOM change as REACT compnent only execute once -> we can do with state
  return (
    <> {/* Fragment for not showing div in the DOM*/}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
