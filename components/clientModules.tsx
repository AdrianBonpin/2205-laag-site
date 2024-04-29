'use client'

import { AnimatePresence, motion } from 'framer-motion'
import styles from './client.module.css'
import Link from 'next/link'
import { createContext, useContext, useEffect, useState } from 'react'

export type navbarProps = {
    title: string
    links: {
        link: string
        text: string
    }[]
}

export function Navbar({ content }: { content: navbarProps }) {
    return (
        <div className={styles.nav_top}>
            <nav className={styles.navbar}>
                <h1>Trailblazers</h1>
                {content?.links.map((item, idx) => (
                    <Link href={item.link} key={idx}>
                        {item.text}
                    </Link>
                ))}
            </nav>

            <h1>{content?.title || 'No Title'}</h1>
        </div>
    )
}

interface TocContextValue {
    tocItems: {
        link: string
        title: string
        sub: boolean
    }[]
    setTocItems: React.Dispatch<
        React.SetStateAction<{ link: string; title: string; sub: boolean }[]>
    >
}

const TocContext = createContext<TocContextValue>({
    tocItems: [],
    setTocItems: () => {},
})

function useTocContext() {
    return useContext(TocContext)
}

export function TocProvider({ children }: { children: React.ReactNode }) {
    const [tocItems, setTocItems] = useState<
        { link: string; title: string; sub: boolean }[]
    >([])

    return (
        <TocContext.Provider value={{ tocItems, setTocItems }}>
            <ContentBlock>{children}</ContentBlock>
        </TocContext.Provider>
    )
}

export function ContentBlock({ children }: { children: React.ReactNode }) {
    const { tocItems } = useTocContext()
    return (
        <div className={styles.main}>
            <div className={styles.left_content}>{children}</div>
            <div className={styles.right_toc}>
                <div>
                    <h3>TABLE OF CONTENTS</h3>
                    {/* Items will be duplicated on dev */}
                    {/* {tocItems.map((item, idx) => (
                        <Link href={`#${item.link}`} key={idx}>
                            <motion.p
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: item.sub ? 10 : 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                            >
                                {item.title}
                            </motion.p>
                        </Link>
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export function TextBlock({
    title,
    noTitle,
    isSub,
    children,
    anchor,
}: {
    title: string
    noTitle?: boolean
    isSub?: boolean
    children?: React.ReactNode
    anchor: string
}) {
    const { setTocItems } = useTocContext()

    useEffect(() => {
        setTocItems((prev) => [
            ...prev,
            { link: anchor, title: title, sub: isSub || false },
        ])
    }, [anchor, setTocItems])

    return (
        <section className={styles.text_block} id={anchor}>
            {!noTitle && (
                <h1 className={isSub ? styles.sub : undefined}>{title}</h1>
            )}
            {children}
        </section>
    )
}

export function InformationBlock({
    title,
    children,
}: {
    title: string
    children?: React.ReactNode
}) {
    return (
        <section className={styles.info_block}>
            <div className={styles.info_icon}>
                <div>!</div>
            </div>
            <h3>{title}</h3>
            {children}
        </section>
    )
}

export function WarningBlock({
    title,
    children,
}: {
    title: string
    children?: React.ReactNode
}) {
    return (
        <section className={styles.warning_block}>
            <div className={styles.warning_icon}>
                <div>⚠</div>
            </div>
            <h3>{title}</h3>
            {children}
        </section>
    )
}

export function PhotoBlock({
    src,
    alt,
    children,
}: {
    src: string
    alt?: string
    children?: React.ReactNode
}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <section className={styles.photo_block} onClick={toggleModal}>
            <motion.img
                src={src}
                alt={alt || src.split('.')[0]}
                whileHover={{ scale: 1.025 }}
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.photo_modal}
                        onClick={toggleModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <img src={src} alt={alt || src.split('.')[0]} />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </section>
    )
}

export function PhotoBlock2({
    src,
    alt,
    children,
}: {
    src: {
        img1: string
        img2: string
    }
    alt?: {
        img1: string
        img2: string
    }
    children?: React.ReactNode
}) {
    const [isOpen, setIsOpen] = useState(0)

    return (
        <section className={styles.photo_block_2}>
            <div onClick={() => setIsOpen(1)}>
                <motion.img
                    src={src.img1}
                    alt={alt?.img1 || src.img1.split('.')[0]}
                    whileHover={{ scale: 1.025 }}
                />
            </div>
            <div onClick={() => setIsOpen(2)}>
                <motion.img
                    src={src.img2}
                    alt={alt?.img2 || src.img2.split('.')[0]}
                    whileHover={{ scale: 1.025 }}
                />
            </div>
            <AnimatePresence>
                {isOpen === 1 && (
                    <motion.div
                        className={styles.photo_modal}
                        onClick={() => setIsOpen(0)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <img
                            src={src.img1}
                            alt={alt?.img1 || src.img1.split('.')[0]}
                        />
                    </motion.div>
                )}
                {isOpen === 2 && (
                    <motion.div
                        className={styles.photo_modal}
                        onClick={() => setIsOpen(0)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <img
                            src={src.img2}
                            alt={alt?.img2 || src.img2.split('.')[0]}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div>{children}</div>
        </section>
    )
}
