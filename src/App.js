import React from 'react';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import CounterPage from './pages/CounterPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';


const App = () => {

    return (
        <div className='container mx-auto grid grid-cols-6 gap-4'>
            <Sidebar />
            <div className='col-span-5'>
                <Route path="/">
                    <DropdownPage />
                </Route>
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
                <Route path='/counter'>
                    <CounterPage initialElement={20} />
                </Route>
            </div>
        </div>
    )
}

export default App