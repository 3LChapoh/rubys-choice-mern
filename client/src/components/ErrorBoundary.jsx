import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="notice" style={{ borderColor: '#f87171', color: '#f87171' }}>
          Something went wrong loading this section. Try switching tabs and back.
          <div className="muted" style={{ marginTop: 6, fontSize: 11 }}>
            {this.state.error.message}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
