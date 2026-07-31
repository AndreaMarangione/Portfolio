import TextEditorContact from "@/components/myContact/partials/TextEditorContact";
import ReachMe from "@/components/myContact/partials/ReachMe";

const MyContact = () => {
    return (
        <div className="flex animate-fade-up flex-col gap-[18px] min-[820px]:flex-row min-[820px]:items-stretch">
            <TextEditorContact/>
            <ReachMe/>
        </div>
    );
};

export default MyContact;
