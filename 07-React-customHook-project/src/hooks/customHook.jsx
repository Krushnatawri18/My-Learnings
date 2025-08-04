import { useState } from "react";


export default function useCustom(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    const onChange = (e) => setValue(e.target.value);

    const resetValue = (e) => setValue('');

    return {value, setValue, onChange, resetValue};
}