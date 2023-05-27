import {Component} from 'react'

export class CounterClass extends Component {
    state = {
        item: 1,
    }

    render() {
        const {item} = this.state
        return (
            <>
                <div>Item: {item}</div>
                <button onClick={this.incrementItem}>Увеличить</button>
                <button onClick={this.decreaseItem}>Уменьшить</button>
            </>
        )
    }

    incrementItem = () => {
        this.setState(state => {
            return {item: state.item + 1}
        })
    }
    decreaseItem = () => {
        this.setState(state => {
            return {item: state.item - 1}
        })
    }

    decreaseItem = () => this.setState(state => (
            {item: state.item - 1}
        )
    )
}
