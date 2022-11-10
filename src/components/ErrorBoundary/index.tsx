import { Component, ReactNode } from 'react'
import styles from './ErrorBoundary.module.css'

interface IProps {
    children: ReactNode
}
interface IState {
    hasError: boolean
    error: string
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { hasError: false, error: '' }
  }

  static getDerivedStateFromError(error: Error) {
    return {
        hasError: true,
        error : error.message
    }
  }

  render() {
    if (this.state.hasError) {
      return <div className={styles.container}>
        <h1>{this.state.error}</h1>
    </div>
    }

    return this.props.children
  }
}

export default ErrorBoundary
