import React from 'react'

const componentKu = (props) => {
    const { hasilKu, angkaKu } = props;
    return (
        <p>Ini adalah {hasilKu} dan angka {angkaKu}</p>
    );
};

export default componentKu