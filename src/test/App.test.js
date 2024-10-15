import React from "react";
import { createRoot } from 'react-dom/client'
import App from "../App"

it("renders without crashes", ()=>{
    const div = document.createElement("div")
    createRoot(div)
    .render(<App />)
    ReactDom.unmountComponentAtNode(div)
})