import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BookIcon from 'resources/svg/BookIcon';
import FeedbackIcon from 'resources/svg/FeedbackIcon';
import PlusIcon from 'resources/svg/PlusIcon';
import SquareIcon from 'resources/svg/SquareIcon';
import { useGetAnimationStatusByKey } from 'store/animation/selector';
import { AnimationKey } from 'store/animation/useAnimationStore';
import { scrollToView } from 'utils';

const Control = () => {
  const controlRef = useRef<any>(null);

  const activeFormula = useGetAnimationStatusByKey(AnimationKey.FORMULA);
  const activeAiModel = useGetAnimationStatusByKey(AnimationKey.AIMODEL);
  const activePrompt = useGetAnimationStatusByKey(AnimationKey.PROMPT);
  const activeTouch = useGetAnimationStatusByKey(AnimationKey.TOUCH);
  const activeAmazing = useGetAnimationStatusByKey(AnimationKey.AMAZING_CONTENT);
  const activeCopyright = useGetAnimationStatusByKey(AnimationKey.COPYRIGHT);

  return (
    <div className='control-wrapper'>
      <div
        className={classNames('navigate', {
          hidden: activeCopyright,
        })}
      >
        <div
          className={classNames('formula', {
            visible: activeAiModel || activePrompt || activeTouch || activeAmazing,
          })}
        >
          <div className='btn-nav active' onClick={() => scrollToView(AnimationKey.AIMODEL)}>
            <p className='step-name'>AI Models</p>
          </div>
          <PlusIcon fill={activePrompt ? '#DA613A' : '#9DA3B5'} />
          <div
            className={classNames('btn-nav', {
              active: activePrompt,
            })}
            onClick={() => scrollToView(AnimationKey.PROMPT)}
          >
            <p className='step-name'>Creative Prompts</p>
          </div>
          <PlusIcon fill={activeTouch ? '#DA613A' : '#9DA3B5'} />
          <div
            className={classNames('btn-nav', {
              active: activeTouch,
            })}
            onClick={() => scrollToView(AnimationKey.TOUCH)}
          >
            <p className='step-name'>A touch of luck</p>
          </div>
          <div
            className={classNames('equal', {
              active: activeAmazing,
            })}
          >
            =
          </div>
          <div
            className={classNames('btn-nav', {
              active: activeAmazing,
            })}
            onClick={() => scrollToView(AnimationKey.AMAZING_CONTENT)}
          >
            <p className='step-name'>Amazing Content</p>
          </div>
        </div>
        <div
          className={classNames('vertical-nav', {
            hidden: !(activeFormula || activeAiModel || activePrompt || activeTouch || activeAmazing),
          })}
        >
          <div className='btn-square' onClick={() => scrollToView(AnimationKey.FORMULA)}>
            <BookIcon fill={activeFormula ? '#DA613A' : '#F8DFD8'} />
          </div>
          <div className='btn-square' onClick={() => scrollToView(AnimationKey.AIMODEL)}>
            <SquareIcon fill={activeAiModel ? '#DA613A' : '#F8DFD8'} />
          </div>
          <div className='btn-square' onClick={() => scrollToView(AnimationKey.PROMPT)}>
            <SquareIcon fill={activePrompt ? '#DA613A' : '#F8DFD8'} />
          </div>
          <div className='btn-square' onClick={() => scrollToView(AnimationKey.TOUCH)}>
            <SquareIcon fill={activeTouch ? '#DA613A' : '#F8DFD8'} />
          </div>
          <div className='btn-square' onClick={() => scrollToView(AnimationKey.AMAZING_CONTENT)}>
            <SquareIcon fill={activeAmazing ? '#DA613A' : '#F8DFD8'} />
          </div>
        </div>
      </div>

      <Link
        className={classNames('link', {
          visible: !activeCopyright && (activeAmazing || activeTouch),
        })}
        to='ai-model'
      >
        <p className='link-text'>START CREATING WITH AI</p>
      </Link>

      <div className='btn-feed'>
        <a target='_blank' href='https://forms.gle/ZHPd7uFaLMYWYobK8'>
          <FeedbackIcon />
        </a>
      </div>
    </div>
  );
};

export default Control;
