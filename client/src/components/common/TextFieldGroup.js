import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ name, placeholder, value, label, error, info, type, onChange, disabled }) => {
  return (
      <div className="col-md-11 form-group">
          <input
              type={type}
              className={classnames('form-control form-control-lg', {
                  'is-invalid': error
              })}
              value={value}
              placeholder={placeholder}
              name={name}
              disabled={disabled}
              onChange={onChange}
          />
          {info && <small className="form-text text-muted">{info}</small>}
          {error && (<div className="d-flex w-100 invalid-feedback">{error}</div>)}
      </div>
  );
};

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
    type: 'text'
};

export default TextFieldGroup;
