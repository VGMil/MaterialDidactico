import React, { ReactNode } from 'react';
import styles from './styles.module.css';

type NeonColor = 'pink' | 'blue' | 'green' | 'yellow' | 'red';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    color?: NeonColor;
}

export default function Card({ children, color = 'pink', className, ...props }: CardProps): React.ReactElement {
    return (
        <div className={`${styles.card} ${styles[color]} ${className || ''}`} {...props}>
            {children}
        </div>
    );
}
