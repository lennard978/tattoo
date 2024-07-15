import { useState } from "react";
import "./App.css";
import { FAQ } from "./components/FAQ";
import { List } from "./components/List";
import { Modal } from "./components/Modal";
// import { Navigation } from "./components/Navigation";
import { Contact } from "./screens/Contact";
import { Home } from "./screens/Home";
import { Gallery } from "./screens/Gallery";

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      {/* <Navigation /> */}
      <Home />
      {/* <List setSelected={setSelected} /> */}
      <Gallery />
      {/* <Modal setSelected={setSelected} selected={selected} /> */}
      <div>
        <h1 className=" text-3xl text-center pb-4 pt-16 font-OpenSans">About me</h1>
        <p className="p-2 pb-10 font-OpenSans">
          Im your tattoo artist Yeli. Im in love with fine line tattoos, tender
          and elegant style. My passion is to create something beautiful in this
          world. With your ideas and my help we can make something special here.
          If you feel that you want to have a tattoo but still concerning on
          which part of your body to place it or doubting with design, I’m
          always there for you to help.
        </p>
      </div>
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
