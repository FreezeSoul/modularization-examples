import { Widget } from "./Widget";
import * as React from 'react';
import { withRpc } from "./use";

export function renderWidget<T extends new (props?: P)=> Widget, P>(widgetClass: T, props?: P) {
    function Wrapper() {
        const widgetPromise = withRpc(() => new widgetClass(props));
        const [widget, setWidget] = React.useState<Widget>();
        widgetPromise.then((widget) => {
            setWidget(widget);
        }).catch((reason) => {
            console.error('failure', reason);
        })
        if (!widget) {
            return <></>;
        }
        return widget.render();
    }
    return <Wrapper />
}