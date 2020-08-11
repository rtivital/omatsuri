export function getBorderColor(direction, color) {
  switch (direction) {
    case 'bottom-right':
    case 'top':
      return `transparent transparent ${color} transparent`;

    case 'top-left':
    case 'bottom':
      return `${color} transparent transparent transparent`;

    case 'bottom-left':
    case 'right':
      return `transparent transparent transparent ${color}`;

    case 'top-right':
    case 'left':
      return `transparent ${color} transparent transparent`;

    default:
      return null;
  }
}

export function getBorderWidth(direction, width, height) {
  switch (direction) {
    case 'top':
      return `0 ${width / 2}px ${height}px ${width / 2}px`;

    case 'top-right':
      return `0 ${width}px ${height}px 0`;

    case 'top-left':
      return `${height}px ${width}px 0 0`;

    case 'right':
      return `${height / 2}px 0 ${height / 2}px ${width}px`;

    case 'left':
      return `${height / 2}px ${width}px ${height / 2}px 0`;

    case 'bottom-left':
      return `${width}px 0 0 ${height}px`;

    case 'bottom-right':
      return `0 0 ${height}px ${width}px`;

    case 'bottom':
      return `${height}px ${width / 2}px 0 ${width / 2}px`;

    default:
      return null;
  }
}

export default function getTriangleProps({ direction, color, width, height }) {
  return {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: getBorderWidth(direction, width, height),
    borderColor: getBorderColor(direction, color),
  };
}
