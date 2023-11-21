import * as React from 'react';

export type Go = (route: string, state?: unknown, replace?: boolean) => void;

export const context = React.createContext<Go>(() => {});
