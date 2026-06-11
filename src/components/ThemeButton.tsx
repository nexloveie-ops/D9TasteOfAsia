interface ThemeButtonProps {
  children: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'border';
  className?: string;
}

export function ThemeButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
}: ThemeButtonProps) {
  const cls = `theme-btn btn-style-one ${variant === 'border' ? 'btn-style-border' : ''} ${className}`;

  const inner = (
    <span className="btn-wrap">
      <span className="text-one">{children}</span>
      <span className="text-two">{children}</span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
