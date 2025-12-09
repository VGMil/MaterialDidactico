import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface TitleProps {
    children: ReactNode;
}

export default function Title({ children }: TitleProps): React.ReactElement {
    return (
        <div className={styles.titleContainer}>
            &gt; {children}<span className={styles.cursor}>_</span>
        </div>
    );
}
