import React from "react";

class InputField extends React.Component {
    render() {
        //console.log(this.props.onChange);
        return (
            <div>
                <input
                    className="input"
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    onChange={this.props.onChange}
                    required={this.props.required}
                    id={this.props.id}
                />
            </div>
        );
    }
}

export default InputField;
