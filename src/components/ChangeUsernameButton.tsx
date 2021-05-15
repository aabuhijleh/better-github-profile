import React, { useState } from "react";
import { useStore } from "src/store";
import { Fab, Action } from "react-tiny-fab";
import { FiEdit, FiGithub } from "react-icons/fi";
import Modal from "react-modal";
import "react-tiny-fab/dist/styles.css";

const modalStyles = {
  overlay: {
    backgroundColor: "transparent",
  },
  content: {
    backgroundColor: "#21262d",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0.5rem",
    borderWidth: 1,
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
};

Modal.setAppElement("#root");

export const ChangeUsernameButton: React.FC = () => {
  const { username, setUsername } = useStore();
  const [customUsername, setCustomUserName] = useState(username);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Fab
        mainButtonStyles={{ backgroundColor: "#C2185B" }}
        icon={<FiEdit />}
        alwaysShowTitle={true}
      >
        <Action
          style={{ backgroundColor: "#161B22" }}
          text="change profile"
          onClick={() => openModal()}
        >
          <FiGithub />
        </Action>
      </Fab>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="change profile modal"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            closeModal();
          }}
        >
          <input
            type="text"
            value={customUsername}
            onChange={(e) => {
              setCustomUserName(e.target.value);
            }}
            style={{
              padding: 5,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 5,
              color: "black",
              marginRight: "1rem",
            }}
          />
          <button
            type="submit"
            onClick={() => setUsername(customUsername)}
            style={{
              padding: 5,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#0e1117",
              borderRadius: "0.8rem",
              color: "white",
              backgroundColor: "#0e1117",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <FiEdit style={{ marginRight: "0.2rem" }} />
            change username
          </button>
        </form>
      </Modal>
    </>
  );
};
