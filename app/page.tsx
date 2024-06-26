import { InformationBlock, Navbar, PhotoBlock, PhotoBlock2, TextBlock, TocProvider } from '@/components/clientModules';

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
              link: 'https://dp-archive.vercel.app/',
              text: 'Archive',
            },
          ],
        }}
      />
      <div className={styles.nav_black} />
      <TocProvider>
        <TextBlock title="Introduction" noTitle={true} anchor="introduction">
          <p>
            Sustainable Development Goal 9, focuses on “Industry, Innovation, and Infrastructure”. This SDG aims to
            build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.
            In line with this goal, our ideation portfolio tackles the pressing challenges of route congestion,
            inefficiency, and the difficulty of commuting in Cebu. These issues not only hinder economic progress but
            also worsen social imbalances and environmental degradation. By addressing transportation bottlenecks and
            enhancing mobility options, we aim to contribute to the sustainable development of Cebu, aligning with the
            overarching objectives of SDG 9. Through collaborative efforts and innovative solutions, we aspire to create
            a more resilient and efficient transportation system that serves the needs of all residents while minimizing
            negative impacts on the environment.
          </p>
        </TextBlock>
        <InformationBlock title="Overview">
          <p>
            To improve public transportation efficiency in Cebu, this project takes a two-phased approach, focusing on
            data collection and optimization:
          </p>
          <ol>
            <li>
              Phase One: This phase addresses navigation difficulties for new and existing residents in Cebu, phase one
              will develop a mobile application that provides navigation assistance (similar to Google Maps) and
              collects anonymous travel data.
            </li>
            <li>
              Phase Two: Leveraging phase one's data, this phase tackles Cebu's traffic issues, especially inefficient
              jeepney routes, by processing the data into easy-to-understand formats for route analysts.
            </li>
          </ol>
        </InformationBlock>

        <TextBlock title="Problem Statement" anchor="problem-statement">
          <p>
            Sustainable Development Goal 9, focuses on “Industry, Innovation, and Infrastructure”. This SDG aims to
            build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.
            In line with this goal, our ideation portfolio tackles the pressing challenges of route congestion,
            inefficiency, and the difficulty of commuting in Cebu. These issues not only hinder economic progress but
            also worsen social imbalances and environmental degradation. By addressing transportation bottlenecks and
            enhancing mobility options, we aim to contribute to the sustainable development of Cebu, aligning with the
            overarching objectives of SDG 9. Through collaborative efforts and innovative solutions, we aspire to create
            a more resilient and efficient transportation system that serves the needs of all residents while minimizing
            negative impacts on the environment.
          </p>
        </TextBlock>

        <TextBlock title="User Personas" anchor="user-personas" />
        <TextBlock title="Klaro Andrew" noTitle={true} isSub={true} anchor="persona-1">
          <PhotoBlock src="/user-personas/klaro-andrew.png" />
          {/* TODO: add description */}
        </TextBlock>
        <TextBlock title="Angelina Diyosnon" noTitle={true} isSub={true} anchor="persona-2">
          <PhotoBlock src="/user-personas/angelina-diyosnon.png" />
          {/* TODO: add description */}
        </TextBlock>

        <TextBlock title="Research Insights" anchor="research-insights">
          <p>
            User feedback is key to iteratively improve prototypes, aligning them with user needs. Analyzing this
            feedback streamlines updates and builds better user experiences. Identified priorities include enhancing
            mobile app notifications with visuals, offering engagement incentives, and improving desktop dashboard
            clarity with clearer data insights. Color choices and data points will be reevaluated for better usability.
            These insights guide future iterations by highlighting areas for improvement and informing solutions that
            better meet user needs, ultimately driving user experience, satisfaction, and engagement.
          </p>
        </TextBlock>
        <TextBlock title="Mobile Application" isSub={true} anchor="mobile-application">
          <PhotoBlock2
            src={{
              img1: '/research-insights/mobile/in-app_notifications_and_feedback.png',
              img2: '/research-insights/mobile/interface.png',
            }}
          />
          <ol>
            <li>
              Majority of users find notifications visually clear and coherent, indicating effective design in conveying
              information.
            </li>
            <li>
              Some users suggest room for improvement in notifications, highlighting the need for further clarity and
              accessibility.
            </li>
            <li>
              Suggestions include implementing a more visual approach to highlight affected roads routes during
              incidents, and offering incentives to encourage user engagement.
            </li>
          </ol>
        </TextBlock>
        <TextBlock title="Desktop Application" isSub={true} anchor="desktop-application">
          <PhotoBlock2
            src={{
              img1: '/research-insights/desktop/in-app_notifications_and_feedback.png',
              img2: '/research-insights/desktop/interface.png',
            }}
          />{' '}
          <PhotoBlock2
            src={{
              img1: '/research-insights/desktop/data.png',
              img2: '/research-insights/desktop/analytics.png',
            }}
          />
          <ol>
            <li>
              Users appreciate the visual clarity, understandability, and aesthetic design of the applications'
              interface.
            </li>
            <li>
              Accessibility of notifications could be improved, suggesting the need for enhancements in this area.
            </li>
            <li>
              Feedback indicates satisfaction with data display and analytics features, with suggestions for clearer
              data insights and re-evaluation of relevant data points.
            </li>
          </ol>
        </TextBlock>

        <TextBlock title="Brainstorming Session Outputs" anchor="brainstorming-session-outputs">
          {/* TODO: add photos and insights */}
        </TextBlock>

        {/* TODO: add wireframe storyboard */}
        <TextBlock title="Prototypes" anchor="prototypes">
          <h2>Laag - Mobile</h2>
          <iframe
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9p1EJHpB0iVW1vMG12XNtx%2FLaag---Mobile%3Ftype%3Ddesign%26node-id%3D185-325%26t%3Dz26TLMLkbcY7L90B-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D185%253A325%26mode%3Ddesign"
            allowFullScreen={true}
          />
          <h2>Laag - Desktop</h2>
          <iframe
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsFkjXgC6R9h1Nw0EaA8W44%2FLaag---Desktop%3Fnode-id%3D118-474%26starting-point-node-id%3D118%253A474%26scaling%3Dscale-down%26mode%3Ddesign%26t%3Dc8BzqZ8eNyU6p5jr-1"
            allowFullScreen={true}
          />
        </TextBlock>
      </TocProvider>
    </>
  );
}
