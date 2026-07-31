import TextEditorContact from "@/components/contacts/partials/TextEditorContact";
import ReachMe from "@/components/contacts/partials/ReachMe";

const contacts = () => {
    return (
        <div className="flex animate-fade-up flex-col gap-[18px] min-[820px]:flex-row min-[820px]:items-stretch">
            <TextEditorContact/>
            <ReachMe/>
        </div>
    );
};

export default contacts;
