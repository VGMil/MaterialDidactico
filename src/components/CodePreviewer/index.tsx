import React, { useState, Suspense, useMemo } from 'react';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import * as LucideIcons from 'lucide-react';
import { FileNode, FlatNode } from './types';
import { FolderItem } from './components/FolderItem';
import { FileItem } from './components/FileItem';

/**
 * Propiedades para el componente CodePreviewer.
 */
interface CodePreviewerProps {
    tree: FileNode;
    title?: string;
}

/**
 * Componente encargado de cargar dinámicamente el contenido MDX.
 */
const MDXLoader = ({ path }: { path: string }) => {
    const MDXContent = useMemo(() => {
        return React.lazy(() => import(`@site/docs/${path}.mdx`));
    }, [path]);

    return (
        <Suspense fallback={<div style={{ padding: '2rem', color: '#888' }}>Cargando código...</div>}>
            <MDXContent />
        </Suspense>
    );
};

/**
 * Construye una lista plana de nodos visibles basada en el estado de expansión.
 */
const buildVisibleList = (
    node: FileNode,
    expandedIds: Set<string>,
    level: number = 0,
    parentId: string = ''
): FlatNode[] => {
    const id = parentId ? `${parentId}/${node.name}` : node.name;
    const result: FlatNode[] = [{ node, level, id }];

    if (node.type === 'folder' && expandedIds.has(id) && node.children) {
        node.children.forEach(child => {
            result.push(...buildVisibleList(child, expandedIds, level + 1, id));
        });
    }
    return result;
};

/**
 * Componente principal CodePreviewer.
 * Muestra un explorador de archivos interactivo y un panel de visualización de código.
 */
export default function CodePreviewer({ tree, title = "EXPLORADOR" }: CodePreviewerProps): React.ReactElement {
    const [currentPath, setCurrentPath] = useState<string | null>(null);
    const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set([tree.name]));

    const handleSelect = (path: string) => {
        setCurrentPath(path);
    };

    const handleToggleFolder = (id: string) => {
        const newExpanded = new Set(expandedIds);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedIds(newExpanded);
    };

    const visibleItems = useMemo(() => buildVisibleList(tree, expandedIds), [tree, expandedIds]);

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.sidebarHeader}>{title}</div>
                <div style={{ paddingBottom: '1rem' }}>
                    {visibleItems.map((item) => {
                        if (item.node.type === 'folder') {
                            return (
                                <FolderItem
                                    key={item.id}
                                    node={item.node}
                                    level={item.level}
                                    id={item.id}
                                    isOpen={expandedIds.has(item.id)}
                                    onToggle={handleToggleFolder}
                                />
                            );
                        }
                        return (
                            <FileItem
                                key={item.id}
                                node={item.node}
                                level={item.level}
                                isSelected={currentPath === item.node.path}
                                onSelect={handleSelect}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={styles.previewArea}>
                {currentPath ? (
                    <BrowserOnly fallback={<div>Cargando...</div>}>
                        {() => <MDXLoader path={currentPath} />}
                    </BrowserOnly>
                ) : (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#666', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <LucideIcons.Code2 size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                        <p>Selecciona un archivo para previsualizar</p>
                    </div>
                )}
            </div>
        </div>
    );
}
