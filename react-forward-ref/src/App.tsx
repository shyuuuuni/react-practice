import React, {useRef, useState} from 'react';
import './App.css';
import Modal from "./Modal/core/Modal/Modal";

interface ModalProps {
  onClose: () => void;
}

const ModalA = ({ onClose }: ModalProps) => {
  const handleCloseModalA = () => {
    onClose();
    console.log("Modal A closed.");
  }
  return <Modal title={"Modal A"} onClose={handleCloseModalA}></Modal>
}

const ModalB = ({ onClose }: ModalProps) => {
  const handleCloseModalB = () => {
    onClose();
    console.log("Modal B closed.");
  }
  return <Modal title={"Modal B"} onClose={handleCloseModalB}></Modal>
}

const App = ():JSX.Element => {
  const appRef = useRef<HTMLDivElement | null>(null);
  const [visibleModalA, setVisibleModalA] = useState(false);
  const [visibleModalB, setVisibleModalB] = useState(false);

  const handleColorChange = () => {
    if (appRef.current === null) {
      return;
    }
    appRef.current.style.backgroundColor = 'pink';
  }

  return (
    <div className="App" ref={appRef}>
      <button onClick={handleColorChange}>색 바꾸기</button>
      <button onClick={() => setVisibleModalA(true)}>모달A 열기</button>
      <button onClick={() => setVisibleModalB(true)}>모달B 열기</button>
      {visibleModalA && <ModalA onClose={() => setVisibleModalA(false)}/>}
      {visibleModalB && <ModalB onClose={() => setVisibleModalB(false)} />}
    </div>
  );
}

export default App;
