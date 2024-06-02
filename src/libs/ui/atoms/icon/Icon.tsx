interface IconProps {
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}
export const Icon = ({ name, color = '#000', size = 16, strokeWidth = 2 }: IconProps) => {
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={`${size}px`}
      height={`${size}px`}
      focusable="false"
      aria-hidden="true"
      stroke={color}
      stroke-width={`${strokeWidth}px`}
      fill="none"
      overflow="visible"
    >
      <use id="useIcon" xlinkHref={`#${name}`}></use>
    </svg>
  );
};
