import React from 'react';
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import {useLocation} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {Form, Input, Button, message} from 'antd';
import {useQuill} from 'react-quilljs';
import EditableTagGroup from './EditableTagGroup';
import 'quill/dist/quill.snow.css';
import './css/style.css';
import 'antd/dist/antd.css'
import PortfolioService from "../../services/PortfolioService";


// todo Наверное можно сделать это как-то изящнее, но пока так
const buttonStyle = {
    "backgroundColor": "#75b209",
    "border": "#75b209"
};

const divButtonsStyle = {
    "textAlign": "center"
};


// todo jдумать что должно происходить по нажатию на кнопку reset
// todo редусмотреть что в описание может быть ссылка на отчет. Сделать атк что бы привела в нужный рздел
// todo добавить возможность добавлять тэги


export default function AlbumDetails() {

    let query = useQuery();

    const albumImg = `https://i.imgur.com/${query.get('cover')}.jpg`;

    const albumId = query.get('id');
    const albumTitle = query.get('title');

    //const albumDescription = query.get('description');
    const albumDescription = 'Пока так, пока не научусь вставлять что-нибудь в базу';


    const [form] = Form.useForm();
    const {quill, quillRef} = useQuill();

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
            album_hash: albumId,
            title: values.title,
            description: quill.getText()
        };

        sendData(data);
        successMessage();
    };

    const sendData = (data) => {

        //console.log(data);

        //todo Моет быть создать флаг, который проверит есть ли данные в бд или это пока онлиимгурданные?
        PortfolioService.save(data)
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


    const onReset = () => {
        form.resetFields();
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


    React.useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(albumDescription);
        }
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
                                <div className="tagsDiv col-md-12">
                                    <EditableTagGroup/>
                                </div>

                                <Form form={form} name="control-hooks" onFinish={onFinish}>

                                    <div className="col-md-12">
                                        <Form.Item
                                            name="title"
                                            label="Заголовок"
                                            initialValue={albumTitle}
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
                                        <Form.Item style={divButtonsStyle}>
                                            <Button style={buttonStyle} type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                            <Button htmlType="button" onClick={onReset}>
                                                Reset
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