import { createContext } from "react";
import "./App.css";
import LayoutPage from "./pages/layout.page";
import { dataConsumer } from "./service/data.consumer";
export const InitContext = createContext();
export function App() {
  return (
    <div className="App">
      <InitContext.Provider value={dataConsumer()}>
        <LayoutPage></LayoutPage>
      </InitContext.Provider>
    </div>
  );
}

export default App;
