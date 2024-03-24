import React from 'react';

interface TagProps {
    tag: string;
    num: number;
}

const Tag: React.FC<TagProps> = ({ tag, num }) => {
    return (
        num == 0 ? <span className="text-amber-400 text-xs font-semibold me-2 px-2.5 py-2 rounded-full border border-amber-400">{tag}</span>:
        <span className=" text-indigo-600 text-xs font-semibold me-2  py-2 rounded-full border border-indigo-600 px-6">{tag}</span>
    );
};

export default Tag;