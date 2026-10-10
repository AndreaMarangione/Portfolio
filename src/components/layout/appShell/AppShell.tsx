import Navbar from "@/components/layout/navbar/Navbar";
import MatrixBg from "@/components/matrixBg/MatrixBg";
import {poppins} from "@/app/constant";
import {DictionaryProvider} from "@/i18n/DictionaryProvider";
import {AppShellProps} from "@/components/layout/appShell/type";

const AppShell = ({dict, lang, children}: AppShellProps) => (
    <html
        lang={lang}
        className={`ubuntu ${poppins.variable} h-full antialiased`}
    >
    <body className="min-h-full flex flex-col">
    <DictionaryProvider dict={dict} lang={lang}>
        <MatrixBg/>
        <Navbar/>
        <main className="flex-1">{children}</main>
    </DictionaryProvider>
    </body>
    </html>
);

export default AppShell;
