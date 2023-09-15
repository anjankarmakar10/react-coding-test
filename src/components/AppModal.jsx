import Modal from "react-modal";

Modal.setAppElement("#root");

function AppModal({ isOpen, children, setIsOpen, title }) {
  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: "9999",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
        content: {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          border: "0",
          background: "transparent",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "0",
          outline: "none",
          padding: "0",
          maxWidth: "650px",
          width: "100%",
          height: "auto",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            style={{ backgroundColor: "#46139f", color: "#fff" }}
            className="btn btn-outline-primary"
            onClick={() => {
              setIsOpen(false);
              window.history.pushState(null, "", "/");
            }}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AppModal;
