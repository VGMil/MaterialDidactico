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
    progress?: number;
}

interface TechListProps {
    items: TechItem[];
}

export default function TechList({ items }: TechListProps): React.JSX.Element {
    return (
        <div className={styles.gridContainer}>
            {items.map((item, idx) => (
                <ContentWrapper key={idx} link={item.link}>
                    <div className={styles.card}>
                        <div className={`${styles.cardHeader} ${styles[item.color || 'cyan']}`}>
                            {item.icon && (
                                <div className={styles.iconWrapper}>
                                    {getIcon(item.icon)}
                                </div>
                            )}
                            <div className={styles.overlay} />
                        </div>

                        <div className={styles.cardBody}>
                            <span className={styles.category}>TOPIC</span>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>

                            <div className={styles.footer}>
                            </div>
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
