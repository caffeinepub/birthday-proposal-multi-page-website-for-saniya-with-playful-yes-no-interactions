import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen">
      <Outlet />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Page1,
});

const page2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/page2',
  component: Page2,
});

const page3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/page3',
  component: Page3,
});

const page4Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/page4',
  component: Page4,
});

const routeTree = rootRoute.addChildren([indexRoute, page2Route, page3Route, page4Route]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
