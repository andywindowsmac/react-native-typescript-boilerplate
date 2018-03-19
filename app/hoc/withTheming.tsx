import * as React from 'react';

import ThemeWrapper from '../theme/ThemeWrapper';
import { hoistStatics } from 'recompact';

interface WithThemeWrapperInjectedProps {}

const withThemeWrapper = hoistStatics(ComposedComponent => {
  const WithThemeWrapper = (props: WithThemeWrapperInjectedProps) => (
    <ThemeWrapper>
      <ComposedComponent {...props} />
    </ThemeWrapper>
  );

  return WithThemeWrapper;
});

export default withThemeWrapper;
