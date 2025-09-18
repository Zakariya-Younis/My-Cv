import clsx from 'clsx';

import { QuoteIcon, ExternalLink, SparklesIcon } from '@/components/Icons';

function Quote() {
  return (
    <div className={clsx('flex flex-col gap-6')}>
      <blockquote
        className={clsx(
          'flex gap-2 pt-2 text-3xl text-slate-500',
          'md:text-4xl lg:pt-0 lg:text-5xl',
          'dark:text-slate-400'
        )}
      >
        <QuoteIcon
          className={clsx(
            '-mt-1 h-10 text-slate-300',
            'md:-mt-3 md:h-16 lg:h-24',
            'dark:text-slate-800'
          )}
        />
        <span className={clsx('flex flex-col')}>
          <span className={clsx('leading-[1.15]')}>
            <em>Beautiful</em>{' '}
          </span>
          <span
            className={clsx('flex items-center gap-2 leading-[1.15]', 'lg:gap-4')}
          >
            <span
              className={clsx(
                'mt-1 h-0.5 w-8 rounded-full bg-slate-400',
                'lg:h-1 lg:w-24',
                'dark:bg-slate-600'
              )}
            />
            <span>
              <strong
                className={clsx(
                  'font-extrabold text-slate-600',
                  'dark:text-slate-300'
                )}
              >
                inside
              </strong>{' '}
              and{' '}
              <strong
                className={clsx(
                  'font-extrabold text-slate-600',
                  'dark:text-slate-300'
                )}
              >
                out{' '}
              </strong>
            </span>
            <span
              className={clsx(
                'mt-1 h-0.5 w-6 rounded-full bg-slate-400',
                'lg:h-1 lg:w-14',
                'dark:bg-slate-600'
              )}
            />
          </span>
          <span className={clsx('leading-[1.15]')}>
            is a{' '}
            <strong
              className={clsx(
                'relative font-extrabold text-slate-600',
                'dark:text-slate-300'
              )}
            >
              <span
                className={clsx(
                  'absolute -left-0.5 bottom-0 right-0 top-1 z-[-1] rounded-md bg-slate-100 px-1',
                  'lg:-left-1.5 lg:-right-0.5 lg:bottom-0 lg:top-2',
                  'dark:bg-slate-800'
                )}
              />
              must.
            </strong>
          </span>
        </span>
      </blockquote>

      <div
        className={clsx(
          'rounded-2xl border bg-white/5 p-4 shadow-lg backdrop-blur',
          'border-divider-light/80 dark:border-divider-dark/60 dark:bg-slate-900/30'
        )}
      >
        <div className={clsx('mb-3 flex items-center gap-2')}>
          <span
            className={clsx(
              'inline-flex items-center gap-1 rounded-full bg-accent-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider',
              'text-accent-600 dark:text-accent-400'
            )}
          >
            <SparklesIcon className={clsx('h-3.5 w-3.5')} /> Research
          </span>
        </div>
        <ul className={clsx('grid gap-3 md:grid-cols-2')}>
          <li
            className={clsx(
              'group rounded-xl border bg-white/40 p-4 transition',
              'border-divider-light/70 hover:border-accent-500/50',
              'dark:border-divider-dark/60 dark:bg-slate-900/40'
            )}
          >
            <div className={clsx('text-sm font-semibold text-slate-800', 'dark:text-slate-200')}>
              Exploring Incremental Classifiers for Predicting Student Performance Across Semesters
            </div>
            <a
              className={clsx(
                'mt-2 inline-flex items-center gap-1 text-xs font-semibold',
                'text-accent-700 hover:underline dark:text-accent-400'
              )}
              href="https://ieeexplore.ieee.org/document/10845727"
              target="_blank"
              rel="noreferrer"
            >
              View on IEEE Xplore <ExternalLink className={clsx('h-3 w-3')} />
            </a>
          </li>
          <li
            className={clsx(
              'group rounded-xl border bg-white/40 p-4 transition',
              'border-divider-light/70 hover:border-accent-500/50',
              'dark:border-divider-dark/60 dark:bg-slate-900/40'
            )}
          >
            <div className={clsx('text-sm font-semibold text-slate-800', 'dark:text-slate-200')}>
              Student Academic Performance Prediction System
            </div>
            <a
              className={clsx(
                'mt-2 inline-flex items-center gap-1 text-xs font-semibold',
                'text-accent-700 hover:underline dark:text-accent-400'
              )}
              href="https://jisem-journal.com/index.php/journal/article/view/3680/1596"
              target="_blank"
              rel="noreferrer"
            >
              Read Journal Article <ExternalLink className={clsx('h-3 w-3')} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Quote;
