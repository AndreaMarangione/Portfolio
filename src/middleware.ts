import {NextResponse, type NextRequest} from "next/server";
import {defaultLocale, locales} from "@/i18n/config";

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    const hasLocale: boolean = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    if (hasLocale) return;

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;

    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/((?!_next|api|.*\\..*).*)"],
}
