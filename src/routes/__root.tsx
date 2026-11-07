import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="w-full max-w-lg border-2 border-ink bg-paper">
        <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-paper">
          <span>ERR / 404</span>
          <span>SHEET MISSING</span>
        </div>
        <div className="p-6">
          <h1 className="font-display text-6xl uppercase leading-none tracking-[-0.04em]">404</h1>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
            [ Page not found / Halaman tidak ditemukan ]
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-fill mt-6">
            Go home <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="w-full max-w-lg border-2 border-ink bg-paper">
        <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-paper">
          <span>ERR / 500</span>
          <span>SYSTEM FAULT</span>
        </div>
        <div className="p-6">
          <h1 className="font-display text-2xl uppercase leading-tight tracking-[-0.02em]">
            This page didn't load
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Something went wrong on our end. You can try refreshing or head back home.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="btn-fill"
            >
              Try again
            </button>
            <a href="/" className="btn-line">
              Go home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Arrafi Nur Hafiz — Full-Stack Developer & Security Enthusiast" },
      {
        name: "description",
        content:
          "Portofolio Arrafi Nur Hafiz: Full-Stack Web Development, Cybersecurity, AI Automation, dan DevOps.",
      },
      { name: "author", content: "Arrafi Nur Hafiz" },
      { property: "og:title", content: "Arrafi Nur Hafiz — Portofolio" },
      {
        property: "og:description",
        content: "Building secure digital experiences: Web, Security, AI, DevOps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
