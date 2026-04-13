import React, { useEffect, forwardRef } from 'react';

interface TurnstileProps {
  siteKey: string;
  onSuccess?: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export const Turnstile = forwardRef<unknown, TurnstileProps>(
  ({ onSuccess }, _ref) => {
    useEffect(() => {
      onSuccess?.('mock-turnstile-token');
    }, [onSuccess]);

    return <div data-testid="turnstile-mock" />;
  },
);

Turnstile.displayName = 'Turnstile';

export type TurnstileInstance = {
  reset: () => void;
};
