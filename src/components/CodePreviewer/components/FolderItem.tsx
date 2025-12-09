import React from 'react';
import styles from '../styles.module.css';
import * as LucideIcons from 'lucide-react';
import { FileNode } from '../types';

interface FolderItemProps {
    node: FileNode;
    level: number;
    id: string;
    isOpen: boolean;
    onToggle: (id: string) => void;
}

/**
 * Renderiza un elemento de tipo carpeta en la lista.
 * 
 * @param node - El nodo de la carpeta.
 * @param level - Nivel de profundidad para el padding.
 * @param id - Identificador único de la carpeta.
 * @param isOpen - Si la carpeta está abierta o cerrada.
 * @param onToggle - Función para alternar el estado de la carpeta.
 */
export const FolderItem = ({ node, level, id, isOpen, onToggle }: FolderItemProps) => {
    const defaultFolderIcon = isOpen ? <LucideIcons.FolderOpen size={16} /> : <LucideIcons.Folder size={16} />;

    return (
        <div
            className={styles.folderHeader}
            onClick={() => onToggle(id)}
            style={{ paddingLeft: `${level * 15 + 10}px` }}
        >
            <span style={{ marginRight: '6px', display: 'flex', alignItems: 'center' }}>
                {defaultFolderIcon}
            </span>
            {node.name}
        </div>
    );
};
