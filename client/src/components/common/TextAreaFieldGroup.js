import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({ name, placeholder, value, error, info, onChange }) => {
    return (
        <div className="col-md-11 form-group">
            <textarea
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && (<div className="d-flex w-100 invalid-feedback">{error}</div>)}
        </div>
    );
};

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    info: PropTypes.string,
    error: PropTypes.string
};

export default TextAreaFieldGroup;
