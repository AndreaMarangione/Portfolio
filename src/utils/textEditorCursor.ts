import {TextEditorCursorType, TextEditorLineType} from "@/components/ui/textEditor/type";

const MARKUP_LENGTH: Record<TextEditorLineType["kind"], number> = {
    heading: 2,
    bold: 4,
    quote: 2,
    text: 0,
    link: 0,
    blank: 0,
};

const textEditorCursor = (lines: TextEditorLineType[]): TextEditorCursorType => {
    const last: TextEditorLineType = lines[lines.length - 1];
    const textLength: number = last.kind === "blank" ? 0 : last.text.length;

    return {
        line: lines.length,
        column: MARKUP_LENGTH[last.kind] + textLength + 1,
    };
};

export default textEditorCursor;
