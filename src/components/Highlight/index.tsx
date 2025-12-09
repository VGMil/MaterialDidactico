import React, { ReactNode } from 'react';
import styles from './styles.module.css';

type HighlightColor = 'pink' | 'blue' | 'green' | 'yellow' | 'red';

interface HighlightProps {
    children: ReactNode;
    color?: HighlightColor;
}

export default function Highlight({ children, color = 'yellow' }: HighlightProps): React.ReactElement {
    // If the color provided matches one of our classes, use it.
    // Otherwise default to yellow or just style base if we wanted to support arbitrary (but we don't have CSS for them)
    const colorClass = styles[color] ? styles[color] : styles.yellow;

    return (
        <span className={`${styles.highlight} ${colorClass}`}>
            {children}
        </span>
    );
}
