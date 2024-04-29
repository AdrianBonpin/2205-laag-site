import {
    ContentBlock,
    InformationBlock,
    Navbar,
    PhotoBlock,
    PhotoBlock2,
    TextBlock,
    TocProvider,
    WarningBlock,
} from '@/components/clientModules'

import styles from './page.module.css'

export default function LandingPage() {
    return (
        <>
            <Navbar
                content={{
                    title: 'Hello World',
                    links: [
                        {
                            link: '/',
                            text: 'Home',
                        },
                    ],
                }}
            />
            <div className={styles.nav_black} />
            <TocProvider>
                <TextBlock title="Introduction" noTitle={true} anchor="intro">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi dolorem ad similique quam id quod illo a error
                        incidunt voluptates repudiandae veritatis adipisci,
                        blanditiis ipsa nihil eius ab.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga dicta labore debitis iure assumenda esse veritatis,
                        cum nulla nihil aperiam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In culpa consequatur quod deleniti distinctio quas!
                        Voluptate aut nobis itaque blanditiis quos tempora
                        eligendi optio incidunt reprehenderit. Nostrum esse
                        aliquam aspernatur.
                    </p>
                </TextBlock>
                <InformationBlock title={'Info Block'}>
                    <p>Hello</p>
                    <ol>
                        <li>Yes</li>
                    </ol>
                </InformationBlock>
                <TextBlock
                    title="Lorem ipsum dolor sit amet."
                    anchor="intro"
                    isSub={true}
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In culpa consequatur quod deleniti distinctio quas!
                        Voluptate aut nobis itaque blanditiis quos tempora
                        eligendi optio incidunt reprehenderit. Nostrum esse
                        aliquam aspernatur.
                    </p>
                    <ul>
                        <li>YES</li>
                        <li>NO</li>
                    </ul>
                </TextBlock>
                <WarningBlock title="Warning Block">
                    This is a warning block
                </WarningBlock>
                <PhotoBlock src="/img1.png">
                    <p>Image</p>
                </PhotoBlock>
                <PhotoBlock2
                    src={{
                        img1: '/img5.png',
                        img2: 'joseprof.png',
                    }}
                >
                    <p>Image 2 </p>
                </PhotoBlock2>
            </TocProvider>
        </>
    )
}
