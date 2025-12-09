import React from 'react';
import styles from '../styles.module.css';
import * as LucideIcons from 'lucide-react';
import { FileNode } from '../types';
import { getIcon } from '../utils';

interface FileItemProps {
    node: FileNode;
    level: number;
    isSelected: boolean;
    onSelect: (path: string) => void;
}

/**
 * Renderiza un elemento de tipo archivo en la lista.
 * 
 * @param node - El nodo del archivo.
 * @param level - Nivel de profundidad para el padding.
 * @param isSelected - Si el archivo está actualmente seleccionado.
 * @param onSelect - Función para seleccionar el archivo.
 */
export const FileItem = ({ node, level, isSelected, onSelect }: FileItemProps) => {
    const defaultFileIcon = <LucideIcons.File size={16} />;
    const iconElement = getIcon(node.icon);

    return (
        <div
            className={`${styles.fileItem} ${isSelected ? styles.activeFile : ''}`}
            onClick={() => node.path && onSelect(node.path)}
            style={{ paddingLeft: `${level * 15 + 10}px` }}
        >
            <span style={{ marginRight: '6px', display: 'flex', alignItems: 'center' }}>
                {iconElement || defaultFileIcon}
            </span>
            {node.name}
        </div>
    );
};
