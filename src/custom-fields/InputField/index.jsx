import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field,
        type, label, placeholder, disabled,
    } = props;

    // Trong field luon co 4 gia tri name, value, onChange, onBlur
    const { name } = field;

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Input
                id={name}
                {...field}

                type={type}
                disabled={disabled}
                placeholder={placeholder} />
        </FormGroup>
    );
}

export default InputField;