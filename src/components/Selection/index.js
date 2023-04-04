import { useState } from 'react';

const Selection = function() {
    const option = [
        {value: 'USD'},
        {value: 'GBP'},
        {value: 'EUR'},
        ];
    
    const [selected, setSelected] = useState(option[0].value)
    const handleChange = event => {
        setSelected(event.target.value);
    };
    
    const [selected2, setSelected2] = useState(option[0].value)
    const handleChange2 = event => {
        setSelected2(event.target.value);
    };
}


export default Selection