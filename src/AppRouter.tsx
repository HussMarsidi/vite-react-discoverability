import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import ROUTES from './constants/routes';
import Article from './pages/Articles';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route
                    index
                    path={ROUTES.HOME}
                    element={<Main />}
                />
                <Route path={`${ROUTES.ARTICLE}`}>
                    <Route
                        path={':slug'}
                        element={<Article />}
                    />
                </Route>
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </RouterRoutes>
        </BrowserRouter>
    );
}
