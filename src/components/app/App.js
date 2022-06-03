import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage, Page404 } from "../pages";
import SingleComic from "../singleComic/SingleComic";


const App = () => {
    
    return (
        <Router>
            <div className="app">
            <AppHeader/>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/comics" element={<ComicsPage />}/> 
                    <Route path="*" element={<Page404 />}/> 
                    <Route path="/comics/:comicId" element={<SingleComic />}/> 

                </Routes>                   
            </main>
        </div>
        </Router>
        
    )
}

export default App;