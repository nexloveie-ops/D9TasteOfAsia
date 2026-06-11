import { StarIcon } from './StarIcon';

interface SectionHeadingProps {
  suptitle: string;
  title?: string;
  centered?: boolean;
}

export function SectionHeading({ suptitle, title, centered }: SectionHeadingProps) {
  return (
    <div className={`title-box ${centered ? 'title-box--centered' : ''}`}>
      <div className="suptitle">
        <StarIcon className="icon-elem-svg" />
        <span>{suptitle}</span>
        <StarIcon className="icon-elem-svg" />
      </div>
      {title && <h2 className="section-title">{title}</h2>}
    </div>
  );
}
