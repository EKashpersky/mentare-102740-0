export const MATH_EXTENDER_TAU_NUMBER = {};

declare global {
  interface Math {
    TAU: number;
  }
}

Math.TAU = Math.PI * 2;