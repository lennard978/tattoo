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
          Welcome to my studio! I'm Yeli, a dedicated tattoo artist with a passion for creating delicate, elegant designs. My mission is to bring beauty into the world through my art. Whether you have a clear idea of the tattoo you want or need guidance on design and placement, I'm here to help you create something truly special.Together, we'll craft something unique and meaningful that you'll treasure forever.
        </p>
      </div>
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
