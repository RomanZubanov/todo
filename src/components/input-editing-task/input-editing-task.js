import React, {Component} from "react";
import './input-editing-task.css'
import PropTypes from "prop-types";

export default class InputEditingTask extends Component {

    static defaultProps = {
        value: ''
    }

    static propTypes = {
        value: PropTypes.string
    }

    state = {
        value: this.props.value
    }

    editValue = (event) => {
        this.setState({
                value: event.target.value
            }
        )
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.value.trim() === '') {
            alert('Вы ввели пустую строку. Введите хотя бы один символ кроме пробела')
        } else {
            this.props.onSubmitEditing(this.props.id, this.state.value)
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" className="edit" value={this.state.value} onChange={this.editValue} />
            </form>

        )
    }
}