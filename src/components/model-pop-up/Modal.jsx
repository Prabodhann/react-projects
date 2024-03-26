export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || 'Modal'} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal">
            &times;
          </span>
          <h2>
            {' '}
            {header ? (
              header
            ) : (
              <p>This is the Header passed down from parent</p>
            )}{' '}
          </h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is the body passed down from parent</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <h2>This is the footer passed down from parent</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
