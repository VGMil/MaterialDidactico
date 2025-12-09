/**
 * Interfaz que representa un nodo dentro del árbol de archivos.
 * 
 * @property name - El nombre visible del archivo o carpeta.
 * @property type - El tipo de nodo: puede ser 'file' (archivo) o 'folder' (carpeta).
 * @property path - La ruta relativa al archivo markdown (solo para archivos).
 * @property icon - El nombre del icono de Lucide a utilizar (opcional).
 * @property children - Lista de nodos hijos (solo para carpetas).
 * @property isOpen - Estado inicial de apertura (solo para carpetas).
 */
export interface FileNode {
    name: string;
    type: 'file' | 'folder';
    path?: string;
    icon?: string;
    children?: FileNode[];
    isOpen?: boolean;
}

/**
 * Estructura interna para representar un nodo aplanado en la lista de renderizado.
 */
export interface FlatNode {
    node: FileNode;
    level: number;
    id: string;
}
