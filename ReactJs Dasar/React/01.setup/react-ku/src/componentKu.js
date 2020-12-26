import React from 'react'

const componentKu = (props) => {
    const { pekerjaan, tempatTinggal, umur, merk, laptop, hobi } = props;
    return (
        <p>{pekerjaan} {tempatTinggal} {umur} {merk} {laptop} {hobi}</p>
    );
};

export default componentKu