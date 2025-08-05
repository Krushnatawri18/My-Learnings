import useSideEffect from '../hooks/useSideEffect'

const DataFetch = ({ url }) => {

    const { data, loading, error } = useSideEffect(url);

    if (loading) {
        return <div>Loading..</div>
    }

    if (error) {
        return <div>Error</div>
    }

    return (
        <>
            <div>
                Data :
            </div>
            {
                data.slice(0, 10).map((d, id) => {
                    return (
                        <div key={id}>
                            <p>{d.title}</p>
                            <p>{d.body}</p>
                            <br /><br />
                        </div>
                    )
                })
            }
        </>
    )
}

export default DataFetch