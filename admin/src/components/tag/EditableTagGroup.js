import React from 'react';
import 'antd/dist/antd.css';
import '../pages/portfolio/css/tags.css';
import {Tag, Input, Tooltip} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import TagService from "../services/TagService";
import Notification from './Notification';

// todo Вычистить файл от всех моих todo-шных размышлений! И хорошеннько все потестировать!
class EditableTagGroup extends React.Component {

    constructor() {
        super();
        this.state = {
            tags: null,
            tagsProperties: null,
            inputVisible: false,
            inputValue: '',
            editInputIndex: -1,
            editInputValue: '',
            editInputId: '',
            prevTitle: '',
            prevEditInputIndex: '',
            isEditingApproved: false,
            isDeletingApproved: false,
            isEditResponseError: false,
            isDeleteResponseError: false,
            dataEdit: [],
            dataDelete: [],
            deletingTagIndex: '',
            isTagApproveDialog: true
        };
    }

    componentDidMount() {
        const itemId = this.props.itemId;

        // if item Id = 0 that it is a new page and it hasn't tags
        if (itemId !== "0") {
            TagService.getTags(itemId, this.props.pageType, this.props.tagType)
                .then(response => {

                    const responseTags = response.data;

                    const tagsProperties = responseTags.map((tag, index) => {
                        return {
                            'id' : tag.id,
                            'visible' : true
                        };
                    });

                    this.setState(
                        {
                            tags: responseTags,
                            tagsProperties: tagsProperties
                        }
                    );

                    const tagIgs = this.getTagIds(responseTags);
                    this.props.parentCallback(tagIgs);
                })
                .catch(e => {
                    console.log(e);
                });
        } else {

            this.setState(
                {
                    tags: []
                }
            );
        }
    }


    handleClose = async (removedTagId, index) => {

        var dataDelete = {
            tagId: removedTagId,
            isDeletingApproved: this.state.isDeletingApproved
        };

        await TagService.remove(removedTagId, this.state.isDeletingApproved)
            .then(response => {
                const tags = this.state.tags.filter(tag => tag.id !== removedTagId);
                this.setState({tags});

                const tagIgs = this.getTagIds(tags);
                this.props.parentCallback(tagIgs);
            })
            .catch(e => {
                if (e.response.status === 403) {
                    this.setState({isDeleteResponseError: true});
                    this.setState({dataDelete: dataDelete});
                    this.setState({deletingTagIndex: index});
                }
            });
    };

