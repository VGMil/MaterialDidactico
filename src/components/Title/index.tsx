import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface TitleProps {
    children: ReactNode;
}

export default function Title({ children }: TitleProps): React.ReactElement {
    const textContent = typeof children === 'string' ? children : '';

    return (
        <div className={styles.titleContainer}>
            &gt; <span className={styles.glitchText} data-text={textContent}>{children}</span>
            <span className={styles.cursor}>_</span>
        </div>
    );
}
