import React, { ReactNode } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface JavaBlockProps {
    title: string;
    children: string;
}

/**
 * Componente para mostrar bloques de código Java de forma estandarizada.
 * 
 * @param title - El título del archivo o clase (ej: [NombreProyecto].Models.Enemigos.Jefe).
 * @param children - El código fuente en Java.
 */
export default function JavaBlock({ title, children }: JavaBlockProps): React.ReactElement {
    return (
        <CodeBlock language="java" title={title} showLineNumbers>
            {`${children}`}
        </CodeBlock>
    );
}
