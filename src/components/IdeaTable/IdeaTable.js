import { Header } from './Header';
import { Row } from './Row';
import {Table} from "../../common/Table/Table";

export function IdeaTable(props) {
    return (
        <Table
            Header={Header}
            Row={Row}
            items={props.items}
        />
    )
}
