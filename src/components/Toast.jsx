import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type !== 'error';

  return (
    <div className="kp-toast-wrap">
      <div className={`kp-toast ${isSuccess ? 'success' : 'error'}`} role="alert">
        <div style={{ flexShrink: 0, marginTop: '1px' }}>
          {isSuccess
            ? <CheckCircle2 size={18} color="var(--accent-lime)" />
            : <XCircle size={18} color="#FF3C38" />
          }
        </div>
        <p className="kp-toast-msg">{toast.message}</p>
        <button
          onClick={onClose}
          aria-label="Dismiss notification"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            marginLeft: 'auto',
            flexShrink: 0,
            paddingLeft: '0.5rem'
          }}
        >
          <XCircle size={16} />
        </button>
      </div>
    </div>
  );
}
