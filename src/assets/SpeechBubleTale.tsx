type Props = { color: string; className: string };

function SpeechBubleTale({ color = 'white', className }: Props) {
  return (
    <svg
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d={
          color === 'white'
            ? 'M0.5 0L12 -5.02681e-07L12 18L0.5 0Z'
            : 'M12 0L0.480933 -5.02681e-07L0.480933 18L12 0Z'
        }
        fill={color}
      />
    </svg>
  );
}

export default SpeechBubleTale;
