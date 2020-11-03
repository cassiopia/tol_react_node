import React from 'react';
import axios from 'axios';
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import {useLocation} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {Form, Input, Button} from 'antd';
import {useQuill} from 'react-quilljs';
import EditableTagGroup from './EditableTagGroup';
import 'quill/dist/quill.snow.css';
import './css/style.css';
import 'antd/dist/antd.css'


// todo Наверное можно сделать это как-то изящнее, но пока так
const buttonStyle = {
    "backgroundColor": "#75b209",
    "border": "#75b209"
};

const divButtonsStyle = {
    "textAlign": "center"
};

// todo Разобраться как нода должна общаться с базой
// todo редусмотреть что в описание может быть ссылка на отчет. Сделать атк что бы привела в нужный рздел
// todo добавить возможность добавлять тэги


export default function AlbumDetails() {
    const [form] = Form.useForm();
    const {quill, quillRef} = useQuill();

    const onFinish = (values) => {
        console.log(values);
        console.log(quill.getText());
    };

    const onReset = () => {
        form.resetFields();
    };

    // todo Предусмотреть ссылку для возврата к списку альбомов
    // todo Подумать стоит ли это обозначать в меню

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const albumImg = `https://i.imgur.com/${query.get('cover')}.jpg`;

    // todo придумать интерфес для редактирования
    // todo Добавить логику, если в БД пусто, то отображать то что пришло из запроса
    const albumTitle = query.get('title');

    //const albumDescription = query.get('description');
    const albumDescription = 'Пока так, пока не научусь вставлять что-нибудь в базу';


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
                                            <div>
                                                <div ref={quillRef}/>
                                            </div>
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