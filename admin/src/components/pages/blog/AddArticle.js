import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import React from "react";
import {Button, Form, Input, message} from "antd";
import {useQuill} from "react-quilljs";
import BlogService from "../../services/BlogService";
import {useLocation} from "react-router-dom";
import 'quill/dist/quill.snow.css';
import 'antd/dist/antd.css';
import './css/style.css';

export default function AddArticle() {
    const [form] = Form.useForm();
    // todo Разобраться как сделать полее воода больше
    const {quill, quillRef} = useQuill();

    let query = useQuery();

    const onFinish = (values) => {
        var data = {
            title: values.title,
            description: quill.getText()
        };

        sendData(data);
        successMessage();
    };

    const onClear = () => {

        form.resetFields();

        if (quill) {

            quill.setContents([
                {insert: ''}
            ]);
        }
    };

    const sendData = (data) => {
        //todo Привести  в порядок метод
        BlogService.saveAlbum(data)
            .then(response => {

                // setTutorial({
                //     id: response.data.id,
                //     title: response.data.title,
                //     description: response.data.description,
                //     published: response.data.published
                // });
                // setSubmitted(true);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

        // todo Запилить по аналогии. Разбери по косточкам, мысли хорошие

        // TutorialDataService.create(data)
        //     .then(response => {
        //         setTutorial({
        //             id: response.data.id,
        //             title: response.data.title,
        //             description: response.data.description,
        //             published: response.data.published
        //         });
        //         setSubmitted(true);
        //         console.log(response.data);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });

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


    return (
        <>
            <Breadcrumbs title="Добавить статью" link="add-aticle"/>

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
                                            <Button htmlType="button" onClick={onClear}>
                                                Очистить
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