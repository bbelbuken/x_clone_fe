import { MyRoutes } from 'routes/routes';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const routes = MyRoutes();
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />

      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component}>
          {route.children?.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
