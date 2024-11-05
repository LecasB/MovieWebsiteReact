const PopUpSubmit = ({ onConfirm, onCancel }) => {
  return (
    <div className="popup-overlay" onClick={onCancel}>
      <div className="popup-delete" onClick={(e) => e.stopPropagation()}>
        <h1>Doom is about to receive your review, are you sure?</h1>
        <p>(he can be very picky)</p>
        <img
          src="https://i.pinimg.com/originals/e3/b2/5b/e3b25bd4f5d0061da0643718d856ee09.gif"
          alt="Submit confirmation GIF"
        />
        <button onClick={onConfirm}>Submit</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default PopUpSubmit;
