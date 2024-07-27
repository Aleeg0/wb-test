import {LogForm, Poster} from "./Components";
import "./Styles/index.scss"
import {useState} from "react";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => {
    setIsModalOpen(true);
  }

  const onCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <LogForm
        isOpen={isModalOpen}
        onClose={onCloseModal}
      />
      <Poster
        onButtonClick={onOpenModal}
      />
    </>
  )
}

export default App
