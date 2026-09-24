// A small vocabulary of geometric marks used across the site instead of
// the original slider's layered PNG graphics. Each service/pillar maps to
// one shape + one accent color, so the shapes carry meaning consistently
// rather than decorating at random.

const colorMap = {
  olive: 'fill-olive',
  orange: 'fill-orange',
  'olive-light': 'fill-olive-light',
};

export function Blob({ color = 'olive', className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        className={colorMap[color]}
        d="M45.3,-58.5C58.6,-49.6,69.2,-35.5,73.6,-19.7C78,-3.9,76.2,13.6,68.7,28.1C61.2,42.6,48,54.1,32.9,62.1C17.8,70.1,0.8,74.6,-16.5,72.6C-33.8,70.6,-51.4,62.1,-62.4,48.5C-73.4,34.9,-77.8,16.2,-76.1,-1.6C-74.4,-19.4,-66.6,-36.3,-54.1,-45.6C-41.6,-54.9,-24.4,-56.6,-7.6,-58.9C9.2,-61.2,32,-67.4,45.3,-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Circle({ color = 'olive', className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle className={colorMap[color]} cx="100" cy="100" r="90" />
    </svg>
  );
}

export function Triangle({ color = 'olive', className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <polygon className={colorMap[color]} points="100,12 188,178 12,178" />
    </svg>
  );
}

export function Square({ color = 'olive', className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <rect className={colorMap[color]} x="20" y="20" width="160" height="160" rx="28" />
    </svg>
  );
}

const shapeComponents = { blob: Blob, circle: Circle, triangle: Triangle, square: Square };

export function Shape({ shape = 'circle', color = 'olive', className = '' }) {
  const Component = shapeComponents[shape] || Circle;
  return <Component color={color} className={className} />;
}
