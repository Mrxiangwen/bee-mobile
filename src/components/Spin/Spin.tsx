import * as React from 'react';
import * as classNames from 'classnames';
import {SPIN_TYPES, SpinProps} from './PropsType';

export default class Spin extends React.PureComponent<SpinProps, any> {
    static defaultProps = {
        type: 'circleRound',
        size: 'xs',
        prefixCls: 'bm-Spin'
    };

    getSpinElement(type: SPIN_TYPES, spanSize: number) {
        const {prefixCls} = this.props;
        const spans: any[] = [];
        let num = 8;
        let height;
        if (type !== 'snake') {
            switch (type) {
                case 'lineSquare':
                case 'lineRound':
                case 'lineBounce':
                    num = 5;
                    break;
            }
            if (type === 'lineSquare' || type === 'lineRound') {
                height = spanSize * 0.1;
            }
            for (let i = 0; i < num; i++) {
                spans.push(<span key={i} style={{height}}/>);
            }
        } else {
            spans.push(<div className={`${prefixCls}-snake`} key="snake"/>)
        }

        return (
            <div className={classNames('loader', type)}>
                {spans}
            </div>
        );
    }

    getSize() {
        let width = 100, height = 100;
        switch (this.props.size) {
            case 'xs':
                width *= 0.25;
                height *= 0.25;
                break;
            case 'sm':
                width *= 0.5;
                height *= 0.5;
                break;
        }
        switch (this.props.type) {
            case 'lineSquare':
            case 'lineRound':
            case 'lineBounce':
                height = width * 0.5;
                break;
        }
        return {width, height};
    }

    render() {
        const {className, prefixCls, size, type, ...other} = this.props;
        const styleClass = classNames(
            prefixCls,
            className
        );
        const styles = {...this.getSize()};
        const children: React.ReactNode = this.getSpinElement(type!, styles['width']);
        return (
            <div className={styleClass} {...other} style={styles}>
                {children}
            </div>
        );
    }
}