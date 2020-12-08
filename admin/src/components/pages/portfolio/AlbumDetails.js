import React, {useState, useEffect} from "react";
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import {useLocation} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {Form, Input, Button, message} from 'antd';
import {useQuill} from 'react-quilljs';
import EditableTagGroup from './EditableTagGroup';
import 'quill/dist/quill.snow.css';
import './css/style.css';
import './css/tags.css';
import 'antd/dist/antd.css'
import PortfolioService from "../../services/PortfolioService";

// todo jдумать что должно происходить по нажатию на кнопку reset
// todo редусмотреть что в описание может быть ссылка на отчет. Сделать атк что бы привела в нужный рздел
// todo добавить возможность добавлять тэги


export default function AlbumDetails() {

    let query = useQuery();

    const albumImg = `https://i.imgur.com/${query.get('cover')}.jpg`;

    const albumHash = query.get('id');
    const albumTitle = query.get('title');
    const albumDescription = query.get('description');

    const tagTypeYear = "year";
    const tagTypeCountry = "country";

    const pageTypePortfolio = "portfolio";

    // todo Пока не ясно, нужен ли мне этотт объект теперь
    const [album, setAlbum] = useState([]);

    const [form] = Form.useForm();
    const {quill, quillRef} = useQuill();

    const setAlbumData = () => {
          PortfolioService.getAlbum(albumHash)
            .then(response => {
                setAlbum(response.data);
                setForm(response.data.title, response.data.description);
            })
            .catch(e => {

                // todo в новой версии эта штука думаю будет не актуальна
                let title = '';
                let description = '';

                if (albumTitle && albumTitle !== 'null') {
                    title = albumTitle;
                }
                if (albumDescription && albumDescription !== 'null') {
                    description = albumDescription;
                }
                setForm(title, description);
            });
    };

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

    const onFinish = (values) => {
        var data = {
            albumHash: albumHash,
            title: values.title,
            description: quill.getText()
        };

        sendData(data);
    };

    const sendData = (data) => {

        PortfolioService.saveAlbum(data)
            .then(response => {
                successMessage();
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
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

    // todo Предусмотреть ссылку для возврата к списку альбомов
    // todo Подумать стоит ли это обозначать в меню

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const {register, handleSubmit, setValue} = useForm();
    const onSubmit = data => console.log(data);

    const handleChange = (e) => {
        alert(e.target.value);
        setValue("AntdInput", e.target.value);
    };

    const editorChange = (e) => {
        alert(e.target.value);
        setValue("EditorInput", e.target.value);
    };

    useEffect(() => {
        setAlbumData();
    }, [quill]);

    return (
        <>
            <Breadcrumbs title="Информация об альбоме" link="album-details"/>

            <div className="row" data-animated="0">
                <div className="col-md-12">
                    <div id="m-blog-content">
                        <article className="item">
                            <div className="mb-thumb">
                                <img src={albumImg} className="img-responsive" alt=""/>
                            </div>
                            <div className="row">
                                <div className="tagsYearRowDiv col-md-12">
                                    <span className="tagsYearLabelDiv">Год: </span>
                                    <span className="tagsYearContentDiv">
                                        <EditableTagGroup tagType={tagTypeYear} pageType={pageTypePortfolio} itemId={albumHash}/>
                                    </span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="tagsCountryRowDiv col-md-12">
                                    <span className="tagsCountryLabelDiv">Страна: </span>
                                    <span className="tagsCountryContentDiv">
                                        <EditableTagGroup tagType={tagTypeCountry} pageType={pageTypePortfolio} itemId={albumHash}/>
                                    </span>
                                </div>
                            </div>

                            <div className="row">

                                <Form form={form} name="control-hooks" onFinish={onFinish}>

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
                                            <Button type="primary" htmlType="submit">
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