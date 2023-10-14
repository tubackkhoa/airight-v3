import BannerVideo from '../../resources/videos/bannervideo.mp4';
import TopLeftImg from '../../resources/images/topleft.png';
import BottomRightImg from '../../resources/images/bottomright.png';
import BgSimpleRecipe from '../../resources/images/bgSimpleRecipe.png';
import { Image } from 'antd';
import { useEffect, useRef } from 'react';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import classNames from 'classnames';

const Banner = () => {
  const banner = useRef<HTMLElement>(null);
  const endingSection = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { active: activeVideo } = useScrollAnimation(banner, 100, false);
  const { active: activeEnding } = useScrollAnimation(endingSection, 0, true);

  console.log(activeEnding, 'activeEnding');
  console.log(activeVideo, 'activeVideo');


  useEffect(() => {
    if (activeVideo) {
      videoRef.current?.play();
    }
    else {
      videoRef.current?.pause();
    }
  }, [activeVideo])

  return (
    <div className='banner-section' >
      <section ref={banner} className='banner-wrapper'>
        <div className='text-wrapper'>
          <p className='title'>
            The Future of Generative AI
          </p>
          <div className='desc'>
            Join our growing community of 1000+ users and gain a chance to earn for your creative work
          </div>
          <div className='btn-group'>
            <a href='ai-model'>
              <button
                className='btn-create'
                type='button'
              >
                Start creating for free
              </button>
            </a>
            <a href='marketplace'>
              <button
                className='btn-browser'
                type='button'
              >
                Browse prompts &amp; content
              </button>
            </a>
          </div>
        </div>

        <div className='banner-video'>
          <div className='video-wrapper'>
            <video loop ref={videoRef} muted>
              <source src={BannerVideo} type='video/mp4' />
            </video>
          </div>
          {/* scale */}
          <div className={classNames('round-view', {
            'scale-up': activeVideo && !activeEnding,
            'scale-down': activeEnding,
            // 'hidden': !activeEnding,
          })} ></div>
        </div>

        <Image src={TopLeftImg} className='top-left' preview={false} />
        <Image src={BottomRightImg} className='bottom-right' preview={false} />
      </section>
      <section>
        <h1>Section Two</h1>
      </section>
      <section ref={endingSection}>
        <div className="ending-wrapper">
          <div className="text">
            <p className="top">
              The simple recipe
            </p>
            <p className="bottom">
              to create
              <span className="highlight">
                amazing content
              </span>
            </p>
          </div>

          <img alt="bgSimpleRecipe"
            className="bg-simple"
            src={BgSimpleRecipe}
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
