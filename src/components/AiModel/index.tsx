import { DotLottiePlayer } from '@dotlottie/react-player';
import classNames from 'classnames';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { useEffect, useRef, useState } from 'react';
import bgAiModel from 'resources/images/bg-ai-model.png';
// import aiVideo from 'resources/videos/ai_model.lottie';
import { AnimationKey } from 'store/animation/useAnimationStore';

const AIModel = () => {
  const aimodelRef = useRef<HTMLDivElement>(null);

  const { active } = useScrollAnimation(AnimationKey.AIMODEL, aimodelRef, 0, false);

  const [hoverActive, setHoverActive] = useState(false);

  const scrollIconRef = useRef<any>(null);

  useEffect(() => {
    scrollIconRef.current?.play();
  }, [scrollIconRef]);

  return (
    <div ref={aimodelRef} className='aimodel-wrapper'>
      <div className='content'>
        <div className='top'>
          <div className='left'>
            <div className='ingredient'>Ingredient I</div>
            <div
              className={classNames('aimodel-text', {
                active: hoverActive,
              })}
              onMouseEnter={() => setHoverActive(true)}
              onMouseLeave={() => setHoverActive(false)}
            >
              AI models
              <div className='underline'></div>
            </div>
          </div>
          <div className='right' onMouseEnter={() => setHoverActive(true)} onMouseLeave={() => setHoverActive(false)}>
            <div aria-expanded='false' className='imgai'>
              <img src='https://data.airight.io/home/page/home-aimodel-01-240%C3%97260.jpg' alt='ai-model-16' />
            </div>
            <div className='tryit'>
              <a href='ai-model'>
                <p>Try it now</p>
                <div className='icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                    <path
                      d='M14.25 15.2847C13.875 15.2847 13.625 15.1597 13.375 14.9097L0.875 2.40967C0.375 1.90967 0.375 1.15967 0.875 0.659668C1.375 0.159668 2.125 0.159668 2.625 0.659668L15.125 13.1597C15.625 13.6597 15.625 14.4097 15.125 14.9097C14.875 15.1597 14.625 15.2847 14.25 15.2847Z'
                      fill='#fff'
                    ></path>
                    <path
                      d='M14.25 15.2847H3C2.25 15.2847 1.75 14.7847 1.75 14.0347C1.75 13.2847 2.25 12.7847 3 12.7847H13V2.78467C13 2.03467 13.5 1.53467 14.25 1.53467C15 1.53467 15.5 2.03467 15.5 2.78467V14.0347C15.5 14.7847 15 15.2847 14.25 15.2847Z'
                      fill='#fff'
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='left'>
            <div className='content'>
              <div className='title'>
                <p className='name'>Midjourney</p>
                <div className='highlight'>
                  <p
                    className={classNames('prompt', {
                      active: hoverActive,
                    })}
                  >
                    prompt to image
                  </p>
                </div>
              </div>
              <div className='desc'>
                Midjourney is a generative artificial intelligence program and service created and hosted by San
                Francisco-based ...
              </div>
              <a className='detail-link' href='ai-model'>
                <p>View detail</p>
              </a>
            </div>
            <div className='video'>
              <DotLottiePlayer src={'/ai_model.lottie'} autoplay loop hover></DotLottiePlayer>
            </div>
          </div>
          <div className='right'>
            <p>
              Are you ready to explore the limitless possibilities of AI? Join Midjourney and start your journey towards
              AI mastery
            </p>
            <div className='desc-scroll'>
              <p>Add ingredient II</p>

              <div className='down-icon'>
                <DotLottiePlayer src='/scrolldown_arrow.lottie' autoplay loop ref={scrollIconRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='bg-ai-model' src={bgAiModel} />
    </div>
  );
};

export default AIModel;
