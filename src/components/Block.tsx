import { FC } from "react";

interface BlockProps {
    title: string;
    children: React.ReactNode;
}

const Block: FC<BlockProps> = ({title, children}) => {
    return (
        <div className="block">
            <div className="block__title">
                {title}
            </div>
            <div className="block__body">
                {children}
            </div>
        </div>
    );
}

export default Block;