import { loremIpsum } from 'lorem-ipsum';
import pokeipsum from 'pokeipsum';
import samuelIpsum from 'samuel-ipsum';

const generators = {
  lorem: (length) => loremIpsum({ count: length, units: 'paragraphs' }),
  pokemon: pokeipsum.paragraphs,
  samuel: (length) => samuelIpsum.generateParagraphs(length).join('\n'),
};

export const AVAILABLE_GENERATORS = Object.keys(generators);

export default function generateText(type, length) {
  const generator = type in generators ? generators[type] : generators.lorem;
  return generator(length);
}
