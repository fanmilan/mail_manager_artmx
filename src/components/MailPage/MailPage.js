import React from "react";
import {Page} from "../../common/Page/Page";
import {ModalField} from "../../common/Modal/Modal";
import {MailTable} from "../MailTable/MailTable";


export function MailPage(props) {


    return (
        <Page title='Письма' Modal={MailModal} modalTitle={'Отправить письмо'} createData={props.createData} addItem={props.addItem}>
            <MailTable
                items={props.items}
            />
        </Page>
    )
}

function MailModal() {
    return (
        <>
            <ModalField label='Email'>
                <input type='email' className='modal__input' name='email' required/>
            </ModalField>
            <ModalField label='Тип письма'>
                <select className='modal__input' name='type'>
                    <option value={1}>Промокод за отзыв</option>
                    <option value={2}>Промокод на День Рождения</option>
                </select>
            </ModalField>
            <ModalField label='Комментарий'>
                <textarea className='modal__textarea' name='comment'></textarea>
            </ModalField>
        </>
    );
}