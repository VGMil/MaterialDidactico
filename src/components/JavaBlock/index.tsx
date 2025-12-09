import React, { ReactNode } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface JavaBlockProps {
    title: string;
    children: string;
    metastring?: string;
}

/**
 * Componente para mostrar bloques de código Java de forma estandarizada.
 * 
 * @param title - El título del archivo o clase (ej: [NombreProyecto].Models.Enemigos.Jefe).
 * @param children - El código fuente en Java.
 * @param metastring - El metastring para el bloque de código.
 */
export default function JavaBlock({ title, children, metastring }: JavaBlockProps): React.ReactElement {
    return (
        <CodeBlock language="java" title={title} showLineNumbers metastring={metastring}>
            {children}
        </CodeBlock>
    );
}
