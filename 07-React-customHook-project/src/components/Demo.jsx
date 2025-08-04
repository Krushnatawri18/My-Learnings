import useCustom from '../hooks/customHook'

const Demo = () => {
    const {value, onChange, resetValue} = useCustom();

    return (
        <>
        <div>
            <label>Enter an input</label>
            <br />
            <input type='text' value={value} onChange={onChange} /> &nbsp;
            <button onClick={resetValue}>Reset</button>
        </div>
        <div>
            Your entered input : {value}
        </div>
        </>
    )
}

export default Demo