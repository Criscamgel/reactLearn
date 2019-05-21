import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class post extends Component {

    render() {
        const { id, title } = this.props.info;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">
                        <i className="fa fa-search-plus"></i>
                    </Link>
                    <button className="btn btn-danger"><i className="fa fa-times"></i></button>
                    <button className="btn btn-success"><i className="fa fa-plus-circle"></i></button>
                </td>
            </tr>
        );
    }
}