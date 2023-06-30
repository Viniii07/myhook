import React, { createElement } from 'react';
import { WithoutJSX2 } from './WithoutJSX2';

// export const WithoutJSX = () => {
//   return (
//     <div id="myDiv" className="withoutJsx"><WithoutJSX2/></div>
//   )
// }


export const WithoutJSX = () => {
    return createElement(
        "div",
        {id:"myDiv",className:"withoutJsx"},
        <WithoutJSX2/>
    )
}