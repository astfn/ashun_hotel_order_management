import { memo, useEffect, useState } from "react";
import axios from "axios";

import { AppWrapper } from "./appStyle.js";

function App(props) {
  const [title, setTitle] = useState(null);
  const [multidata, setMultidata] = useState([]);
  useEffect(() => {
    axios({
      baseURL: "http://localhost:3000",
      url: "/ashun",
    }).then((res) => {
      console.log(res.data);
      setTitle(res.data);
    });
    axios({
      baseURL: "http://localhost:3000",
      url: "/multidata",
    }).then((res) => {
      console.log(res.data);
      setMultidata(res.data);
    });
  }, []);
  return (
    <AppWrapper className="App">
      Ashuntefannao😀
      <h1>{title}</h1>
      <h1>
        {multidata.map((item, index) => (
          <li key={item}>{item}</li>
        ))}
      </h1>
    </AppWrapper>
  );
}

export default memo(App);
