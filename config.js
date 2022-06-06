let { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, SERVER_SESSION_SECRET, PORT } = process.env;
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET || !FORGE_CALLBACK_URL || !SERVER_SESSION_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
const INTERNAL_DA_TOKEN_SCOPES = ['code:all'];
const INTERNAL_TOKEN_SCOPES = ['data:read', 'code:all'];
const PUBLIC_TOKEN_SCOPES = ['viewables:read'];
PORT = PORT || 8080;

module.exports = {
    FORGE_CLIENT_ID,
    FORGE_CLIENT_SECRET,
    FORGE_CALLBACK_URL,
    SERVER_SESSION_SECRET,
    INTERNAL_TOKEN_SCOPES,
    INTERNAL_DA_TOKEN_SCOPES,
    PUBLIC_TOKEN_SCOPES,
    PORT
};