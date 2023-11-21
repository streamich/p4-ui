import * as React from 'react';
import {useTheme, makeRule, rule} from 'nano-theme';

export const blockClass = rule({
  bdrad: '4px',
});

const useBlockClass = makeRule((theme) => ({
  bg: theme.bg,
  'a &': {
    col: theme.g(0.25),
  },
}));

const useHoverBlockClass = makeRule((theme) => ({
  bd: `1px solid ${theme.g(0, 0.1)}`,
  '&:hover': {
    bd: `1px solid ${theme.color.sem.blue[0]}`,
    bg: theme.blue(0.04),
  },
  '&:active': {
    bd: `1px solid ${theme.blue}`,
    bg: theme.blue(0.08),
  },
}));

const hoverElevateClass = rule({
  trs: 'box-shadow 0.5s',
  '&:hover': {
    boxShadow: '0 3px 5px rgba(0,0,0,.1), 0 10px 20px rgba(0,0,0,.1)',
  },
});

export interface PaperProps {
  as?: any;
  level?: number;
  fill?: number;
  round?: boolean;
  hover?: boolean;
  hoverElevate?: boolean;
  contrast?: boolean;
  noBorder?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Paper: React.FC<PaperProps> = (props) => {
  const {as = 'div', level = 0, fill = 0, round, hover, hoverElevate, contrast, noBorder} = props;
  const theme = useTheme();
  const dynamicBlockClass = useBlockClass();
  const dynamicHoverBlockClass = useHoverBlockClass();

  const style: React.CSSProperties = {
    boxShadow: level
      ? `0px 1px ${1 + level * 2}px 0px ${theme.g(0, 0.2)}, 0px ${level}px ${level}px 0px ${theme.g(0, 0.14)}, 0px ${
          1 + level
        }px 1px -${level}px ${theme.g(0, 0.12)}`
      : undefined,
  };

  if (!hover) {
    style.border = `1px solid ${theme.g(0, contrast ? 0.2 : 0.1)}`;
  }

  if (level > 1) {
    style.border = `1px solid ${theme.g(0, 0.1 + 0.03 * level)}`;
  }

  if (fill) {
    style.background = theme.g(0, fill * 0.02);
    style.boxShadow = 'none';
  }

  if (round) {
    style.borderRadius = '16px';
  }

  if (noBorder) {
    style.border = 'none';
  }

  const Comp = as || 'div';

  return (
    <Comp
      className={
        blockClass + dynamicBlockClass + (hover ? dynamicHoverBlockClass : '') + (hoverElevate ? hoverElevateClass : '')
      }
      style={{...(props.style || {}), ...style}}
    >
      {props.children}
    </Comp>
  );
};
