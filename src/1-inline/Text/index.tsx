import {createElement as h, CSSProperties, AllHTMLAttributes} from 'react';
import {useTheme, rule, lightTheme as theme} from 'nano-theme';

const className = rule({
  ...theme.font.sans,
  col: theme.g(0.1, 0.8),
});

export interface Props extends AllHTMLAttributes<any> {
  as?: string;
  nowrap?: boolean;
}

export const Text: React.FC<Props> = ({as = 'span', nowrap, children, ...rest}) => {
  const theme = useTheme();

  let style: CSSProperties | undefined = rest.style;

  if (!theme.isLight) {
    style = {
      ...(rest.style || {}),
      color: theme.g(0.1, 0.8),
    };
  }

  if (nowrap) {
    style = {
      ...(rest.style || {}),
      whiteSpace: 'nowrap',
    };
  }

  return h(as, {...rest, className: (rest.className || '') + className, style}, children);
};
