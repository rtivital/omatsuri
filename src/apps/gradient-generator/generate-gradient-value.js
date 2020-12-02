import Color from 'color';

export function generateGradientColorValues(values) {
  return values.reduce(
    (acc, value, index) =>
      `${acc}rgba(${Color(value.color).rgb().array().concat(value.opacity)
        .join(', ')}) ${
        value.position
      }%${index !== values.length - 1 ? ', ' : ''}`,
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
