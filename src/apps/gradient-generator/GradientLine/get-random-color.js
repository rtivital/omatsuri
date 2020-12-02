import oc from 'open-color';

const colorsList = Object.keys(oc)
  .filter((key) => key !== 'white' && key !== 'black')
  .map((key) => oc[key][4]);

export default function getRandomColor() {
  return colorsList[Math.floor(Math.random() * colorsList.length)];
}
