import { DotLottiePlayer } from '@dotlottie/react-player';
import { Image } from 'antd';
import classNames from 'classnames';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { useEffect, useRef } from 'react';
import DownIcon from 'resources/svg/DownIcon';
import { useGetAnimationStatusByKey } from 'store/animation/selector';
import { AnimationKey } from 'store/animation/useAnimationStore';
import BgSimpleRecipe from '../../resources/images/bgSimpleRecipe.png';
import BottomRightImg from '../../resources/images/bottomright.png';
import TopLeftImg from '../../resources/images/topleft.png';
import BannerVideo from '../../resources/videos/bannervideo.mp4';

const Banner = () => {
  const banner = useRef<HTMLElement>(null);
  const sloganSection = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { active: activeVideo } = useScrollAnimation(AnimationKey.BANNER, banner, 100, false);
  const { active: activeSlogan } = useScrollAnimation(AnimationKey.SLOGAN, sloganSection, 0, true);

  // console.log('activeSlogan', activeSlogan);
  // console.log('activeVideo', activeVideo);

  const activeFormula = useGetAnimationStatusByKey(AnimationKey.FORMULA);
  const activeCopyright = useGetAnimationStatusByKey(AnimationKey.COPYRIGHT);

  const scrollIconRef = useRef<any>(null);

  useEffect(() => {
    scrollIconRef.current?.play();
  }, [scrollIconRef]);

  useEffect(() => {
    if (activeVideo) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [activeVideo]);

  return (
    <div className='banner-section'>
      <section ref={banner} className='banner-wrapper'>
        <div className='text-wrapper'>
          <p className='title'>The Future of Generative AI</p>
          <div className='desc'>
            Join our growing community of 1000+ users and gain a chance to earn for your creative work
          </div>
          <div className='btn-group'>
            <a href='ai-model'>
              <button className='btn-create' type='button'>
                Start creating for free
              </button>
            </a>
            <a href='marketplace'>
              <button className='btn-browser' type='button'>
                Browse prompts &amp; content
              </button>
            </a>
          </div>
        </div>

        <div className='next'>
          <p>Scroll to Discover</p>
          <div className='down-icon'>
            <DotLottiePlayer src='/scrolldown_arrow.lottie' autoplay loop ref={scrollIconRef} />
          </div>
        </div>

        <div
          className={classNames('banner-video', {
            hidden: activeCopyright, // || activeFormula,
          })}
        >
          <div className='video-wrapper'>
            <video loop ref={videoRef} muted>
              <source src={BannerVideo} type='video/mp4' />
            </video>
          </div>
          {/* scale */}
          <div
            className={classNames('round-view', {
              'scale-up': activeVideo && !activeSlogan,
              'scale-down': activeSlogan,
              // hidden: activeFormula,
            })}
          ></div>
        </div>

        <Image src={TopLeftImg} className='top-left' preview={false} />
        <Image src={BottomRightImg} className='bottom-right' preview={false} />
      </section>
      <section className='show-video'>
        <div>
          <p className='next'>Scroll to Skip</p>
          <div className='scroll-icon flex h-8 w-8 items-center justify-center rounded-[100px] border border-solid border-white p-[7px]'>
            <DownIcon />
          </div>
        </div>
        <h1>Section Two</h1>
      </section>
      <section ref={sloganSection}>
        <div className='ending-wrapper'>
          <div className='text'>
            <p className='top'>The simple recipe</p>
            <p className='bottom'>
              to create
              <span className='highlight'>amazing content</span>
            </p>
          </div>

          <img alt='bgSimpleRecipe' className='bg-simple' src={BgSimpleRecipe} />
        </div>
      </section>
    </div>
  );
};

export default Banner;
