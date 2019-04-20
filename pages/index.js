import React from 'react';
import {Button} from 'antd';
import Link from 'next/link'
export default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
        	<Link href="/about">
        	<Button type="primary">Ant Design 按钮组件</Button>
        	</Link>
         <p>Index Page!</p>
        </div>)
    }
}
