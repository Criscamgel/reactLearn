import React,{Component} from 'react';

export default class post extends Component {

    render() {
        const {id, title} = this.props.info;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td><Link to={`/post/${id}`}/></td>
            </tr>
        );
    }
}