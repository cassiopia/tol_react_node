import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import React, {useEffect, useState} from "react";
import {Button, Form, Input} from "antd";
import {useQuill} from "react-quilljs";
import PageService from "../../services/PageService";
import {useLocation} from "react-router-dom";
import 'quill/dist/quill.snow.css';
import 'antd/dist/antd.css';
import './css/style.css';
import Notification from '../../notification/Notification';
import EditableTagGroup from "../../tag/EditableTagGroup";

const pageTypeBlog = "blog";

const tagTypeYear = "year";
const tagTypeCountry = "country";

export default function ArticleDetails() {

    const [article, setArticle] = useState([]);
    const [form] = Form.useForm();
    // todo Разобраться как сделать полее воода больше
    const {quill, quillRef} = useQuill();

    let query = useQuery();
    const articleId = query.get('id');

    const setArticleData = () => {
        PageService.getOneById(articleId)
            .then(response => {
                setArticle(response.data);
                setForm(response.data.title, response.data.description);
            })
            .catch(e => {
                Notification.errorNotification('Ошибка загрузки данных!');
                console.log(e);
            });
    };


    const onFinish = (values) => {
        var data = {
            id: articleId,
            title: values.title,
            description: quill.getText(),
            pageType: pageTypeBlog
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
                Notification.successNotification('Изменения успешно сохранены!');
            })
            .catch(e => {
                Notification.errorNotification('Ошибка сохранения данных!');
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

    useEffect(() => {
        if (articleId) {
            setArticleData();
        }
    }, [quill]);

    return (
        <>
            <Breadcrumbs title={articleId ? 'Подробнее о статье' : 'Добавить статью'} link="aticle-details"/>

            <div className="row" data-animated="0">
                <div className="col-md-12">
                    <div id="m-blog-content">
                        <article className="item">
                            <div className="imgDiv mb-thumb">
                                <img src="img/blog/1-big.jpg" className="img-responsive" alt=""/>
                            </div>

                            {articleId &&
                            <>
                                <div className="row">
                                    <div className="tagsYearRowDiv col-md-12">
                                        <span className="tagsYearLabelDiv">Год: </span>
                                        <span className="tagsYearContentDiv">
                                                <EditableTagGroup tagType={tagTypeYear} pageType={pageTypeBlog}
                                                                  itemId={articleId}/>
                                            </span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="tagsCountryRowDiv col-md-12">
                                        <span className="tagsCountryLabelDiv">Страна: </span>
                                        <span className="tagsCountryContentDiv">
                                            <EditableTagGroup tagType={tagTypeCountry} pageType={pageTypeBlog} itemId={articleId}/>
                                        </span>
                                    </div>
                                </div>
                            </>
                            }

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