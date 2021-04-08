import './Table.scss';


export function Table(props) {
    return (<div className='table'>
        <table>
            <thead>
                {props.Header()}
            </thead>
            <tbody>
                {props.items.map(props.Row)}
            </tbody>
        </table>
    </div>);
}