import React from "react";
import {Page} from "../../common/Page/Page";
import {IdeaTable} from "../IdeaTable/IdeaTable";
import {ModalField} from "../../common/Modal/Modal";


export function IdeaPage(props) {
    return (
        <Page
            title='Идеи и предложения'
            Modal={IdeaModal}
            modalTitle={'Создать идею'}
            createData={props.createData}
            addItem={props.addItem}
        >
            <IdeaTable items={props.items} />
        </Page>
    )
}

function IdeaModal() {
    return (
            <ModalField label='Идея'>
                <input type='text' className='modal__input' name='idea' required/>
            </ModalField>
    );
}