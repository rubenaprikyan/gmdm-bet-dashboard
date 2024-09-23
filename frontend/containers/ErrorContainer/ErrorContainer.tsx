import { IBaseContainerProps } from '../interfaces';

export interface IErrorContainerProps extends IBaseContainerProps {}

/*
class ErrorContainer extends React.Component<IErrorContainerProps, any> {
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // TODO Add toast or other base error component
        console.log('ERROR ====> ', {
            error,
            errorInfo
        });
    }

    render() {
        return this.props.children;
    }
}
*/

function ErrorContainer(props: IErrorContainerProps) {
  return props.children;
}

export default ErrorContainer;
