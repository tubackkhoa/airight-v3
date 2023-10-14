import useActiveAnimationStore from "./useAnimationStore";

// Actions
export const useAnimationActions = () => useActiveAnimationStore((state) => state.actions);

// [get] - banner
export const useGetBannerAnimationActive = () => useActiveAnimationStore((state) => state.banner);