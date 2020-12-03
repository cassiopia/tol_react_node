import React from 'react';
import 'antd/dist/antd.css';
import './css/tags.css';
import {Tag, Input, Tooltip} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import TagService from "../../services/TagService";
import PortfolioService from "../../services/PortfolioService";


class EditableTagGroup extends React.Component {
    state = {
        tags: ['Unremovable', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: '',
    };

    componentDidMount() {
        TagService.getTags(this.props.itemId, this.props.pageType, this.props.tagType)
            .then(response => {
                //console.log(response.data);
                //console.log(tags);
                // this.setState({
                //     tags,
                //     inputVisible: false,
                //     inputValue: '',
                // });
            })
            .catch(e => {
                console.log(e);
            });

    }

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
        }

        var data = {
            title: this.state.inputValue,
            tag_type: this.props.tagType,
            page_type: this.props.pageType,
            item_id: this.props.itemId
        };

        TagService.addTag(data)
            .then(response => {
                console.log(response.data);
                console.log(tags);
                this.setState({
                    tags,
                    inputVisible: false,
                    inputValue: '',
                });
            })
            .catch(e => {
                console.log(e);
            });
    };

    handleEditInputChange = e => {
        this.setState({editInputValue: e.target.value});
    };

    handleEditInputConfirm = () => {
        console.log('Заходим на редактирование');
        console.log(this.state.editInputValue);
        var data = {
            title: this.state.editInputValue,
            tag_type: this.props.tagType,
            page_type: this.props.pageType,
            item_id: this.props.itemId
        };

        TagService.editTag(data)
            .then(response => {
                //console.log(response.data);
                //console.log(tags);
                // this.setState({
                //     tags,
                //     inputVisible: false,
                //     inputValue: '',
                // });
            })
            .catch(e => {
                console.log(e);
            });

        this.setState(({tags, editInputIndex, editInputValue}) => {
            const newTags = [...tags];
            newTags[editInputIndex] = editInputValue;

            return {
                tags: newTags,
                editInputIndex: -1,
                editInputValue: '',
            };
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
                {/*{console.log(this.props.type)}*/}
                {tags.map((tag, index) => {
                    if (editInputIndex === index) {
                        return (
                            <Input
                                ref={this.saveEditInputRef}
                                key={tag}
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
                            key={tag}
                            closable={true}
                            onClose={() => this.handleClose(tag)}
                        >
              <span
                  onDoubleClick={e => {
                      if (index !== 0) {
                          this.setState({editInputIndex: index, editInputValue: tag}, () => {
                              this.editInput.focus();
                          });
                          e.preventDefault();
                      }
                  }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
                        </Tag>
                    );
                    return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                            {tagElem}
                        </Tooltip>
                    ) : (
                        tagElem
                    );
                })}
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