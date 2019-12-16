const ratios = {
  minorSecond: 16 / 15,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 4 / 3,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.61803398875,
  majorSixth: 5 / 3,
  minorSeventh: 16 / 9,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 8 / 3,
  majorTwelfth: 3,
  doubleOctave: 4,
};

// * SETTINGS:
const scale = {
  base: [14, 16],
  ratio: ratios.perfectFourth,
};

const modularScale = (v, settings = scale) => {
  const { base, ratio } = settings;

  if (!Array.isArray(base) || base.length === 1) {
    return Math.pow(ratio, v) * base;
  }

  // Get upper bounds for base values
  const baseHigh = Math.pow(ratio, 1) * base[0];

  // for (let i = 1; i < base.length; i++) {
  //   // shift up if too low
  //   while (base[i] / 1 < base[0] / 1) {
  //     base[i] = Math.pow(ratio, 1) * base[i];
  //   }
  //   // shift down if too high
  //   while (base[i] / 1 >= baseHigh / 1) {
  //     base[i] = Math.pow(ratio, -1) * base[i];
  //   }
  // }
  // base.sort();

  const newBase = base
    .map((num, i) => {
      if (i === 0) return num;
      while (num / 1 < base[0] / 1) {
        num = Math.pow(ratio, 1) * num;
      }
      while (num / 1 >= baseHigh / 1) {
        num = Math.pow(ratio, -1) * num;
      }
      return num;
    })
    .sort((a, b) => a - b);

  const len = newBase.length;
  // calculate which base to use with modulo
  const rBase = Math.round((v / len - Math.floor(v / len)) * len);

  return Math.pow(ratio, Math.floor(v / len)) * newBase[rBase];
};

export default modularScale;
