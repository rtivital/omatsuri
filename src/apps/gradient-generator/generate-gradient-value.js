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

// export default function generateGradientValue(values, angle) {}
