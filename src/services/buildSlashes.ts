export const buildSlashes = (module: number) => {
  const slashesElement = document.getElementById("Slashes");

  const slashesWidth = slashesElement?.offsetWidth ?? 0;
  let slashes = "";
  for (let index = 0; index < slashesWidth; index++) {
    if (index % module === 0) slashes += "/ ";
  }
  return slashes;
};
