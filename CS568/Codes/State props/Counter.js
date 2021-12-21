import React from 'react'


class Counter extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.currentValue}</p>
                <input type='button'
                    value='Increment'
                    onClick={this.props.incrementButtonClickHandler}
                />
            </div>
        )
    }
}

export default Counter