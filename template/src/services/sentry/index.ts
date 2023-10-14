// // Import the Sentry React Native SDK
// import * as Sentry from '@sentry/react-native';
// import Config from 'react-native-config';
// import {getNumberBuildApp, getVersionApp} from 'services/deviceInfo';
//
// export const reactNavigationInstrumentation =
//   new Sentry.ReactNavigationInstrumentation({
//     routeChangeTimeoutMs: 500, // How long it will wait for the route change to complete. Default is 1000ms
//   });
//
// export const initSentry = () => {
//   Sentry.init({
//     // Replace the example DSN below with your own DSN:
//     dsn: 'https://cd415ed3fc624b42866184db6b238679@o1275852.ingest.sentry.io/6471118',
//     environment: Config.ENVIRONMENT,
//     debug: false,
//     // beforeSend: e => {
//     //   console.log('Event beforeSend:', e);
//     //   return e;
//     // },
//     // This will be called with a boolean `didCallNativeInit` when the native SDK has been contacted.
//     onReady: ({didCallNativeInit}) => {
//       console.log('onReady called with didCallNativeInit:', didCallNativeInit);
//     },
//     maxCacheItems: 40, // Extend from the default 30.
//     integrations: [
//       new Sentry.ReactNativeTracing({
//         // The time to wait in ms until the transaction will be finished, For testing, default is 1000 ms
//         idleTimeout: 5000,
//         routingInstrumentation: reactNavigationInstrumentation,
//       }),
//     ],
//     enableAutoSessionTracking: true,
//     // For testing, session close when 5 seconds (instead of the default 30) in the background.
//     sessionTrackingIntervalMillis: 5000,
//     // This will capture ALL TRACES and likely use up all your quota
//     tracesSampleRate: 1.0,
//     // Sets the `release` and `dist` on Sentry events. Make sure this matches EXACTLY with the values on your sourcemaps
//     // otherwise they will not work.
//     release: `com.projectname@${getVersionApp()}`,
//     dist: `${getNumberBuildApp()}`,
//     attachStacktrace: true,
//   });
// };
//
// export const captureException = (err: any) => {
//   Sentry.captureException(err);
// };
//
// export const captureMessage = (mess: string) => {
//   Sentry.captureMessage(mess);
// };
//
// export const setUserSentry = (user: Sentry.User) => {
//   Sentry.setUser(user);
// };
