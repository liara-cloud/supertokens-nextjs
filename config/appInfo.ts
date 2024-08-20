const port = process.env.APP_PORT || 3000;

const apiBasePath = "/api/auth/";

export const websiteDomain = process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${port}`;

export const appInfo = {
    appName: "SuperTokens Demo App",
    websiteDomain: "https://myapp.liara.run",
    apiDomain: "https://myappoz.liara.run",
    apiBasePath: "/api/auth",
    websiteBasePath: "/auth",
};
