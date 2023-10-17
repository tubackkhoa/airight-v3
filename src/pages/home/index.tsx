import AIModel from 'components/AiModel';
import AmazingContent from 'components/AmazingContent';
import Banner from 'components/Banner';
import Copyright from 'components/Copyright';
import Formula from 'components/Formula';
import Prompt from 'components/Prompt';
import Support from 'components/Support';
import Touch from 'components/Touch';

const Home = () => {
  return (
    <div className='homepage'>
      <Banner />
      <section>
        <Formula />
        <h1>Section Four</h1>
      </section>
      <section>
        <AIModel />
        <h1>Section Five</h1>
      </section>
      <section>
        <Prompt />
        <h1>Section 6</h1>
      </section>
      <section>
        <Touch />
        <h1>Section 7</h1>
      </section>
      <section>
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
