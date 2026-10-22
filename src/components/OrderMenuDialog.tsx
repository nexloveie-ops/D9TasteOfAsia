import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const TAKEOUT_MENU_URL =
  'https://food.lztechserve.com/tasteofasia?type=takeout';

interface OrderMenuDialogProps {
  open: boolean;
  onClose: () => void;
}

export function OrderMenuDialog({ open, onClose }: OrderMenuDialogProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="order-dialog" onClick={onClose}>
      <div
        className="order-dialog__stage"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="order-dialog__close"
          aria-label="Close menu"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="order-dialog__phone">
          <iframe
            className="order-dialog__frame"
            src={TAKEOUT_MENU_URL}
            title="Taste Of Asia menu"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
