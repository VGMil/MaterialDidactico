import React from 'react';
import Link from '@docusaurus/Link';
import * as LucideIcons from 'lucide-react';
import styles from './styles.module.css';

// Helper to get icon safely
const getIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={32} strokeWidth={1.5} /> : null;
};

type NeonColor = 'pink' | 'blue' | 'green' | 'yellow' | 'red' | 'cyan';

export interface TechItem {
    title: string;
    description: string;
    link?: string;
    icon?: string;
    color?: NeonColor;
    progress?: number; // 0 to 100
}

interface TechListProps {
    items: TechItem[];
}

export default function TechList({ items }: TechListProps): React.JSX.Element {
    return (
        <div className={styles.listContainer}>
            {items.map((item, idx) => (
                <ContentWrapper key={idx} link={item.link}>
                    <div className={`${styles.item} ${styles[item.color || 'cyan']}`}>

                        {item.icon && (
                            <div className={styles.iconContainer}>
                                {getIcon(item.icon)}
                            </div>
                        )}

                        <div className={styles.content}>
                            <div className={styles.header}>
                                <span className={styles.title} data-text={item.title}>
                                    {item.title}
                                </span>
                            </div>

                            <div className={styles.meta}>
                                {item.description}
                            </div>

                            {item.progress !== undefined && (
                                <div className={styles.progressBar}>
                                    <div
                                        className={styles.progressFill}
                                        style={{ '--progress-width': `${item.progress}%` } as React.CSSProperties}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </ContentWrapper>
            ))}
        </div>
    );
}

const ContentWrapper = ({ link, children }: { link?: string, children: React.ReactNode }) => {
    if (link) {
        return <Link to={link} className={styles.itemLink}>{children}</Link>;
    }
    return <>{children}</>;
};
