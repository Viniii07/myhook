import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { ExampleForwardRef } from '../ExampleForwardRef';
import { Exception } from '../ExceptionHandling/Exception';
// import AboutUs from '../AboutUs';
import GettingDataOnChange from '../GettingDataOnChange';
import { ExampleCallback } from '../Hooks/ExampleCallback';
import { WithoutJSX } from '../WithoutJSX/WithoutJSX';
// import ExampleUseMemo from '../Hooks/ExampleUseMemo';
// import Home from '../Home';

const Home=lazy(()=>import('../Home'));
const AboutUs=lazy(()=>import('../AboutUs'));
const ExampleUseMemo=lazy(()=>import('../Hooks/ExampleUseMemo'))

export const Menu = () => {
  const linkData=[
    {href:"/home",content:"Home"},
    {href:"/aboutus",content:"AboutUs"},
    {href:"/onchange",content:"GettingData"},
    {href:"/useMemo",content:"UseMemo"},
    {href:"/usecallback",content:"UseCallback"},
    {href:"/forwardRef",content:"Forward Ref"},
    {href:"/eh",content:"Exception Handling"},
    {href:"/jsx",content:"Without JSX"}
  ]
  const routeData=[
    {path:"/home",element:<Home/>},
    {path:"/aboutus",element:<AboutUs/>},
    {path:"/onchange",element:<GettingDataOnChange/>},
    {path:"/",element:<Home/>},
    {path:"*",element:<Navigate to="/Home"/>},
    {path:"/useMemo",element:<ExampleUseMemo/>},
    {path:"/usecallback",element:<ExampleCallback/>},
    {path:"/forwardRef",element:<ExampleForwardRef/>},
    {path:"/eh",element:<Exception/>},
    {path:"/jsx",element:<WithoutJSX/>}
  ]
  return (
    <div id="menu">
      <BrowserRouter>
      <Suspense fallback="...I'm loading">
      <div id="menu-items">
        {
          linkData.map((obj)=>{
            return <Link to={obj.href}>{obj.content}</Link>
          })
        }
      </div>
        <Routes>
        {
          routeData.map((obj)=>{
            const {path,element}=obj
            return <Route path={path} element={element}/>
          })
        }
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}
