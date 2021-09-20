import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import React, {useEffect, useState} from "react";
import {Button, Form, Input} from "antd";
import {useQuill} from "react-quilljs";
import PageService from "../../services/PageService";
import {useLocation, useHistory} from "react-router-dom";
import 'quill/dist/quill.snow.css';
import 'antd/dist/antd.css';
import './css/style.css';
import EditableTagGroup from "../../tag/EditableTagGroup";
import Notification from "../../notification/Notification";


const pageTypeBlog = "blog";

const tagTypeYear = "year";
const tagTypeCountry = "country";


export default function ArticleDetails() {

    const [article, setArticle] = useState([]);

    const [isImagePreview, setImagePreview] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const [previewImgSrc, setPreviewImgSrc] = useState("");

    const [tagIdsYear, setTagIdsYear] = useState([]);
    const [tagIdsCountry, setTagIdsCountry] = useState([]);

    const [form] = Form.useForm();
    // todo Разобраться как сделать полее воода больше
    const {quill, quillRef} = useQuill();

    let query = useQuery();
    let history = useHistory();

    const articleId = query.get('id');

    const setArticleData = () => {
        PageService.getOneById(articleId)
            .then(response => {
                const data = response.data;
                setArticle(data);
                setForm(data.title, data.description);
                setPreviewImgSrc(data.PageImages[0].image_src);
                setImageSrc(data.PageImages[0].image_src);
                setImagePreview(true);
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
            pageType: pageTypeBlog,
            imageSrc: imageSrc,
            tagIdsYear: tagIdsYear,
            tagIdsCountry: tagIdsCountry
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
                history.push('/blog');
            })
            .catch(e => {
                Notification.errorNotification('Ошибка сохранения данных!');
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

    const childrenTagIdsYear = (tagIds) => {
        setTagIdsYear(tagIds);
    };

    const childrenTagIdsCountry = (tagIds) => {
        setTagIdsCountry(tagIds);
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
                                           value={imageSrc} required/>

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

                            {/*{articleId &&*/}
                            <>
                                <div className="row">
                                    <div className="tagsYearRowDiv col-md-12">
                                        <span className="tagsYearLabelDiv">Год: </span>
                                        <span className="tagsYearContentDiv">
                                                <EditableTagGroup tagType={tagTypeYear} pageType={pageTypeBlog}
                                                                  itemId={articleId ? articleId : '0'}
                                                                  parentCallback={childrenTagIdsYear}/>

                                            </span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="tagsCountryRowDiv col-md-12">
                                        <span className="tagsCountryLabelDiv">Страна: </span>
                                        <span className="tagsCountryContentDiv">
                                            <EditableTagGroup tagType={tagTypeCountry} pageType={pageTypeBlog}
                                                              itemId={articleId ? articleId : '0'}
                                                              parentCallback={childrenTagIdsCountry}/>
                                        </span>
                                    </div>
                                </div>
                            </>
                            {/*}*/}

                            <Form form={form} name="control-hooks" onFinish={onFinish}>
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