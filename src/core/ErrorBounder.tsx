import React, { Component, ReactNode, ErrorInfo  } from 'react';

interface Props {
  children: ReactNode;
  fallbackComponent: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      // Здесь можно обработать ошибку, например, отправить ее на сервер для дальнейшего анализа.
      console.error(error, errorInfo);
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        // Здесь можно отобразить пользователю сообщение об ошибке.
        return <h1>Что-то пошло не так.</h1>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;