import { ReactDOM } from "react-dom";

const BackDrop = (props) => {
  return <div></div>;
};

const ModalOverlay = ({ project }) => {
  return (
    <div>
      <h1>{project.title}</h1>
      <image src={project.img} />
      <p>{project.description}</p>
      <p>{project.link}</p>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay project={props} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Modal;
