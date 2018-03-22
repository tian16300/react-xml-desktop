import * as $  from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
let xml = `<Module key="TextBar"></Module>`;
let xmlDoc = $.parseXML(xml) ;
let childs = xmlDoc.childNodes ;
let arr: Array<Element> = Array.prototype.slice.call( childs , 0 , childs.length);
arr.forEach( (node: Element) => {
    let name = node.tagName;
    if ('Module' === name ) {
       ReactDOM.render(<Module key="Textbar" /> , document.getElementById('root') as HTMLDivElement , () => {
           alert('第三方库测试'); 
                     
       });
    }
} );

function Module( props: {key: string}) {
    return <div  data-pKey={props.key} >组件测试</div>;
}