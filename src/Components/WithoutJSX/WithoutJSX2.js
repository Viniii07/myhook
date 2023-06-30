import React, { createElement } from 'react'

// export const WithoutJSX2 = () => {
//   return (
//     <p id="parent">
//         <span>
//             <span>Hydrabad</span>
//             <span>Delhi</span>
//         </span>
//     </p>
//   )
// }

export const WithoutJSX2 = () => {
    return createElement(
        "p",
        {id:"parent"},
        createElement("span",null,[
        createElement("span",null,"Hydrabad"),
        createElement("span",null,"Delhi")
    ])
    )
  }
