import { Routes, Route, useLocation } from 'react-router-dom';
import { MyRoutes } from './routes/routes.jsx';
import { Suspense } from 'react';
import LoadingSpinner from 'components/loading/LoadingSpinner';
function App() {
    const location = useLocation();
    const { routes, modalRoutes, state } = MyRoutes();
    const background = state?.background;

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes location={background || location}>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    >
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
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            )}
        </Suspense>
    );
}

export default App;
