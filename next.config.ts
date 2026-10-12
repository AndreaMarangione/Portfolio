import type {NextConfig} from "next";

const SECURITY_HEADERS = [
    {key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains"},
    {key: "X-Content-Type-Options", value: "nosniff"},
    {key: "X-Frame-Options", value: "DENY"},
    {key: "Referrer-Policy", value: "strict-origin-when-cross-origin"},
    {key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()"},
    {key: "Content-Security-Policy", value: "base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'"},
];

const nextConfig: NextConfig = {
    poweredByHeader: false,
    experimental: {
        globalNotFound: true,
    },
    headers: async () => [
        {source: "/:path*", headers: SECURITY_HEADERS},
    ],
};

export default nextConfig;
