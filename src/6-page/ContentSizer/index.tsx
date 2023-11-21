import * as React from 'react';
import {rule} from 'nano-theme';
import {useContentSize} from './context';

const classNameSidebarOffset = rule({
  trs: 'padding-left .2s',
});

const bottomPaddingClass = rule({
  pad: '0 0 calc(100vh - 150px)',
});

export interface Props {
  scroll?: boolean;
  children: React.ReactNode;
}

export const ContentSizer: React.FC<Props> = ({scroll, children}) => {
  const {paddingLeft} = useContentSize();

  const style: React.CSSProperties = {
    paddingLeft,
  };

  return (
    <div className={classNameSidebarOffset + (scroll ? bottomPaddingClass : '')} style={style}>
      {children}
    </div>
  );
};
