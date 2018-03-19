import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { ColorMap, FontMap, ImageMap } from './';

interface ThemeWrapperProps {
  children: React.ReactChild;
}

class ThemeWrapper extends React.Component<ThemeWrapperProps> {
  public render(): JSX.Element {
    return (
      <ThemeProvider
        theme={{
          colors: { ...ColorMap },
          fonts: { ...FontMap },
          images: { ...ImageMap },
        }}
      >
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export default ThemeWrapper;
