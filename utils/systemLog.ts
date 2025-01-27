import Mixpanel from 'mixpanel';

class SystemLog {
  mixpanel: any;
  constructor() {
    this.mixpanel = Mixpanel.init(process.env.MIXPANEL_SYSTEM_TOKEN as string);
  }
  track(event: string, data?: { [x: string]: string | number | boolean }) {
    if (data) {
      this.mixpanel.track(event, data);
    } else {
      this.mixpanel.track(event);
    }
  }
}

const systemLog = new SystemLog();
export default systemLog;
