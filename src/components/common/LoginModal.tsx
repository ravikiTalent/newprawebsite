interface LoginModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function LoginModal({ isOpen = false, onClose }: LoginModalProps) {
  return (
    <div 
      className={`modal fade ${isOpen ? 'show d-block' : ''}`} 
      tabIndex={-1} 
      role="dialog"
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button 
              type="button" 
              className="close" 
              onClick={onClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Please use the login page instead.
          </div>
        </div>
      </div>
    </div>
  );
}
