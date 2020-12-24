import React from 'react';
import 'antd/dist/antd.css';
import '../pages/portfolio/css/tags.css';
import {Tag, Input, Tooltip} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import TagService from "../services/TagService";


class EditableTagGroup extends React.Component {

    constructor() {
        super();
        this.state = {
            tags: null,
            inputVisible: false,
            inputValue: '',
            editInputIndex: -1,
            editInputValue: '',
            editInputId: '',
        };
    }

    componentDidMount() {
        TagService.getTags(this.props.itemId, this.props.pageType, this.props.tagType)
            .then(response => {
                const tagTitleList = this.getTagTitleList(response.data);

                this.setState(
                    {
                        tags: response.data
                    }
                );
            })
            .catch(e => {
                console.log(e);
            });

    }

    getTagTitleList = data => {
        return data.map((tag, index) => {
            return tag.title;
        });
    };

    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({tags});
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
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];

            var data = {
                title: this.state.inputValue,
                tagType: this.props.tagType,
                pageType: this.props.pageType,
                itemId: this.props.itemId
            };

            TagService.addTag(data)
                .then(response => {
                    this.setState({
                        tags,
                        inputVisible: false,
                        inputValue: '',
                    });
                })
                .catch(e => {
                    console.log(e);
                });
        }
    };

    handleEditInputChange = e => {
        this.setState({editInputValue: e.target.value});
    };

    handleEditInputConfirm = () => {

        this.setState(({tags, editInputIndex, editInputValue, editInputId}) => {

            if (editInputValue && tags.indexOf(editInputValue) === -1) {

                const newTags = [...tags];

                newTags[editInputIndex]['title'] = editInputValue;

                var data = {
                    title: this.state.editInputValue,
                    tagId: this.state.editInputId,
                    tagType: this.props.tagType
                };

                TagService.editTag(data)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });

                return {
                    tags: newTags,
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


    render() {
        const {tags, inputVisible, inputValue, editInputIndex, editInputValue} = this.state;

        return (
            <>
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
                                onClose={() => this.handleClose(tag.title)}
                            >
                  <span
                      onDoubleClick={e => {
                          if (index !== 0) {
                              this.setState({
                                  editInputIndex: index,
                                  editInputValue: tag.title,
                                  editInputId: tag.id
                              }, () => {
                                  this.editInput.focus();
                              });
                              e.preventDefault();
                          }
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