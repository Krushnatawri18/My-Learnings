import ChildC from './ChildC'

const ChildB = () => {
    console.log('ChildB rendered');
    return (
        <div>
            <ChildC />
        </div>
    )
}

export default ChildB