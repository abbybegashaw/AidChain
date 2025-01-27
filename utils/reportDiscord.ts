export default function reportDiscord({
  error,
  currentUser,
  isError,
  message: _message,
  errorDetails,
  messageDetails,
}: {
  message?: string;
  error?: Error;
  currentUser?: any;
  isError?: boolean;
  errorDetails?: unknown;
  messageDetails?: unknown;
}) {
  const { stack } = error || {};
  const message = isError ? error?.message : _message;
  const errorHookUrl = process.env.ERROR_REPORTING_WEBHOOK;
  const notificationHookUrl = process.env.ALERT_REPORTING_WEBHOOK;
  const hookUrl = isError ? errorHookUrl : notificationHookUrl;
  if (hookUrl) {
    const content = JSON.stringify(
      {
        // user: currentUser?.email || 'GUEST',
        // userFullName: currentUser?.name || 'GUEST',
        error,
        message,
        stack,
        ...(isError ? { customErrorDetails: errorDetails } : undefined),
        ...(messageDetails ? { ...messageDetails } : undefined),
        url: typeof window !== 'undefined' ? window?.location : '',
      },
      null,
      2
    );

    const fd = new FormData();
    fd.append(
      'content',
      isError ? 'Error notification' : 'Notification: ' + message
    );
    fd.append(
      'file',
      new Blob([content], { type: 'text/plain' }),
      'log-' + Date.now() + '.json'
    );

    fetch(hookUrl, {
      method: 'POST',
      body: fd,
    });
  }
}
