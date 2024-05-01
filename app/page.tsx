import { InformationBlock, Navbar, PhotoBlock, TextBlock, TocProvider } from '@/components/clientModules';

import styles from './page.module.css';

export default function LandingPage() {
  return (
    <>
      <Navbar
        content={{
          title: 'LAAG',
          links: [
            {
              link: '/',
              text: 'Home',
            },
            {
              link: '#',
              text: 'Archive',
            },
          ],
        }}
      />
      <div className={styles.nav_black} />
      <TocProvider>
        <TextBlock title="Introduction" noTitle={true} anchor="introduction">
          <p>
            Sustainable Development Goal 9, focuses on “Industry, Innovation, and Infrastructure”. This SDG aims to build resilient infrastructure, promote
            inclusive and sustainable industrialization, and foster innovation. In line with this goal, our ideation portfolio tackles the pressing challenges
            of route congestion, inefficiency, and the difficulty of commuting in Cebu. These issues not only hinder economic progress but also worsen social
            imbalances and environmental degradation. By addressing transportation bottlenecks and enhancing mobility options, we aim to contribute to the
            sustainable development of Cebu, aligning with the overarching objectives of SDG 9. Through collaborative efforts and innovative solutions, we
            aspire to create a more resilient and efficient transportation system that serves the needs of all residents while minimizing negative impacts on
            the environment.
          </p>
        </TextBlock>
        <InformationBlock title={'Additional information'}>
          <p>Hello</p>
        </InformationBlock>
        <TextBlock title="Problem Statement" anchor="problem-statement">
          <p>
            Sustainable Development Goal 9, focuses on “Industry, Innovation, and Infrastructure”. This SDG aims to build resilient infrastructure, promote
            inclusive and sustainable industrialization, and foster innovation. In line with this goal, our ideation portfolio tackles the pressing challenges
            of route congestion, inefficiency, and the difficulty of commuting in Cebu. These issues not only hinder economic progress but also worsen social
            imbalances and environmental degradation. By addressing transportation bottlenecks and enhancing mobility options, we aim to contribute to the
            sustainable development of Cebu, aligning with the overarching objectives of SDG 9. Through collaborative efforts and innovative solutions, we
            aspire to create a more resilient and efficient transportation system that serves the needs of all residents while minimizing negative impacts on
            the environment.
          </p>
        </TextBlock>
        <TextBlock title="User Personas" anchor="user-personas">
          <TextBlock title="Klaro Andrew" noTitle={true} isSub={true} anchor="persona-1">
            <PhotoBlock src="/user-personas/klaro-andrew.png" />
          </TextBlock>
          <TextBlock title="Angelina Diyosnon" noTitle={true} isSub={true} anchor="persona-2">
            <PhotoBlock src="/user-personas/angelina-diyosnon.png" />
          </TextBlock>
        </TextBlock>
      </TocProvider>
    </>
  );
}
