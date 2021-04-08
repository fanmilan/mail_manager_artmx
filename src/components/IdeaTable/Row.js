export function Row(item) {
    return (
        <tr key={item.id}>
            <td>{item.idea}</td>
            <td>{item.created_at}</td>
        </tr>
    );
}