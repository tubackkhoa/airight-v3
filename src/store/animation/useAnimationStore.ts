import create from 'zustand';

export enum AnimationKey {
  BANNER = 'banner',
  SLOGAN = 'slogan',
  FORMULA = 'formula',
  AIMODEL = 'aiModel',
}

export type AnimationActiveState = {
  [AnimationKey.BANNER]: boolean;
  [AnimationKey.SLOGAN]: boolean;
  [AnimationKey.FORMULA]: boolean;
  [AnimationKey.AIMODEL]: boolean;
};

export type AnimationActiveAction = {
  handleSetBannerAnimationActive: (banner: AnimationActiveState[AnimationKey.BANNER]) => void;
  handleSetSloganAnimationActive: (slogan: AnimationActiveState[AnimationKey.SLOGAN]) => void;
  handleSetFormulaAnimationActive: (formula: AnimationActiveState[AnimationKey.FORMULA]) => void;
  handleSetAiModelAnimationActive: (aiModel: AnimationActiveState[AnimationKey.AIMODEL]) => void;
  handleUpdateAnimationStatus: (statusActive: boolean, key: AnimationKey) => void;
};

const initialState: AnimationActiveState = {
  banner: false,
  slogan: false,
  formula: false,
  aiModel: false,
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

    handleUpdateAnimationStatus: (statusActive, key) => {
      set({
        [key]: statusActive,
      });
    },
  },
}));

export default useActiveAnimationStore;
