import React, { ReactNode } from 'react';
import styles from './styles.module.css';

type NeonColor = 'pink' | 'blue' | 'green' | 'yellow' | 'red';

interface CardProps {
    children: ReactNode;
    color?: NeonColor;
}

export default function Card({ children, color = 'pink' }: CardProps): React.ReactElement {
    return (
        <div className={`${styles.card} ${styles[color]}`}>
            {children}
        </div>
    );
}
