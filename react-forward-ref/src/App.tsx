import React, {useState} from 'react';
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

function App() {
  const [visibleModalA, setVisibleModalA] = useState(false);
  const [visibleModalB, setVisibleModalB] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setVisibleModalA(true)}>모달A 열기</button>
      <button onClick={() => setVisibleModalB(true)}>모달B 열기</button>
      {visibleModalA && <ModalA onClose={() => setVisibleModalA(false)}/>}
      {visibleModalB && <ModalB onClose={() => setVisibleModalB(false)} />}
    </div>
  );
}

export default App;
