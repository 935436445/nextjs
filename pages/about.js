import React from 'react';
import {Button} from 'antd';
import Link from 'next/link'
export default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
        	<Link href="/index">
        	<Button type="primary">about</Button>
        	</Link>
         <p>Index Page!</p>
        </div>)
    }
}
