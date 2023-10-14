import create from 'zustand';

interface AnimationActiveState {
    banner: boolean;
    sologan: boolean;
    formula: boolean;
}

interface AnimationActiveAction {
    handleSetBannerAnimationActive: ({ banner }: Pick<AnimationActiveState, 'banner'>) => void;
    handleSetSologanAnimationActive: ({ sologan }: Pick<AnimationActiveState, 'sologan'>) => void;
    handleSetFormulaAnimationActive: ({ formula }: Pick<AnimationActiveState, 'formula'>) => void;
}

const initialState: AnimationActiveState = {
    banner: false,
    sologan: false,
    formula: false,
};

const useActiveAnimationStore = create<AnimationActiveState & { actions: AnimationActiveAction }>()((set) => ({
    //States
    ...initialState,

    //Actions
    actions: {

        handleSetBannerAnimationActive: ({ banner }) => set({ banner }),

        handleSetSologanAnimationActive: ({ sologan }) => set({ sologan }),

        handleSetFormulaAnimationActive: ({ formula }) => set({ formula }),
    }

}))

export default useActiveAnimationStore;
