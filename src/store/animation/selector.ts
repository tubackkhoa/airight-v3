import useActiveAnimationStore, { AnimationKey } from './useAnimationStore';

// Actions
export const useAnimationActions = () => useActiveAnimationStore((state) => state.actions);

// [get]
export const useGetAnimationStatusByKey = (key: AnimationKey) => useActiveAnimationStore((state) => state[key]);
export const useGetBannerAnimationActive = () => useActiveAnimationStore((state) => state.banner);
export const useGetSloganAnimationActive = () => useActiveAnimationStore((state) => state.slogan);
export const useGetFormulaAnimationActive = () => useActiveAnimationStore((state) => state.formula);
export const useGetAIModelAnimationActive = () => useActiveAnimationStore((state) => state.aiModel);
export const useGetPromptAnimationActive = () => useActiveAnimationStore((state) => state.prompt);
export const useGetTouchAnimationActive = () => useActiveAnimationStore((state) => state.touch);
export const useGetAmazingContentAnimationActive = () => useActiveAnimationStore((state) => state.amazingContent);
export const useGetCopyrightAnimationActive = () => useActiveAnimationStore((state) => state.copyright);
export const useGetSupportAnimationActive = () => useActiveAnimationStore((state) => state.support);
// export const useGetBannerAnimationActive = () => useActiveAnimationStore((state) => state.banner);
