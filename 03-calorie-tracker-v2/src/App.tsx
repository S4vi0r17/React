import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Record from './components/Record';
import Layout from './layout/Layout';


const App = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path='/' element={<Layout />}>
                    <Route index element={<Record />} />
                    <Route path='form' element={<Form />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App