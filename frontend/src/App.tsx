import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConfessionPage from './pages/ConfessionPage';
import BeliefsPage from './pages/BeliefsPage';
import WorshipPage from './pages/WorshipPage';
import SermonsPage from './pages/SermonsPage';
import SermonDetailPage from './pages/SermonDetailPage';
import DiscipleshipPage from './pages/DiscipleshipPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const confessionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/confession',
  component: ConfessionPage,
});

const beliefsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/beliefs',
  component: BeliefsPage,
});

const worshipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/worship',
  component: WorshipPage,
});

const sermonsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sermons',
  component: SermonsPage,
});

const sermonDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sermons/$sermonId',
  component: SermonDetailPage,
});

const discipleshipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/discipleship',
  component: DiscipleshipPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  component: ResourcesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  confessionRoute,
  beliefsRoute,
  worshipRoute,
  sermonsRoute,
  sermonDetailRoute,
  discipleshipRoute,
  resourcesRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
