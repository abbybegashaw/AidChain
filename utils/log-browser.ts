import mixpanel from 'mixpanel-browser';

class Log {
  constructor(token: string) {
    mixpanel.init(token, {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage',
    });
  }
  identify(identifier: string) {
    mixpanel.identify(identifier);
  }
  track(name: string, data?: { [x: string]: string | number | boolean }) {
    // mixpanel.track(name, data);
  }
}

const log = new Log(process.env.NEXT_PUBLIC_MIX_PANEL_PROJECT_TOKEN as string);
export default log;
