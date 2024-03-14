
import './App.scss';
import { Routes, Route } from 'react-router';
import publicRoutes from './components/Routes/PublicRoutes';

function App() {
  return (
    <>
    <Routes>
    {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
    </Routes>
    
    </>
  );
}

export default App;
