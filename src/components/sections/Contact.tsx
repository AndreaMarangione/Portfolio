import Contacts from "@/components/contacts";
import SectionDivider from "@/components/layout/sectionDivider/SectionDivider";

const ContactsSection = () => {
    return (
        <>
            <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
                <SectionDivider dir="contact"/>
            </div>
            <div
                className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 min-[820px]:flex min-[820px]:min-h-0
                    min-[820px]:flex-1 min-[820px]:flex-col min-[820px]:justify-center">
                <Contacts/>
            </div>
        </>
    )
}

export default ContactsSection
