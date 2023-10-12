import omit from 'lodash/omit';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface Authentication {
  address?: string;
  listAddress: any;
  authenticationToken: string;
}

interface AuthenticationAction {
  handleSetAddress: ({ address }: Pick<Authentication, 'address'>) => void;
  handleRemoveAddress: ({ address }: Pick<Authentication, 'address'>) => void;
  handleAddAddress: ({ address, signature }: Pick<Authentication, 'address'> & { signature: string }) => void;
  handleSetAuthenticationToken: (authenticationToken: Authentication['authenticationToken']) => void;
}

const initialState = {
  address: '',
  listAddress: {},
  authenticationToken: '',
};

const useAuthenticationStore = create<Authentication & AuthenticationAction>()(
  persist(
    immer((set) => ({
      //States
      ...initialState,

      //Actions
      handleSetAddress: ({ address }) => set({ address }),

      handleRemoveAddress: ({ address }) =>
        set((state) => {
          if (address) {
            state.listAddress = omit(state?.listAddress, [address]);
          }
          state.address = '';
        }),

      handleAddAddress: ({ address, signature }) =>
        set((state) => {
          state.address = address;

          if (address) {
            state.listAddress[address] = {
              address,
              signature,
            };
          }
        }),

      handleSetAuthenticationToken: (authenticationToken) => set({ authenticationToken }),
    })),
    {
      name: 'Authentication',
    },
  ),
);

export default useAuthenticationStore;
