const Modal = () => {
  return (
    <dialog className="modal-thank-you">
      <div className="modal-thank-you-content">
        <img className="tick" src="../public/icon-check.svg" alt="" />
        <h2 className="modal-title">Thanks for your support!</h2>
        <p className="modal-desc secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga id
          recusandae a distinctio alias rem aut, illum neque necessitatibus
          tempore.
        </p>
        <button
          className="btn"
          onClick={(e) => {
            const elem = e.currentTarget.parentElement.parentElement;
            elem.close();
          }}
        >
          Got it!
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
