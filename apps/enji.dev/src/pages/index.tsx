import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Zakariya Younis Al-Shuaibi · Software Engineer"
        description="Portfolio of Zakariya Younis Al‑Shuaibi — Software Engineering graduate specializing in Python, JavaScript, and the MERN stack. Projects in AI/ML, web, and mobile."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
