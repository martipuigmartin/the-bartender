import {Tittle, Body} from './components';
import './index.css';

function App() {
    return (
        <div className="text-gray-700 font-bold montserrat text-xl">
            <div className="p-6 sm:p-10 md:p-16 flex flex-wrap">
                <Tittle/>
                <Body/>
            </div>
        </div>
    );
}

export default App;
