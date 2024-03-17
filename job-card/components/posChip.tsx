import React from 'react';

interface PosProps {
    position: string;
}

const Pos: React.FC<PosProps> = ({ position }) => {
    return (
        <span className="bg-emerald-50 text-emerald-500 text-xs font-semibold px-2.5 py-2 rounded-2xl" >{position}</span>
    );
};

export default Pos;