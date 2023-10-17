import AIModel from 'components/AiModel';
import AmazingContent from 'components/AmazingContent';
import Banner from 'components/Banner';
import Control from 'components/Control';
import Copyright from 'components/Copyright';
import Formula from 'components/Formula';
import Prompt from 'components/Prompt';
import Support from 'components/Support';
import Touch from 'components/Touch';
import { AnimationKey } from 'store/animation/useAnimationStore';

const Home = () => {
  return (
    <div className='homepage'>
      <Control />
      <Banner />
      <section id={AnimationKey.FORMULA}>
        <Formula />
        <h1>Section Four</h1>
      </section>
      <section id={AnimationKey.AIMODEL}>
        <AIModel />
        <h1>Section Five</h1>
      </section>
      <section id={AnimationKey.PROMPT}>
        <Prompt />
        <h1>Section 6</h1>
      </section>
      <section id={AnimationKey.TOUCH}>
        <Touch />
        <h1>Section 7</h1>
      </section>
      <section id={AnimationKey.AMAZING_CONTENT}>
        <AmazingContent />
        <h1>Section 8</h1>
      </section>
      <section>
        <Copyright />
        <h1>Section 9</h1>
      </section>
      <section>
        <Support />
        <h1>Section 10</h1>
      </section>
    </div>
  );
};

export default Home;
