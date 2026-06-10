function StudentInfo() {
    const students = [
        {Id: 1, Name: 'Nguyen Van A', Age: '30', Address: 'Ha Noi'},
        {Id: 2, Name: 'Nguyen Van B', Age: '40', Address: 'Ha Noi'},
        {Id: 3, Name: 'Nguyen Van C', Age: '50', Address: 'Ha Noi'},
    ]
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th> 
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.Id}>
                        <td id={student.Id}>{student.Id}</td>
                        <td>{student.Name}</td>
                        <td>{student.Age}</td>
                        <td>{student.Address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default StudentInfo;