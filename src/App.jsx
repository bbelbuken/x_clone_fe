import { Routes, Route, useLocation } from 'react-router-dom';
import { MyRoutes } from './routes/routes.jsx';

function App() {
  const location = useLocation();
  const { routes, modalRoutes, state } = MyRoutes();
  const background = state?.background;

  return (
    <>
      <Routes location={background || location}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child) => (
              <Route
                key={child.path}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>

      {background && (
        <Routes>
          {modalRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      )}
    </>
  );
}

export default App;
