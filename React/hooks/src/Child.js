import React, {useContext} from "react";
function Child({theme}){
    return <div className={theme?"dark":"light"}>child</div>;
}
export default Child;