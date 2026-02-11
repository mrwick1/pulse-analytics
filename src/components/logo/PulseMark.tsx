type PulseMarkProps = {
  size?: number;
};

const PulseMark = ({ size = 32 }: PulseMarkProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Full pulse line — white */}
      <polyline
        points="4,32 16,32 22,24 28,40 32,8 36,40 42,24 48,32 60,32"
        stroke="#E8E8E8"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Center peak overlay — accent blue */}
      <polyline
        points="28,40 32,8 36,40"
        stroke="#0055FF"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  );
};

export default PulseMark;
