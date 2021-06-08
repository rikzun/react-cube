import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import './styles/cube.sass'

class Root extends Component {
    state = {
        rotateY: 340,
        rotateX: -15,
        x: 0,
        y: 0
    }

    render() {
        return (
            <div id="cube" style={{transform: `rotateX(${this.state.rotateX}deg) rotateY(${this.state.rotateY}deg)`}}>
                <div className="face" style={{transform: 'translateZ(100px)'}}>front</div>
                <div className="face" style={{transform: 'rotateY(180deg) translateZ(100px)'}}>back</div>
                <div className="face" style={{transform: 'rotateY(90deg) translateZ(100px)'}}>right</div>
                <div className="face" style={{transform: 'rotateY(-90deg) translateZ(100px)'}}>left</div>
                <div className="face" style={{transform: 'rotateX(90deg) translateZ(100px)'}}>top</div>
                <div className="face" style={{transform: 'rotateX(-90deg) translateZ(100px)'}}>bottom</div>
            </div>
        )
    }

    async componentDidMount() {
        document.body.addEventListener('mouseup', () => this.setState({x: 0, y: 0}))
        document.body.addEventListener('mousedown', (e: MouseEvent) => this.setState({x: e.x, y: e.y}))
        document.body.addEventListener('mousemove', (e: MouseEvent) => {
            if (!this.state.x) return

            this.setState({
                rotateX: this.state.rotateX + this.state.y - e.y,
                rotateY: this.state.rotateY + -this.state.x + e.x
            })

            this.setState({
                x: e.x,
                y: e.y
            })
        })

        while (true) {
            if (!this.state.x) this.setState({rotateY: this.state.rotateY + 1})
            await new Promise((resolve) => setTimeout(resolve, 15))
        }
    }
}

//mount
ReactDOM.render(<Root />, document.body)