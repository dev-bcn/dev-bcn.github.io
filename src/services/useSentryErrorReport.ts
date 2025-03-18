import * as Sentry from "@sentry/react";

export const useSentryErrorReport = (error: unknown) => {
  if (error instanceof Error) {
    Sentry.captureException(error);
  }
};
