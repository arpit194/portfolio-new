import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

export type Location =
  | typeof locations.work
  | typeof locations.about
  | typeof locations.resume
  | typeof locations.trash;

type LocationState = {
  activeLocation: Location;
  setActiveLocation: (location: Location) => void;
  resetActiveLocation: () => void;
};

const useLocationStore = create<LocationState, [["zustand/immer", never]]>(
  immer((set) => {
    return {
      activeLocation: DEFAULT_LOCATION,
      setActiveLocation: (location) =>
        set((state) => {
          state.activeLocation = location;
        }),
      resetActiveLocation: () =>
        set((state) => {
          state.activeLocation = DEFAULT_LOCATION;
        }),
    };
  })
);

export default useLocationStore;
