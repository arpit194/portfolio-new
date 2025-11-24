import { Navbar, Welcome, Dock } from "#components";
import {
  FinderWindow,
  ResumeWindow,
  SafariWindow,
  TerminalWindow,
  TextWindow,
  ImageWindow,
  ContactWindow,
} from "#windows";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <FinderWindow />
      <ImageWindow />
      <TextWindow />
      <ContactWindow />
    </main>
  );
};

export default App;
