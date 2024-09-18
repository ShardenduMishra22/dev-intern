import { createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import CSSBattles from './pages/CSSBattles.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path : '/CSS-Battles',
    element: <CSSBattles />,
  },
]);

export default router;
