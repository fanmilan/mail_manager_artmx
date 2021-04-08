export function Row(item) {
    return (
        <tr key={item.id}>
            <td>{item.email}</td>
            <td>{item.type}</td>
            <td>{item.email}</td>
            <td>{item.comment}</td>
            <td>{item.created_at}</td>
        </tr>
    );
}