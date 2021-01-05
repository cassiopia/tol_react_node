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
    const [isImagePreview, setImagePreview] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const [previewImgSrc, setPreviewImgSrc] = useState("");

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


    function showPreview(e) {
        if (e.target.value.length > 0) {
            setPreviewImgSrc(e.target.value);
            setImageSrc(e.target.value);
            setImagePreview(true);
        }
    }

    const resetImagePreview = (e) => {
        e.preventDefault();
        setPreviewImgSrc("");
        setImagePreview(false);
        setImageSrc("");
    };

    useEffect(() => {
        if (articleId) {
            setArticleData();
        }
    }, [quill]);

    return (
        <>
            <Breadcrumbs title={articleId ? 'Подробнее о статье' : 'Добавить статью'} link="article-details"/>

            <div className="row" data-animated="0">
                <div className="col-md-12">
                    <div id="m-blog-content">
                        <article className="item">
                            <Form form={form} name="control-hooks" onFinish={onFinish}>

                                <div className="row">
                                    <div className="col-md-12 imgDivLabel">
                                        {/*todo Разобраться как сделать * у лэйбла. antd разметка при данном положенеии лэйбла не подходит*/}
                                        <label
                                            htmlFor="imageSrcInput"

                                        >
                                            Ссылка на изображение:
                                        </label>
                                    </div>
                                    <div className="col-md-12">

                                        <Input name="imageSrcInput" id="imageSrcInput" onChange={showPreview}
                                               value={imageSrc} required="true" />

                                        <div className={isImagePreview ? 'mp-thumb imgDivPreview' : 'mp-thumb'}>

                                            <img id="imageFilePreview" src={previewImgSrc}
                                                 className="img-responsive"
                                                 alt=""/>

                                            <div className="overlay1-hr">
                                                <a href="/" onClick={resetImagePreview} className="link">
                                                    <i className="fa fa-trash-o fa-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
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
                                            <EditableTagGroup tagType={tagTypeCountry} pageType={pageTypeBlog}
                                                              itemId={articleId}/>
                                        </span>
                                        </div>
                                    </div>
                                </>
                                }

                                <div className={articleId ? 'row' : 'divMargin row'}>

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
                                </div>
                            </Form>
                        </article>
                    </div>
                </div>
            </div>

        </>
    );

}