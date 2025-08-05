import ChildB from './ChildB'

const ChildA = () => {
    console.log('ChildA rendered');
    return (
        <div>
            <ChildB />
        </div>
    )
}

export default ChildA