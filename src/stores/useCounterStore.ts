import { create } from "zustand";

type CounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterState>(
  (
    set: (arg0: {
      (state: { count: number }): { count: number };
      (state: { count: number }): { count: number };
    }) => any
  ) => ({
    count: 0,
    increase: () =>
      set((state: { count: number }) => ({ count: state.count + 1 })),
    decrease: () =>
      set((state: { count: number }) => ({ count: state.count - 1 })),
    reset: () =>
      set((state: { count: number }) => ({ count: (state.count = 0) })),
  })
);

export default useCounterStore;
