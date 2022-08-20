import { IKeyValue } from "src/app/models/common/key-value.interface";

export const CAR_STATE_FILTER: IKeyValue = {
  newCarAD: {
    label: "New Car (Authorised Dealer)",
    state: "newCarAD",
  },
  newCarPI: {
    label: "New Car (Parallel Importer)",
    state: "newCarPI",
  },
  usedCars: {
    label: "Used Cars",
    state: "usedCars",
  },
};
