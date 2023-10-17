import { Image } from 'antd';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { useRef } from 'react';
import { AnimationKey } from 'store/animation/useAnimationStore';

import { Link } from 'react-router-dom';
import logoName from 'resources/svg/logoName.svg';
import { MENU_LIST, SOCIAL_LIST } from './constants';

const Support = () => {
  const supportRef = useRef<HTMLDivElement>(null);

  const { active } = useScrollAnimation(AnimationKey.SUPPORT, supportRef, 0, false);

  return (
    <div ref={supportRef} className='support-wrapper'>
      <div className='top'>
        <div className='form-wrapper'>
          <p className='title '>Newsletter</p>
          <p className='subtitile'>Stay updated for the lastest news, drops and programs.</p>
          <form autoComplete='off'>
            <input placeholder='Email address' type='email' required />
            <button
              className='flex w-[232px] items-center justify-center rounded-[100px] bg-orange-500 px-5 py-[10px] text-[15px] font-semibold text-white sm:w-[200px]'
              type='submit'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='bottom '>
        <footer>
          <div className='content'>
            <div className='info'>
              {/* logo */}
              <Image src={logoName} preview={false} width={121} height={52} />
              <p className='desc'>
                Step into the future of creativity, where AI reignites the spark of imagination. Witness the marvels of
                AI-generated masterpieces, each a result of serendipitous discovery and safeguarded through on-chain
                preservation.
              </p>
              <p className='powered'>Powered by Oraichain Labs</p>
            </div>

            <div className='menu-list'>
              {MENU_LIST.map((e) => {
                return (
                  <div key={e.name} className='menu-col'>
                    <p className='menu-title'>{e.name}</p>
                    {e.items.map((menu) => {
                      return (
                        <Link to={menu.href} key={menu.key} className='item' target={menu.target}>
                          {menu.text}
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          <div className='social-wrapper flex flex-col items-center pt-24 lg:p-0'>
            <div>
              {SOCIAL_LIST.map((e) => (
                <Link target='_blank' to={e.link}>
                  <e.Icon />
                </Link>
              ))}
            </div>
            <p className='copyright'>©2020 - 2023 Oraichain Labs. All rights reserved. Privacy Policy</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Support;
