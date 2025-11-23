import {
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
  type WindowConfigKey,
  type Windows,
} from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type WindowState = {
  windows: Windows;
  nextZIndex: number;
  openWindow: (windowKey: WindowConfigKey, data?: unknown) => void;
  closeWindow: (windowKey: WindowConfigKey) => void;
  focusWindow: (windowKey: WindowConfigKey) => void;
};

const useWindowStore = create<WindowState, [["zustand/immer", never]]>(
  immer((set) => {
    return {
      windows: WINDOW_CONFIG,
      nextZIndex: INITIAL_Z_INDEX + 1,
      openWindow: (windowKey: WindowConfigKey, data = null) =>
        set((state) => {
          const win = state.windows[windowKey];
          win.isOpen = true;
          win.zIndex = state.nextZIndex;
          win.data = data ?? win.data;
          state.nextZIndex++;
        }),
      closeWindow: (windowKey: WindowConfigKey) =>
        set((state) => {
          const win = state.windows[windowKey];
          win.isOpen = false;
          win.zIndex = INITIAL_Z_INDEX;
          win.data = null;
        }),
      focusWindow: (windowKey: WindowConfigKey) =>
        set((state) => {
          const win = state.windows[windowKey];
          win.zIndex = state.nextZIndex++;
        }),
    };
  })
);

export default useWindowStore;
