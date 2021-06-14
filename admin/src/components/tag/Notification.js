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

        TagService.remove(props.data.tagId, props.data.isDeletingApproved)
            .then(response => {
                props.parentCallback(true, props.data.tagId);
            })
            .catch(e => {
                props.parentCallback(false, props.data.tagId);
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
