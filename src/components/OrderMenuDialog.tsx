import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const TAKEOUT_MENU_URL =
  'https://food.lztechserve.com/tasteofasia?type=takeout';

export const MEMBER_CENTER_URL =
  'https://food.lztechserve.com/tasteofasia/customer/member';

interface OrderMenuDialogProps {
  open: boolean;
  url: string;
  title: string;
  onClose: () => void;
}

export function OrderMenuDialog({ open, url, title, onClose }: OrderMenuDialogProps) {
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
        aria-label={title}
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
            src={url}
            title={title}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
