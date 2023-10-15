import { DotLottiePlayer } from '@dotlottie/react-player';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { useEffect, useRef, useState } from 'react';
import bgAiModel from 'resources/images/bg-ai-model.png';
import PlusIcon from 'resources/svg/PlusIcon';
import CreatePromptImg01 from 'resources/images/create-prompts-01.png';
import CreatePromptImg03 from 'resources/images/create-prompts-03.png';
import { AnimationKey } from 'store/animation/useAnimationStore';
import classNames from 'classnames';

const Prompt = () => {
  const promptRef = useRef<HTMLDivElement>(null);
  const promptMintingRef = useRef<any>(null);
  const scrollIconRef = useRef<any>(null);

  const { active } = useScrollAnimation(AnimationKey.PROMPT, promptRef, 0, false);

  const [hoverActive, setHoverActive] = useState(false);

  useEffect(() => {
    promptMintingRef.current?.play();
  }, [promptMintingRef]);

  useEffect(() => {
    scrollIconRef.current?.play();
  }, [scrollIconRef]);

  return (
    <div ref={promptRef} className='prompt-wrapper'>
      <div className='content'>
        <div className='top'>
          <div></div>
          <div className='ingredient'>
            <div onMouseEnter={() => setHoverActive(true)} onMouseLeave={() => setHoverActive(false)}>
              <div className='title'>Ingredient II</div>
              <div
                className={classNames('desc', {
                  active: hoverActive,
                })}
              >
                Creative prompts
                <div className='underline'></div>
              </div>
            </div>
          </div>
          <div className='img-wrapper'>
            <div className='img-content'>
              <img src='https://data.airight.io/home/page/home-create-prompt-02-228%C3%97228.jpg' alt='ai-model-110' />
            </div>
            <div className='border border1'></div>
            <div className='border border2'></div>
            <div className='border border3'></div>
            <div className='border border4'></div>
            <div className='plus plus1'>
              <PlusIcon />
            </div>
            <div className='plus plus2'>
              <PlusIcon />
            </div>
            <div className='plus plus3'>
              <PlusIcon />
            </div>
            <div className='plus plus4'>
              <PlusIcon />
            </div>
          </div>
          <div className='video'>
            {hoverActive ? (
              <img alt='create-prompt' src={CreatePromptImg01} className='dot-img' />
            ) : (
              <DotLottiePlayer src={'/prompt_mining.lottie'} autoplay loop ref={promptMintingRef}></DotLottiePlayer>
            )}
            <div className='border border1'></div>
            <div className='border border2'></div>
            <div className='border border3'></div>
            <div className='border border4'></div>
            <div className='plus plus1'>
              <PlusIcon />
            </div>
            <div className='plus plus2'>
              <PlusIcon />
            </div>
            <div className='plus plus3'>
              <PlusIcon />
            </div>
            <div className='plus plus4'>
              <PlusIcon />
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div></div>
          <div className='right' onMouseEnter={() => setHoverActive(true)} onMouseLeave={() => setHoverActive(false)}>
            <img alt='ai-model-110' src={hoverActive ? CreatePromptImg03 : CreatePromptImg01} />
            <div className='badge'>
              <p
                className={classNames('text', {
                  hoverActive,
                })}
              >
                {hoverActive ? '+ greek goddess ' : 'hover me'}
              </p>
            </div>
            <div className='border border1'></div>
            <div className='border border2'></div>
            <div className='border border3'></div>
            <div className='border border4'></div>
            <div className='plus plus1'>
              <PlusIcon />
            </div>
            <div className='plus plus2'>
              <PlusIcon />
            </div>
            <div className='plus plus3'>
              <PlusIcon />
            </div>
            <div className='plus plus4'>
              <PlusIcon />
            </div>
          </div>
          <div className='left'>
            <p className='text'>
              Boredom, meet your match! Say goodbye to monotony and hello to a world bursting with fresh ideas. Our
              diverse range of creative prompts will spark your creativity and challenge you to think outside the box.
            </p>
            <div className='next'>
              <p>Add ingredient III</p>
              <div className='down-icon'>
                <DotLottiePlayer src='/scrolldown_arrow.lottie' autoplay loop ref={scrollIconRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img alt='bgAiModel' className='bg-img' src={bgAiModel} />
    </div>
  );
};

export default Prompt;
