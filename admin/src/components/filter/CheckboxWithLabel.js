import React, {useState} from 'react';

const CheckboxWithLabel = ({labelRef, inputRef, labelOn, labelOff}) => {
    const [isChecked, setIsChecked] = useState(false);

    const onChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label ref={labelRef}>
            <input
                ref={inputRef}
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            {isChecked ? labelOn : labelOff}
        </label>
    );
};

export default CheckboxWithLabel;