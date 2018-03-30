import * as React from 'react';

export type BaseProps =  {
    className?: string;
    children?: React.ReactNode;
    prefixCls?: string;
    style?: React.CSSProperties | {} | Array<{}>;
}

export interface Props extends BaseProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}