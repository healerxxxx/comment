import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        };
    }

    componentDidMount() {
        this.textarea.focus();
    }

    componentWillMount() {
        this._loadUsername();
    }

    _loadUsername() {
        const username = localStorage.getItem('username');
        if (username) {
            this.setState({ username });
        }
    }

    //持久化
    _saveUsername(username) {
        localStorage.setItem('username', username);
    }

    handelUsernameBlur = (e) => {
        this._saveUsername(e.target.value);
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleContentChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    handleSubmit = () => {
        const onSubmit = this.props.onSubmit;
        if (onSubmit) {
            onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            });
        }
        this.setState({ content: '' });
    }

    render() {

        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input
                            value={this.state.username}
                            onBlur={this.handelUsernameBlur}
                            onChange={this.handleUsernameChange} />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea
                            ref={textarea => (this.textarea = textarea)}
                            value={this.state.content}
                            onChange={this.handleContentChange} />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        );
    }
}

CommentInput.propTypes = {
    onSubmit: PropTypes.func,
};

export default CommentInput;
