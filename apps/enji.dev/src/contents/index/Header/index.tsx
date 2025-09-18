import clsx from 'clsx';

import HeaderCta from '@/contents/index/Header/HeaderCta';
import HeaderImage from '@/contents/index/Header/HeaderImage';
import HeaderTechStack from '@/contents/index/Header/HeaderTechStack';
import HeaderTitle from '@/contents/index/Header/HeaderTitle';

function Header() {
  return (
    <header
      id="page-header"
      className={clsx(
        'background-grid background-grid--fade-out pb-20 pt-36',
        'lg:pb-28 lg:pt-52'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('relative')}> 
          <div className={clsx('relative z-10')}> 
            <HeaderTitle />
          </div>
          <div className={clsx('mt-4 flex justify-center md:mt-8 md:justify-start')}>
            <HeaderCta isFree={false} />
          </div>
          <div className={clsx('mt-8 flex justify-center lg:mt-36')}>
            <HeaderImage />
          </div>
          <div className={clsx('mt-12 lg:mt-20')}>
            <HeaderTechStack />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
