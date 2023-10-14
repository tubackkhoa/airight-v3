import useActiveAnimationStore, { AnimationKey } from './useAnimationStore';

// Actions
export const useAnimationActions = () => useActiveAnimationStore((state) => state.actions);

// [get]
export const useGetAnimationStatusByKey = (key: AnimationKey) => useActiveAnimationStore((state) => state[key]);
export const useGetBannerAnimationActive = () => useActiveAnimationStore((state) => state.banner);
export const useGetSloganAnimationActive = () => useActiveAnimationStore((state) => state.banner);
export const useGetFormulaAnimationActive = () => useActiveAnimationStore((state) => state.formula);
// export const useGetBannerAnimationActive = () => useActiveAnimationStore((state) => state.banner);
