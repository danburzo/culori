export default hue => ((hue = hue % 360) < 0 ? hue + 360 : hue);
