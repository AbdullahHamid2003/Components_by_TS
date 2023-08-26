type tableProps = {
    id: number,
    userName: string,
    age: number,
    institute: string,
    isActive: boolean,
    category: string,
}

export default function BATable(props: tableProps) {
    const { id, userName, age, institute, isActive, category } = props;
    return (
        <div>
            <table className="table">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Institute</th>
                    <th>IsActive</th>
                    <th>Category</th>                    
                </tr>
                <tr>
                    <td>{id}</td>
                    <td>{userName}</td>
                    <td>{age}</td>
                    <td>{institute}</td>
                    <td>{isActive ? "Yes" : "No"}</td>
                    <td>{category}</td>
                </tr>
            </table>
        </div>
    )
}

