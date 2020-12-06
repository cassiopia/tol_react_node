import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import React from "react";
import {Button, Form, Input, message} from "antd";
import {useQuill} from "react-quilljs";
//import BlogService from "../../services/BlogService";
import PageService from "../../services/PageService";
import {useLocation} from "react-router-dom";
import 'quill/dist/quill.snow.css';
import 'antd/dist/antd.css';
import './css/style.css';

const pageTypeBlog = "blog";


export default function ArticleDetails() {

    const [form] = Form.useForm();
    // todo Разобраться как сделать полее воода больше
    const {quill, quillRef} = useQuill();

    let query = useQuery();
    const albumId = query.get('id');

    const onFinish = (values) => {
        var data = {
            id: albumId,
            title: values.title,
            description: quill.getText(),
            page_type: pageTypeBlog
        };

        sendData(data);

    };

    const onReset = () => {
        // todo Нужно возвращать к старому значению
        //form.resetFields();

        if (quill) {
            // todo Нужно возвращать к старому значению
            // quill.setContents([
            //     {insert: ''}
            // ]);
        }
    };

    const sendData = (data) => {

        PageService.savePage(data)
            .then(response => {
                //todo Пока не знаю нужно ли мне это тут
                //setForm(response.data.title, response.data.description);
                successMessage();
            })
            .catch(e => {
               errorMessage();
                console.log(e);
            });
    };

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const setForm = (title, description) => {
        form.setFieldsValue({
            title: title,
            description: description
        });

        if (quill) {
            quill.setContents([
                {insert: description}
            ]);
        }
    };

    // todo Со временем разобраться как отцентрировать относительно формы
    const successMessage = () => {
        message.success({
            content: 'Изменения успешно сохранены!',
            className: 'successMessage',
            style: {
                marginTop: '70vh'
            }
        });
    };

    const errorMessage = () => {
        message.error({
            content: 'Ошибка сохранения данных!',
            className: 'errorMessage',
            style: {
                marginTop: '70vh'
            }
        });
    };


    return (
        <>
            <Breadcrumbs title={albumId ? 'Подробнее о статье' : 'Добавить статью'} link="aticle-details"/>

            <div className="row" data-animated="0">
                <div className="col-md-12">
                    <div id="m-blog-content">
                        <article className="item">
                            <div className="imgDiv mb-thumb">
                                <img src="img/blog/1-big.jpg" className="img-responsive" alt=""/>
                            </div>

                            <div className="row">

                                <Form form={form} className="formDiv" name="control-hooks" onFinish={onFinish}>

                                    <div className="col-md-12">
                                        <Form.Item
                                            name="title"
                                            label="Заголовок"

                                        >
                                            <Input/>
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-12">
                                        <Form.Item
                                            label="Описание"
                                        >
                                            <div ref={quillRef}/>
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-12">
                                        <Form.Item className="divButtons">
                                            <Button className="buttonSubmit" type="primary" htmlType="submit">
                                                Отправить
                                            </Button>
                                            <Button htmlType="button" onClick={onReset}>
                                                Откатить изменения
                                            </Button>
                                        </Form.Item>
                                    </div>

                                </Form>
                            </div>
                        </article>

                    </div>
                </div>
            </div>

        </>
    );
}