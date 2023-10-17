import { Image } from 'antd';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { useEffect, useRef, useState } from 'react';
import { AnimationKey } from 'store/animation/useAnimationStore';
import processImg from 'resources/svg/process-img.svg';
import LoadingIcon from 'resources/svg/LoadingIcon';

import NFTModelImg from 'resources/images/image-aimodel-nft.png';
import NFTStatisticImg from 'resources/images/nft-statistic.png';

const Copyright = () => {
  const copyrightRef = useRef<HTMLDivElement>(null);
  const scrollIconRef = useRef<any>(null);

  const { active } = useScrollAnimation(AnimationKey.COPYRIGHT, copyrightRef, 0, false);

  useEffect(() => {
    scrollIconRef.current?.play();
  }, [scrollIconRef]);

  return (
    <div ref={copyrightRef} className='copyright-wrapper'>
      <div className='content'>
        <p className='title'>Onchain Copyright for Generative AI</p>
        <div className='detail '>
          <LoadingIcon />
          <div className='wrapper'>
            <p className='desc'>
              aiRight possesses a patented technology to detect on-chain infringement &amp; ensure an immutable proof of
              origin &amp; ownership for every creation on the platform
            </p>
            <div className='sample'>
              <div className='img-wrapper'>
                <img
                  src='https://data.airight.io/home/page/home-copyright-01-905%C3%97540.jpg'
                  className='img-big '
                  alt='image-aimodel-18'
                />
              </div>
              <div className='process'>
                <div className='left'>
                  <p className='title-sample'>The highest similarity rate</p>
                  <div className='divided'></div>
                  <div className='desc-sample'>
                    <p className='text-desc'>Risk of infringement</p>
                    <button className='btn-high' type='button'>
                      <span>High</span>
                    </button>
                  </div>
                </div>
                <div className='right '>
                  <div className='bounded'></div>
                  <div className='current'>
                    <Image src={processImg} preview={false} alt='processImg' />
                  </div>
                  <p className='value'>92%</p>
                </div>
              </div>
              <div className='statistic-nft '>
                <img alt='ship-under-sea01' src={NFTStatisticImg} />
              </div>
              <div className='ship '>
                <img alt='ship-under-sea' src={NFTModelImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
