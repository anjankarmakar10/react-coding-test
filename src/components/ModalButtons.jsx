const ModalButtons = ({ handleModalA, handleModalB }) => {
  return (
    <div className="d-flex justify-content-center gap-3">
      <button
        onClick={handleModalA}
        className="btn btn-lg btn-outline-primary"
        type="button"
      >
        All Contacts
      </button>
      <button
        onClick={handleModalB}
        className="btn btn-lg btn-outline-warning"
        type="button"
      >
        US Contacts
      </button>
    </div>
  );
};
export default ModalButtons;
