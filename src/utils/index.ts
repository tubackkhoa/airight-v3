import { AnimationKey } from 'store/animation/useAnimationStore';

export const scrollToView = (id: AnimationKey) => {
  const section = document.querySelector(`#${id}`);
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
