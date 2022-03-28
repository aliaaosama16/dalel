import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.efada.dalel',
  appName: 'دليل',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 9000,
      launchAutoHide: true,
      // androidScaleType: "CENTER_CROP",
      androidSplashResourceName: "splash",
      splashFullScreen: true,
      splashImmersive: false
    }
  },
  "android": {
    "allowMixedContent": true
  }
};

export default config;
