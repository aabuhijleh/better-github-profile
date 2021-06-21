import React from "react";

import { range } from "src/utils/range";
import { generateId } from "src/utils/generateId";
import { useIncrementingNumber } from "src/hooks/useIncrementingNumber";

const rainbowColors = [
  "hsl(177deg, 100%, 35%)", // aqua
  "hsl(230deg, 100%, 45%)", // blue
  "hsl(240deg, 100%, 45%)", // indigo
  "hsl(260deg, 100%, 55%)", // violet
  "hsl(325deg, 100%, 48%)", // pink
  "hsl(1deg, 96%, 55%)", // red
  "hsl(25deg, 100%, 50%)", // orange
  "hsl(40deg, 100%, 50%)", // yellow
  "hsl(45deg, 100%, 50%)", // yellow
  "hsl(66deg, 100%, 45%)", // lime
  "hsl(130deg, 100%, 40%)", // green
];
const paletteSize = rainbowColors.length;
const WINDOW_SIZE = 3;

// During compile-time build, we have to assume no browser support.
// On mount, we'll check if `CSS.registerProperty` exists
const hasBrowserSupport =
  typeof window !== "undefined"
    ? typeof (window.CSS as any).registerProperty === "function"
    : false;

const getColorPropName = (id: string, index: number) =>
  `--magic-rainbow-color-${id}-${index}`;

export const useRainbow = (options = { intervalDelay: 1000 }) => {
  const prefersReducedMotion =
    typeof window === "undefined"
      ? true
      : window.matchMedia("(prefers-reduced-motion: no-preference)");

  const isEnabled =
    hasBrowserSupport &&
    (prefersReducedMotion === true || prefersReducedMotion.matches);

  const { current: uniqueId } = React.useRef(generateId());

  // Register all custom properties
  React.useEffect(() => {
    if (!isEnabled) {
      return;
    }

    // eslint-disable-next-line array-callback-return
    range(0, WINDOW_SIZE).map((index) => {
      const name = getColorPropName(uniqueId, index);
      const initialValue = rainbowColors[index];

      try {
        (CSS as any).registerProperty({
          name,
          initialValue,
          syntax: "<color>",
          inherits: false,
        });
      } catch (err) {
        // console.error("failed to register CSS property");
      }
    });
  }, [isEnabled, uniqueId]);

  const intervalCount = useIncrementingNumber(options.intervalDelay);

  return range(0, WINDOW_SIZE).reduce((acc, index) => {
    const effectiveIntervalCount = isEnabled ? intervalCount : 0;

    const name = getColorPropName(uniqueId, index);
    const value = rainbowColors[(effectiveIntervalCount + index) % paletteSize];

    return {
      ...acc,
      [name]: value,
    };
  }, {});
};
