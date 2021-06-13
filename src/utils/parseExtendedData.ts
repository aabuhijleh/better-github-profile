import { ExtendedData } from "src/types";

export const parseExtendedData = (data: string) => {
  try {
    return JSON.parse(data) as ExtendedData;
  } catch (err) {
    console.error("could not parse extended data", err);
    return null;
  }
};
