import React from 'react';
function Mapcomponent(){
  const Student=[{name:"jaydeep",age:34},{name:"anuja",age:23}];
    return(
        <>
         {
            Student.map((item)=>
                <table border="2">
                    <tr>
                        <td>
                            {item.name}
                        </td>
                    </tr>
                </table>
            )
         }
        </>

    )
}
export default Mapcomponent;