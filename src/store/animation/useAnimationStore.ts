import create from 'zustand';

export enum AnimationKey {
  BANNER = 'banner',
  SLOGAN = 'slogan',
  FORMULA = 'formula',
  AIMODEL = 'aiModel',
  PROMPT = 'prompt',
  TOUCH = 'touch',
  AMAZING_CONTENT = 'amazingContent',
  COPYRIGHT = 'copyright',
  SUPPORT = 'support',
}

export type AnimationActiveState = {
  [AnimationKey.BANNER]: boolean;
  [AnimationKey.SLOGAN]: boolean;
  [AnimationKey.FORMULA]: boolean;
  [AnimationKey.AIMODEL]: boolean;
  [AnimationKey.PROMPT]: boolean;
  [AnimationKey.TOUCH]: boolean;
  [AnimationKey.AMAZING_CONTENT]: boolean;
  [AnimationKey.COPYRIGHT]: boolean;
  [AnimationKey.SUPPORT]: boolean;
};

export type AnimationActiveAction = {
  handleSetBannerAnimationActive: (banner: AnimationActiveState[AnimationKey.BANNER]) => void;
  handleSetSloganAnimationActive: (slogan: AnimationActiveState[AnimationKey.SLOGAN]) => void;
  handleSetFormulaAnimationActive: (formula: AnimationActiveState[AnimationKey.FORMULA]) => void;
  handleSetAiModelAnimationActive: (aiModel: AnimationActiveState[AnimationKey.AIMODEL]) => void;
  handleSetPromptAnimationActive: (prompt: AnimationActiveState[AnimationKey.AIMODEL]) => void;
  handleSetTouchAnimationActive: (touch: AnimationActiveState[AnimationKey.TOUCH]) => void;
  handleSetAmazingContentAnimationActive: (amazingContent: AnimationActiveState[AnimationKey.AMAZING_CONTENT]) => void;
  handleSetCopyrightAnimationActive: (copyright: AnimationActiveState[AnimationKey.COPYRIGHT]) => void;
  handleSetSupportAnimationActive: (support: AnimationActiveState[AnimationKey.SUPPORT]) => void;
  handleUpdateAnimationStatus: (statusActive: boolean, key: AnimationKey) => void;
};

const initialState: AnimationActiveState = {
  [AnimationKey.BANNER]: false,
  [AnimationKey.SLOGAN]: false,
  [AnimationKey.FORMULA]: false,
  [AnimationKey.AIMODEL]: false,
  [AnimationKey.PROMPT]: false,
  [AnimationKey.TOUCH]: false,
  [AnimationKey.AMAZING_CONTENT]: false,
  [AnimationKey.COPYRIGHT]: false,
  [AnimationKey.SUPPORT]: false,
};

const useActiveAnimationStore = create<AnimationActiveState & { actions: AnimationActiveAction }>()((set) => ({
  //States
  ...initialState,

  //Actions
  actions: {
    handleSetBannerAnimationActive: (banner) => set({ banner }),

    handleSetSloganAnimationActive: (slogan) => set({ slogan }),

    handleSetFormulaAnimationActive: (formula) => set({ formula }),

    handleSetAiModelAnimationActive: (aiModel) => set({ aiModel }),

    handleSetPromptAnimationActive: (prompt) => set({ prompt }),

    handleSetTouchAnimationActive: (touch) => set({ touch }),

    handleSetAmazingContentAnimationActive: (amazingContent) => set({ amazingContent }),

    handleSetCopyrightAnimationActive: (copyright) => set({ copyright }),

    handleSetSupportAnimationActive: (support) => set({ support }),

    handleUpdateAnimationStatus: (statusActive, key) => {
      set({
        [key]: statusActive,
      });
    },
  },
}));

export default useActiveAnimationStore;
