import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { GitHubIcon, NpmIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

import throwYourTweetImg from '@/assets/image/Throw Your Tweet.png';
import betterHealthImg from '@/assets/image/better-health.png';
import betterIcon from '@/assets/image/Better.png';
import afaqIcon from '@/assets/image/AFAQ.png';
import afaqScreen from '@/assets/image/AFAQplatform.png.png';
import throwIcon from '@/assets/image/ThroW.png';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'github' | 'npm' | 'afaq'>('github');

  return (
    <>
      <SectionTitle
        title="Selected Projects"
        caption="Portfolio"
        description="A few projects across AI/ML, web, and mobile."
      />
      <SectionContent>
        <div className={clsx('flex flex-col-reverse gap-6', 'sm:gap-8 lg:flex-row lg:gap-12')}> 
          <div className={clsx('flex w-full flex-col gap-3 pt-2', 'lg:flex-1 lg:pt-8')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Better Health System (React, MongoDB)"
                icon={
                  <Image
                    src={betterIcon}
                    alt="Better Health System"
                    width={64}
                    height={64}
                    className={clsx('my-2 rounded-md')}
                  />
                }
                description="A health system web app using React, HTML, JavaScript, Bootstrap, and MongoDB."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
              <SectionButton
                title="Throw Your Tweet (Flutter, Firebase)"
                icon={
                  <Image
                    src={throwIcon}
                    alt="Throw Your Tweet"
                    width={64}
                    height={64}
                    className={clsx('my-2 rounded-md')}
                  />
                }
                description="Mobile app built with Flutter and Firebase for real-time features."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />
              <SectionButton
                title="AFAQ Platform"
                icon={
                  <Image
                    src={afaqIcon}
                    alt="AFAQ"
                    width={64}
                    height={64}
                    className={clsx('my-2 rounded-md')}
                  />
                }
                description="Collaborative learning platform with community Q&A, AI grade predictions, and real-time tools."
                active={currentState === 'afaq'}
                onClick={() => setCurrentState('afaq')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('')}> 
              <div className={clsx('w-full rounded-xl border bg-white/70 p-2 backdrop-blur', 'sm:h-[360px] sm:p-4 lg:h-[400px] lg:w-[600px]')}>
                <AppWindow type="browser" browserTabs={[]}> 
                  {currentState === 'github' && (
                    <div className={clsx('p-6 text-sm')}>
                      <h3 className={clsx('mb-4 text-lg font-bold')}>Better Health System</h3>
                      <div className={clsx('relative h-[300px] w-full overflow-hidden rounded-xl')}>
                        <Image
                          src={betterHealthImg}
                          alt="Better Health System"
                          fill
                          className={clsx('object-cover')}
                          priority
                        />
                      </div>
                      <p className={clsx('mt-3')}>React, HTML, JavaScript, MongoDB, Bootstrap.</p>
                    </div>
                  )}
                  {currentState === 'npm' && (
                    <div className={clsx('p-6 text-sm')}>
                      <h3 className={clsx('mb-4 text-lg font-bold')}>Throw Your Tweet</h3>
                      <div className={clsx('relative h-[300px] w-full overflow-hidden rounded-xl')}>
                        <Image
                          src={throwYourTweetImg}
                          alt="Throw Your Tweet"
                          fill
                          className={clsx('object-cover')}
                          priority
                        />
                      </div>
                      <p className={clsx('mt-3')}>Flutter, Dart, Firebase for real-time data.</p>
                    </div>
                  )}
                  {currentState === 'afaq' && (
                    <div className={clsx('p-6 text-sm')}>
                      <h3 className={clsx('mb-4 text-lg font-bold')}>AFAQ Platform</h3>
                      <div className={clsx('relative h-[300px] w-full overflow-hidden rounded-xl')}>
                        <Image
                          src={afaqScreen}
                          alt="AFAQ Platform Screenshot"
                          fill
                          className={clsx('object-cover')}
                          priority
                        />
                      </div>
                      <p className={clsx('mt-3')}>
                        A collaborative learning platform with interactive Q&amp;A, AI‑powered grade
                        predictions, and real‑time collaboration to simplify learning and improve outcomes.
                      </p>
                    </div>
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
      <SectionContent>
        <div className={clsx('mt-8 text-sm')}>
          <h3 className={clsx('mb-2 text-lg font-bold')}>AI/ML Projects</h3>
          <ul className={clsx('list-disc pl-6')}>
            <li>Video game ESRB rating predictor — accuracy ~73% (Python).</li>
            <li>
              Student Grade Prediction (incremental model) —
              <a className={clsx('ml-1 underline')} href="https://student-prediction-front.onrender.com/" target="_blank" rel="noreferrer">Live</a>
            </li>
            <li>
              Research: Exploring Incremental Classifiers for Predicting Student Performance Across Semesters —
              <a className={clsx('ml-1 underline')} href="https://ieeexplore.ieee.org/document/10845727" target="_blank" rel="noreferrer">IEEE Xplore</a>
            </li>
            <li>
              Student Academic Performance Prediction System —
              <a className={clsx('ml-1 underline')} href="https://jisem-journal.com/index.php/journal/article/view/3680/1596" target="_blank" rel="noreferrer">Journal</a>
            </li>
          </ul>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
