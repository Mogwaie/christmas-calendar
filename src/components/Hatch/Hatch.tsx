import React from 'react';

// Types
import { HatchType } from '../../helpers';

// Styles
import { Wrapper } from './Hatch.styles';

type Props = {
    hatch: HatchType;
    handleClick: (nr: number) => void;  
};

const Hatch: React.FC<Props> = ({ hatch: { nr, text, img, open }, handleClick}) => (
    <Wrapper open={open} background={img} enabled={true} onClick={() => handleClick(nr)}>
        <div className='front'>
            <p>{nr}</p>
        </div>
        <div className='back'>
            <p>{text}</p>
        </div>
    </Wrapper>
);

export default Hatch;
