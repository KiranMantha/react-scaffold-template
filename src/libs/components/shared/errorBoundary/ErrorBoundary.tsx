import { TFunction } from 'i18next';
import { Component, ComponentType, ReactElement } from 'react';
import { withTranslation } from 'react-i18next';
import { Location, useLocation } from 'react-router';
import { ErrorContainer } from './ErrorBoundary.styles';

function withRouter(
  ClassComponent: ComponentType<{
    children: ReactElement | ReactElement[];
    location: Location;
    t: TFunction<'translation', undefined>;
  }>
) {
  function ComponentWithRouterProp(props: {
    children: ReactElement | ReactElement[];
    t: TFunction<'translation', undefined>;
  }) {
    const location = useLocation();
    return <ClassComponent {...props} location={location} />;
  }
  return ComponentWithRouterProp;
}

class Boundary extends Component<
  Readonly<{
    children: ReactElement | ReactElement[];
    location: Location;
    t: TFunction<'translation', undefined>;
  }>,
  Record<string, string | boolean>
> {
  constructor(props: {
    children: ReactElement | ReactElement[];
    location: Location;
    t: TFunction<'translation', undefined>;
  }) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: ''
    };
  }

  componentDidUpdate() {
    if (this.props.location.pathname !== this.state.prevPath) {
      this.setState({ hasError: false, errorMessage: '', prevPath: this.props.location.pathname });
    }
  }

  componentDidCatch(error: Error) {
    this.setState({ hasError: true, errorMessage: error.message });
  }

  render() {
    return this.state.hasError ? (
      <ErrorContainer data-testid="error-boundary">{this.props.t('common.errorBoundaryMessage')}</ErrorContainer>
    ) : (
      this.props.children
    );
  }
}
const ErrorBoundary = withTranslation()(withRouter(Boundary));
export { ErrorBoundary };
