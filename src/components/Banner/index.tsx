import BannerVideo from '../../resources/videos/bannervideo.mp4';
import TopLeftImg from '../../resources/images/topleft.png';
import BottomRightImg from '../../resources/images/bottomright.png';
import { Image } from 'antd';

const Banner = () => {
  return (
    <div className='banner-wrapper'>
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
          <video autoPlay loop>
            <source src={BannerVideo} type='video/mp4' />
          </video>
        </div>
        {/* scale */}
        <div className='round-view scale'></div>
      </div>

      <Image src={TopLeftImg} className='top-left' preview={false} />
      <Image src={BottomRightImg} className='bottom-right' preview={false} />
    </div>
  );
};

export default Banner;