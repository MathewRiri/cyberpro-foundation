import type { ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-mist px-6 text-center text-ink">
      <p className="text-xs font-semibold uppercase tracking-brand text-crimson">Error</p>
      <h1 className="text-2xl font-bold text-navy">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-slate">{errorMessage(error)}</p>
    </main>
  );
}
