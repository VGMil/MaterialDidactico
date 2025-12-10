import React from 'react';
import styles from './styles.module.css';

type SubtitleColor = 'pink' | 'blue' | 'green' | 'yellow' | 'red';

interface SubtitleProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    number?: string;
    color?: SubtitleColor;
}

export default function Subtitle({ children, number = "00", color = 'yellow', className, ...props }: SubtitleProps): React.ReactElement {
    const colorClass = styles[color] ? styles[color] : '';
    const textContent = typeof children === 'string' ? children : '';

    return (
        <div className={`${styles.subtitleWrapper} ${colorClass} ${className || ''}`} {...props}>
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
