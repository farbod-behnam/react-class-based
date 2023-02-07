import React, { Component, ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {

    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {hasError: false};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({ hasError: true });
    }

  render() {
    if (this.state.hasError) {
        return <p>Something went wrong!</p>
    }
    return (
      this.props.children
    );
  }
}
