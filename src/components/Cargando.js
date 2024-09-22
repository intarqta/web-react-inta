import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

function Cargando() {
  return (
    <>
      <div style={{width:'100%', height:'auto'}} className="container">
      <div style={{width:'15vh', height:'auto', justifyContent:'center'}} className="container">
            <ReactLoading
            type={"bars"}
            color={"#37bbed"}
            height={100}
            width={100}
            />
        </div>
      </div>
    </>
  );
}

export default Cargando;