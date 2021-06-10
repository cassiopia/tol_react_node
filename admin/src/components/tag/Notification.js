import React, {useState} from 'react';
import TagService from "../services/TagService";
import {Modal} from 'antd';

export default function Notification(props) {

    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleEditOk = () => {
        setIsModalVisible(false);
        props.data.isEditingApproved = true;

        TagService.editTag(props.data)
            .then(response => {
                props.parentCallback(true);
            })
            .catch(e => {
                props.parentCallback(false);
            });
    };

    const handleDeleteOk = () => {
        setIsModalVisible(false);
        props.data.isDeletingApproved = true;

        // todo Когда удаляю тэг, после подтверждения  вмодальном окне, то удаляются ещё все тэги с другой страницы
        // todo !!! Хорошенько протестировать этот момент!
        // todo При сохранении удаляет все тэги со страницы. Когда нотификэйшен. А когда нет?

        console.log('props.data in handleDeleteOk');
        console.log(props.data);
        TagService.remove(props.data.tagId, props.data.isDeletingApproved)
            .then(response => {
                props.parentCallback(true);
            })
            .catch(e => {
                props.parentCallback(false);
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        props.parentCallback(false);
    };

    return (
        <>
            {props.notificationType === 'editing' && (
                <Modal
                    title="Внимание! Тэг используется на других страницах!"
                    visible={isModalVisible}
                    onOk={handleEditOk}
                    onCancel={handleCancel}
                    okText="Да"
                    cancelText="Нет"
                >
                    Действительно хотите отредактировать?
                </Modal>
            )}

            {props.notificationType === 'deleting' && (
                <Modal
                    title="Внимание! Тэг используется на других страницах!"
                    visible={isModalVisible}
                    onOk={handleDeleteOk}
                    onCancel={handleCancel}
                    okText="Да"
                    cancelText="Нет"
                >
                    Действительно хотите удалить?
                </Modal>
            )}

        </>
    );
}
