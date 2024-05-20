# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- Hi This Project is Basically a React Practise Project 
- What i learned from this project 
- How to create React Environmnet 
- How to pass data throgh props 
- how to make component which is so much important etc
- Oke Here are some code Example : Where i mentioned that what is named export and default export?

        // import React from 'react'
        // // default export 
        // const App = () => {
        //   return (
        //     <div>
        //       <h2>This is nishat</h2>
        //     </div>
        //   )
        // }

        // export default App
        // // default export 


        // named export 

        // import React from 'react'

        //   const App1 = () => {
        //   return (
        //     <div>
        //       <h2>This is nishat12</h2>
        //     </div>
        //   )
        // }
        // export {App1}
        
        // ------------------------------------------------------------------------------------------------
        // export mane ber kore dewwa funtion ke/ ba kono kicu ke (object/variable/function)
        // import mane sei jinis ke accept kora ba grohon kora 

        // default export == > 1ta function/object/variable  export korte parbo , and aeta import kore save korte paren main.jsx e jekono name e kenona ekane default khota ase taie jekono name e save korte paren 
        // import Taufik from './App.jsx' 
        // kenona jokon export korsilen tokon bolaisilo export default mane sudu 1ta jinis export hobe 


        // named export == >   aekane export default thake na , jei name save korsen sei name main.jsx e save korte hobe 
        /**
        *  const App1 = () => {
        return (
            <div>
            <h2>This is nishat</h2>
            </div>
        )
        }
        export {App1}

        */
        // save korar formula holo : 
        // import{ App } from './App.jsx'

        // // ? ekon amr tow multiple function nea kaj kora lagve sei khetre ??
            // ----------------------- main.js file -----------------------
            // import {App1,App2,App3} from './App.jsx'
            // import AppFourth from './App.jsx';
            // ----------------------- main.js file -----------------------
        // import React from 'react'

        //   const App1 = () => {
        //   return (
        //     <div>
        //       <h2>This is nishat12</h2>
        //     </div>
        //   )
        // }

        // const App2 = () => {
        //   return (
        //     <div>
        //         <p>This is my second function </p>
        //     </div>
        //   )
        // }
        // const App3 = ()=>{
        //   return (
        //     <div>
        //       <p>This is my third function</p>
        //     </div>
        //   )
        // }


        // const App4 = () => {
        //   return (
        //     <div>
        //       <h2>hello this is fourth function.</h2>
        //     </div>
        //   )
        // }

        // export {App1,App2,App3} 
        // export default App4 // ciele default app o newwa jai
