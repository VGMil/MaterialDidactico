import React from 'react';
import styles from './styles.module.css';

type SubtitleColor = 'pink' | 'blue' | 'green' | 'yellow' | 'red';

interface SubtitleProps {
    children: React.ReactNode;
    number?: string;
    color?: SubtitleColor;
}

export default function Subtitle({ children, number = "00", color = 'yellow' }: SubtitleProps): React.ReactElement {
    const colorClass = styles[color] ? styles[color] : '';
    const textContent = typeof children === 'string' ? children : '';

    return (
        <div className={`${styles.subtitleWrapper} ${colorClass}`}>
            <h2 className={styles.subtitleContainer}>
                <span className={styles.bracket}>[{number}] &gt;</span>
                <div className={styles.textWrapper}>
                    <span className={styles.text} data-text={textContent}>{children}</span>
                </div>
            </h2>
            <hr className={styles.divider} />
        </div>
    );
}
