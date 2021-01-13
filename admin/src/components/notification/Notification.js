import {CheckCircleOutlined} from '@ant-design/icons';
import {CloseCircleOutlined} from '@ant-design/icons';
import {notification} from "antd";
import React from "react";

const errorNotification = (message, description = '') => {
    notification.open({
        message: message,
        description: description,
        style: {
            width: "auto",
            marginTop: '60vh'
        },
        duration: 0,
        icon: <CloseCircleOutlined style={{color: 'red'}}/>,
    });
};

const successNotification = (message, description = '') => {
    notification.open({
        message: message,
        description: description,
        style: {
            width: "auto",
            marginTop: '60vh'
        },
        duration: 1,
        icon: <CheckCircleOutlined style={{color: '#75b209'}}/>,
    });
};

export default {
    errorNotification,
    successNotification
};