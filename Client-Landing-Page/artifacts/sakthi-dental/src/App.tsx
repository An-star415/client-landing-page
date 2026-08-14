interface ImportMetaEnv {
  readonly BASE_URL: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
import { createContext, useContext, useEffect, useState, type ComponentType, type ReactNode } from 'react';
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

import { Toaster } from '@/components/ui/toaster';

import { AppLayout } from '@/components/layout/AppLayout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Treatments } from '@/pages/Treatments';
import { FAQs } from '@/pages/FAQs';
import { Contact } from '@/pages/Contact';
import { Privacy } from '@/pages/Privacy';
import NotFound from '@/pages/not-found';

class QueryClient {}

type QueryClientProviderProps = {
  client: QueryClient;
  children?: unknown;
};

function QueryClientProvider({ children }: QueryClientProviderProps) {
  return <>{children}</>;
}

const queryClient = new QueryClient();

type RouterContextValue = {
  pathname: string;
};

const RouterContext = createContext<RouterContextValue>({ pathname: '/' });

function normalizePath(pathname: string) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

  if (!basePath || basePath === '/') {
    return pathname;
  }

  if (pathname === basePath) {
    return '/';
  }

  return pathname.startsWith(basePath) ? pathname.slice(basePath.length) || '/' : pathname;
}

type RouterProps = {
  children?: ReactNode;
};

function Router({ children }: RouterProps) {
  const [pathname, setPathname] = useState(() =>
    normalizePath(typeof window !== 'undefined' ? window.location.pathname : '/')
  );

  useEffect(() => {
    const handleLocationChange = () => {
      // Small safety check: remove trailing slash for consistent matching
      let newPath = normalizePath(window.location.pathname);
      if (newPath !== '/' && newPath.endsWith('/')) {
        newPath = newPath.slice(0, -1);
      }
      setPathname(newPath);
    };

    // NEW: Intercept all link clicks to make routing work instantly
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (
        anchor &&
        anchor.href &&
        anchor.href.startsWith(window.location.origin) &&
        anchor.getAttribute('target') !== '_blank'
      ) {
        e.preventDefault();
        const url = new URL(anchor.href);
        window.history.pushState({}, '', url.pathname + url.search + url.hash);
        handleLocationChange();
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    document.addEventListener('click', handleLinkClick); // Listen for clicks

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick); // Cleanup
    };
  }, []);

  return <RouterContext.Provider value={{ pathname }}>{children}</RouterContext.Provider>;
}

type RouteProps = {
  path?: string;
  component: ComponentType;
};

function Route({ path, component: Component }: RouteProps) {
  const { pathname } = useContext(RouterContext);

  if (path && pathname !== path) {
    return null;
  }

  return <Component />;
}

type SwitchProps = {
  children?: ReactNode;
};

function Switch({ children }: SwitchProps) {
  const { pathname } = useContext(RouterContext);
  const routes = Array.isArray(children) ? children : [children];

  for (const child of routes) {
    if (!child || typeof child !== 'object' || !('props' in child)) {
      continue;
    }

    const routeProps = (child as { props?: RouteProps }).props;
    if (!routeProps) {
      continue;
    }

    if (!routeProps.path || pathname === routeProps.path) {
      return <>{child}</>;
    }
  }

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppLayout> 
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/treatments" component={Treatments} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy" component={Privacy} />
            <Route component={NotFound} />
          </Switch>
        </AppLayout>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;