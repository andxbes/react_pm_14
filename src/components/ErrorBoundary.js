import { Component } from "react";

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = { hasError: false };
    }

    componentDidCatch(error) {
        console.info(error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError == true) {
            return <p>Something went wrong!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;