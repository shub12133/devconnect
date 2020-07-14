import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
    const selectOptions = options.map(option => (
        <option value={option.value} key={option.label}>
            {option.label}
        </option>
    ));

    return (
        <div className="col-md-11 form-group">
            <select
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                value={value}
                name={name}
                onChange={onChange}
            >
                {selectOptions}
            </select>
            {info && <small className="form-text text-muted">{info}</small>}
            {error && (<div className="d-flex w-100 invalid-feedback">{error}</div>)}
        </div>
    );
};

SelectListGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    info: PropTypes.string,
    error: PropTypes.string
};

export default SelectListGroup;
