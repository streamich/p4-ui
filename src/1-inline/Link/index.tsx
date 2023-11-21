import * as React from 'react';
import {context} from './context';

export * from './context';

const noop = (() => {}) as any;
const isModifiedEvent = (event: React.MouseEvent) =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

export interface LinkProps extends React.AllHTMLAttributes<any> {
  replace?: boolean;
  state?: any | ((props: LinkProps) => any);
  to?: string;
  a?: boolean;
  comp?: string | React.ComponentType<any>;
}

export const Link: React.FC<LinkProps> = React.forwardRef<any, LinkProps>((props, ref) => {
  /* eslint-disable */
  let {replace, state, to, a, comp = a ? 'a' : 'button', onClick: originalClick = noop, target, ...rest} = props;
  /* eslint-disable */

  const go = React.useContext(context);

  const onClick = React.useCallback(
    (event: React.MouseEvent) => {
      if (
        !event.defaultPrevented && // onClick prevented default
        event.button === 0 && // ignore everything but left clicks
        !target && // let browser handle "target=*"
        !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
        event.preventDefault();
        if (typeof to === 'string') go(to, state ? state(props) : undefined, replace);
        originalClick(event);
      }
    },
    [originalClick, replace, target, state],
  );

  const attr: React.AllHTMLAttributes<any> & React.RefAttributes<any> = {
    ...rest,
    ref,
    onClick,
  };

  if (comp === 'a') {
    attr.href = to;
    attr.target = target;
  }

  return React.createElement(comp, attr);
});
