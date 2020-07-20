export const FLOAT_PRECISION = 4;

declare global {
  interface Number {
    round(degree?: number): number;
  }
}

Number.prototype.round = function (degree) {
  if (!Number.isFinite(degree) || degree < 0) {
    degree = 2;
  }

  const scaledUpNumber = parseFloat(this.valueOf() + `e+${degree}`);
  const scalingDown = `e-${degree}`;

  return +(Math.round(scaledUpNumber) + scalingDown);
};