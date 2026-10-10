"use client";

import Fault from "@/components/fault/Fault";
import {useDictionary} from "@/i18n/DictionaryProvider";

const ErrorPage = ({reset}: { error: Error & { digest?: string }; reset: () => void }) => {
    const {dict, lang} = useDictionary();

    return <Fault t={dict.fault} lang={lang} onRetry={reset}/>;
};

export default ErrorPage;
