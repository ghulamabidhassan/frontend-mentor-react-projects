const Modal = () => {
  return (
    <dialog className="modal">
      <div className="dialog">
        <h2 className="delete-com">delete comment</h2>
        <p className="desc">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="btn-flex">
          <button className="btn">no, cancel</button>
          <button className="btn btn-delete">yes, delete</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
