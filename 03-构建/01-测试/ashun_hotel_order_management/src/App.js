import { memo, useEffect, useState } from "react";
import { getName, getMuultiData } from "./services/test.js";
import { AppWrapper } from "./AppStyle.js";
function App(props) {
  const [name, setName] = useState(null);
  const [multiData, setMultiData] = useState([]);
  useEffect(() => {
    getName().then((res) => setName(res));
    getMuultiData().then((res) => setMultiData(res));
  }, []);
  return (
    <AppWrapper className="App">
      <h1>Ashuntefannao😀</h1>
      <h1>{name}</h1>
      {multiData.map((item, index) => {
        return <li key={item}>{item}</li>;
      })}
    </AppWrapper>
  );
}

export default memo(App);
