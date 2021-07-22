const sample = (arr: string[], len = 1) => {
  let output = [];

  for (let i = 0; i < len; i++) {
    output.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  return output;
};

export const generateId = (len = 4) => {
  const characters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return sample(characters, len).join("");
};
