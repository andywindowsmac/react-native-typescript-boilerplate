import ThemeWrapper from '../theme/ThemeWrapper';
import { hoistStatics } from 'recompact';

const withThemeWrapper = hoistStatics(
  (ComposedComponent: React.ComponentType) => {
    const WithThemeWrapper = props => (
      <ThemeWrapper>
        <ComposedComponent {...props} />
      </ThemeWrapper>
    );

    return WithThemeWrapper;
  },
);

export default withThemeWrapper;
