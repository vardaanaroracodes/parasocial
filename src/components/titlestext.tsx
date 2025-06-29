import { HandWrittenTitle } from "@/components/ui/hand-writing-text"

interface HandWrittenTitleDemoProps {
    title: string;
    triggerOnScroll?: boolean;
}

function HandWrittenTitleDemo({ title, triggerOnScroll = false }: HandWrittenTitleDemoProps) {
    return <HandWrittenTitle title={title} triggerOnScroll={triggerOnScroll} />
}

export default HandWrittenTitleDemo