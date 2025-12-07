/**
 * An array of routes that are accessible to the public
 * Theses routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes are not accessible to the public
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for Api authentication routes
 * Routes that start with this prefix are use for Api
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect url after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
