import Color from 'color';

function transformColor(value) {
  if (value.opacity === 100) {
    return value.color;
  }

  return `rgba(${Color(value.color)
    .rgb()
    .array()
    .concat(value.opacity / 100)
    .join(', ')})`;
}

export function generateGradientColorValues(values) {
  return values.reduce(
    (acc, value, index) =>
      `${acc}${transformColor(value)} ${value.position}%${index !== values.length - 1 ? ', ' : ''}`,
    ''
  );
}

export default function generateGradientValue({ values, angle, type }) {
  const colors = generateGradientColorValues(values);

  if (type === 'radial') {
    return `radial-gradient(circle, ${colors})`;
  }

  return `linear-gradient(${angle}deg, ${colors})`;
}
