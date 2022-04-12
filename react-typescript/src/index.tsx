import React from "react";
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Whales} from "src/routes/Whales";
import {Sharks} from "src/routes/Sharks";

import "./index.css";
import {App} from "src/App";

// More route information can be found at https://reactrouter.com/docs/en/v6/getting-started/tutorial
const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="whales" element={<Whales />} />
                <Route path="sharks" element={<Sharks />} />
                <Route // No match case
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);
