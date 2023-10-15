import { useRef, useState } from 'react';
import PLusIcon from 'resources/svg/PlusIcon';

const Prompt = () => {
  const promptRef = useRef<HTMLDivElement>(null);

//   const { active } = useScrollAnimation(AnimationKey.AIMODEL, aimodelRef, 0, true);

  const [hoverActive, setHoverActive] = useState(false);

  return (
    <div ref={promptRef} className='prompt-wrapper'>
      <div className="relative top-10 z-40 flex h-screen flex-col items-center justify-center pr-40 lg:top-[15%] lg:justify-start">
        <div className="relative z-20 mt-10 grid grid-rows-2">
          <div className="grid max-h-[300px] max-w-[1200px] grid-cols-4">
            <div>
              </div>
              <div className="relative right-[50%] top-[20%] inline-flex w-[22rem] flex-col">
                <div className="relative">
                  <div className="text-24 font-light text-orange-500 sm:text-12">Ingredient II</div>
                  <div className="relative mb-8 origin-left text-[62px] font-semibold leading-[78px] text-black duration-500 sm:!text-[20px] lg:text-[24px] lg:leading-[50px] ">Creative prompts
                  <div className="absolute -bottom-[20px] h-[2px] w-full bg-[#DA613A] transition-opacity duration-500 sm:hidden lg:bottom-[5px] lg:w-1/2 opacity-0">
                    </div></div></div></div>
                    <div className="relative flex items-center justify-center p-9 sm:opacity-0">
                      <div aria-expanded="false" className="h-full w-full aria-expanded:relative ">
                        <img src="https://data.airight.io/home/page/home-create-prompt-02-228%C3%97228.jpg" className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-none aria-hidden:!opacity-0 h-full w-full" loading="eager" aria-hidden="false" alt="ai-model-110" data-loaded="true"/></div><div className="absolute top-0 h-[1px] w-[80%] bg-[#DEE1EB]">
                          </div><div className="absolute right-0 h-[80%] w-[1px] bg-[#DEE1EB]">
                            </div>
                            <div className="absolute bottom-0 h-[1px] w-[80%] bg-[#DEE1EB]">
                              </div>
                              <div className="absolute left-0 h-[80%] w-[1px] bg-[#DEE1EB]"></div>
                              <div className="absolute -right-5 -top-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 42 42" fill="none"><path d="M21 0.784668L41.5 21.2847L21 41.7847L0.5 21.2847L21 0.784668Z" fill="white"></path>
                                <PLusIcon />
                                  </div>
                                  <div className="absolute -bottom-5 -right-5">
                                    <PLusIcon /></div><div className="absolute -left-5 -top-5"><PLusIcon /></div><div className="absolute -bottom-5 -left-5"><PlusIcon /></div></div><div className="relative flex items-center justify-center p-9 sm:top-[150px] sm:h-[150px] sm:w-[150px]"><dotlottie-player src="/_next/static/media/prompt_mining.c42833d8.lottie" autoplay="true" loop="true"></dotlottie-player><div className="absolute top-0 h-[1px] w-[80%] bg-[#DEE1EB]"></div><div className="absolute right-0 h-[80%] w-[1px] bg-[#DEE1EB]"></div><div className="absolute bottom-0 h-[1px] w-[80%] bg-[#DEE1EB]"></div><div className="absolute left-0 h-[80%] w-[1px] bg-[#DEE1EB]"></div><div className="absolute -right-5 -top-5"><PlusIcon /></div><div className="absolute -bottom-5 -right-5"><PlusIcon /></div><div className="absolute -left-5 -top-5"><PlusIcon /></div><div className="absolute -bottom-5 -left-5"><PlusIcon /></div></div></div><div className="grid max-h-[300px] max-w-[1200px] grid-cols-4"><div></div><div className="relative flex items-center justify-center p-9 hover:cursor-pointer sm:h-[150px] sm:w-[150px]"><img alt="ai-model-110" loading="lazy" width="872" height="872" decoding="async" data-nimg="1" className="h-full w-full" src="/_next/static/media/create-prompts-01.b7f482f2.png" style="color: transparent;"><div className="absolute -left-10 top-20 z-10 flex w-[160px] items-center justify-center gap-2 rounded-[20px] bg-gray-100 px-3 py-[6px] text-16 font-semibold sm:opacity-0"><p className="text-gray-400">hover me</p></div><div className="absolute top-0 h-[1px] w-[80%] bg-[#DEE1EB]"></div><div className="absolute right-0 h-[80%] w-[1px] bg-[#DEE1EB]"></div><div className="absolute bottom-0 h-[1px] w-[80%] bg-[#DEE1EB]"></div><div className="absolute left-0 h-[80%] w-[1px] bg-[#DEE1EB]"></div><div className="absolute -right-5 -top-5"><PlusIcon /></div><div className="absolute -bottom-5 -right-5"><PlusIcon /></div><div className="absolute -left-5 -top-5"><PlusIcon /></div><div className="absolute -bottom-5 -left-5"><PlusIcon /></div></div><div className="col-span-2 inline-flex flex-col items-start gap-12 p-10 sm:!mt-[40%] sm:w-screen sm:gap-6 lg:absolute lg:mt-[25%] lg:px-20"><p className="w-full whitespace-pre-line text-20 font-normal sm:mt-10 sm:text-12">Boredom, meet your match! Say goodbye to monotony and hello to a world bursting with fresh ideas. Our diverse range of creative prompts will spark your creativity and challenge you to think outside the box.</p><div className="inline-flex items-center gap-3"><p className="text-[20px] font-light text-orange-500 lg:text-15">Add ingredient III</p><div className="w-8 sm:w-6"><dotlottie-player src="/_next/static/media/scrolldown_arrow.1186c108.lottie" autoplay="true" loop="true"></dotlottie-player></div></div></div></div></div><img alt="bgAiModel" loading="lazy" width="1048" height="1036" decoding="async" data-nimg="1" className="absolute bottom-0 right-0 z-10 w-2/3 lg:hidden" src="/_next/static/media/bg-ai-model.871a653a.png" style="color: transparent;"></div>
    </div>

  );
};

export default Prompt;
