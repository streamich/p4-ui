import {createElement as h} from 'react';
import {type Scale, theme} from 'nano-theme';

const baseSize = 0;

export interface SpaceProps extends React.AllHTMLAttributes<any> {
  as?: string;
  s?: boolean;
  xs?: boolean;
  size?: Scale;
}

export const Space: React.FC<SpaceProps> = (props) => {
  const {as = 'div', s, xs, size = s ? baseSize - 1 : xs ? baseSize - 2 : baseSize, ...rest} = props;

  return h(as, {
    ...rest,
    style: {
      ...(rest.style || {}),
      height: `${theme.space(size as Scale)}px`,
      display: as === 'div' ? undefined : 'inline-block',
    },
  });
};
