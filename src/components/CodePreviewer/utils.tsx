import * as LucideIcons from 'lucide-react';
import React from 'react';

/**
 * Obtiene un componente de icono de Lucide React basado en su nombre.
 * 
 * @param iconName - El nombre del icono a buscar en la librería Lucide.
 * @returns El componente del icono renderizado o null si no se encuentra.
 */
export const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={ 16 } /> : null;
};
