import { Routes, Route } from 'react-router-dom';
import { Home, Naive, Network } from './route';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/naive" element={<Naive />} />
            <Route path="/network" element={<Network />} />
        </Routes>
    );
}

export default App;