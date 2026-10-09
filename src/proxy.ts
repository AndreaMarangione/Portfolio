import {NextResponse, type NextRequest} from "next/server";
import {defaultLocale, locales, PATHNAME_HEADER} from "@/i18n/config";

export function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl;

    const hasLocale: boolean = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    if (hasLocale) {
        const headers = new Headers(request.headers);
        headers.set(PATHNAME_HEADER, pathname);

        return NextResponse.next({request: {headers}});
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;

    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/((?!_next|api|.*\\..*).*)"],
}
