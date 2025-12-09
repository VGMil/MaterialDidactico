declare module '*.md' {
    import type { ComponentType } from 'react';
    const Component: ComponentType<object>;
    export default Component;
}
