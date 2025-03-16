import { showConnect, UserSession, AppConfig } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

export function authenticate() {
  showConnect({
    appDetails: {
      name: "Shill Campaign App",
      icon: window.location.origin + "/logo.png",
    },
    userSession,
    onFinish: () => {
      window.location.reload();
    },
  });
}

export function signOut() {
  userSession.signUserOut(window.location.origin);
}
