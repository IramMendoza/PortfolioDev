import { LiquidGlass } from '/js/Liquid-Glass.js';
import { hexToRgb } from '/js/utils.js';

function startGlass() {
  const elements = document.querySelectorAll('.solid-glass');
  if (!elements.length) return setTimeout(startGlass, 50);

  elements.forEach((el) => {
    new LiquidGlass(el, {
      tintColor: hexToRgb("#ffffff"),
      tintOpacity: 0.1,
      frostBlur: 6,
      distortionStrength: 80,
    });
  });
}

startGlass();