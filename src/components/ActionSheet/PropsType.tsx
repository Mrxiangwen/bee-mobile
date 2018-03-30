import * as React from 'react';

export interface ActionSheetButton {
    color?: string;
    disabled?: boolean;
    onClick?: Function;
    style?: object;
    text?: React.ReactNode | string;
}

export interface ActionSheetProps {
    actionClass?: any;
    buttons?: Array<ActionSheetButton>;
    cancel?: boolean;
    cancelText?: string;
    element?: React.ReactNode | string;
    prefixCls?: string;
    title?: string;
    onClose?: Function;
}