    showInput = () => {
        this.setState({inputVisible: true}, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({inputValue: e.target.value});
    };


    handleInputConfirm = () => {

        const {inputValue} = this.state;
        let {tags} = this.state;

        if (this.isTagDuplication(tags, inputValue)) {

            var data = {
                title: inputValue,
                tagType: this.props.tagType,
                pageType: this.props.pageType,
                itemId: this.props.itemId
            };

            TagService.addTag(data)
                .then(response => {

                    // todo response.data Можно вынести в переменную и потом протестить!

                    tags = [...tags, response.data];

                    let tagsProperties = {
                        'id' : response.data,
                        'visible' : true
                    };

                    tagsProperties = [...this.state.tagsProperties, tagsProperties];

                    this.setState({
                        tags,
                        tagsProperties: tagsProperties,
                        inputVisible: false,
                        inputValue: '',
                    });

                    const tagIgs = this.getTagIds(tags);
                    this.props.parentCallback(tagIgs);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    };

    getTagIds = tags => {
        return tags.map((tag, index) => {
            return tag.id;
        });
    };

    handleEditInputChange = e => {
        this.setState({editInputValue: e.target.value});
    };

    handleEditInputConfirm = () => {

        this.setState(({tags, editInputIndex, editInputValue, editInputId, isEditingApproved}) => {

            var dataEdit = {
                title: editInputValue,
                tagId: editInputId,
                tagType: this.props.tagType,
                pageType: this.props.pageType,
                itemId: this.props.itemId,
                isEditingApproved: isEditingApproved
            };

            let newTags = [...tags];

            if ((newTags[editInputIndex]['title'] !== editInputValue) && this.isTagDuplication(tags, editInputValue)) {

                let prevTitle = newTags[editInputIndex]['title'];

                newTags[editInputIndex]['title'] = editInputValue;

                TagService.editTag(dataEdit)
                    .then(response => {
                        // todo Какая должна быть реакция..?
                        // todo Если так, то нужно релоадить компонент... в предыдущей версии этого не было

                    })
                    .catch(e => {
                        if (e.response.status === 403) {
                            this.setState({isEditResponseError: true});
                            this.setState({dataEdit: dataEdit});
                        }
                    });


                return {
                    tags: newTags,
                    prevTitle: prevTitle,
                    prevEditInputIndex: editInputIndex,
                    editInputIndex: -1,
                    editInputValue: '',
                };
            } else {
                return {
                    tags: tags,
                    editInputIndex: -1,
                    editInputValue: '',
                };
            }

        });
    };

    saveInputRef = input => {
        this.input = input;
    };

    saveEditInputRef = input => {
        this.editInput = input;
    };

    isTagDuplication = (tags, inputValue) => {
        const tagTitleList = this.getTagTitleList(tags);
        return !!(inputValue && tagTitleList.indexOf(inputValue) === -1);
    };

    getTagTitleList = data => {
        return data.map((tag) => {
            return tag.title;
        });
    };

    tagEditApprove = isTagApproveDialog => {
        this.setState({isTagApproveDialog: isTagApproveDialog});
        this.setState({isEditResponseError: false});

        if (!isTagApproveDialog) {
            let approvedTags = this.state.tags;
            approvedTags[this.state.prevEditInputIndex]['title'] = this.state.prevTitle;
            this.setState({tags: approvedTags});
        }
    };

    tagDeleteApprove = isTagApproveDialog => {
        this.setState({isTagApproveDialog: isTagApproveDialog});
        this.setState({isDeleteResponseError: false});

        if (isTagApproveDialog) {
            let tagsProperties = this.state.tagsProperties;
            tagsProperties[this.state.deletingTagIndex] = false;

            this.setState({tagsProperties: tagsProperties});
        }
    };

    render() {
        const {tags, inputVisible, inputValue, editInputIndex, editInputValue, isEditResponseError, dataEdit, isDeleteResponseError, dataDelete} = this.state;

        return (
            <>
                {isEditResponseError && (
                    <Notification data={dataEdit} parentCallback={this.tagEditApprove} notificationType="editing"/>
                )}

                {isDeleteResponseError && (
                    <Notification data={dataDelete} parentCallback={this.tagDeleteApprove} notificationType="deleting"/>
                )}

                {tags && (
                    tags.map((tag, index) => {
                        if (editInputIndex === index) {
                            return (
                                <Input
                                    ref={this.saveEditInputRef}
                                    key={tag.title}
                                    size="small"
                                    className="tag-input"
                                    value={editInputValue}
                                    onChange={this.handleEditInputChange}
                                    onBlur={this.handleEditInputConfirm}
                                    onPressEnter={this.handleEditInputConfirm}
                                />
                            );
                        }

                        const isLongTag = tag.length > 20;

                        const tagElem = (
                            <Tag
                                color="#75b209"
                                className="edit-tag"
                                key={tag.title}
                                closable={true}
                                visible={this.state.tagsProperties[index]['visible']}
                                onClose={() => this.handleClose(tag.id, index)}
                            >
                  <span
                      onDoubleClick={e => {
                          this.setState({
                              editInputIndex: index,
                              editInputValue: tag.title,
                              editInputId: tag.id
                          }, () => {
                              this.editInput.focus();
                          });
                          e.preventDefault();
                      }}
                  >
                    {isLongTag ? `${tag.title.slice(0, 20)}...` : tag.title}
                  </span>
                            </Tag>
                        );
                        return isLongTag ? (
                            <Tooltip title={tag.title} key={tag.title}>
                                {tagElem}
                            </Tooltip>
                        ) : (
                            tagElem
                        );
                    })

                )}

                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        className="tag-input"
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}

                {!inputVisible && (
                    <Tag color="#75b209" className="site-tag-plus" onClick={this.showInput}>
                        <PlusOutlined/> New Tag
                    </Tag>
                )}

            </>
        );
    }
}

export default EditableTagGroup;