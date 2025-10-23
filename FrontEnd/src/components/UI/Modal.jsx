import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default ({ children, open,close  }) => {
  const dialog = useRef();
  useEffect(()=> {

    if(open){
        dialog.current.showModal();
    } else if(close){
        dialog.current.close();
    }
    
  },[open,close])

  return createPortal(
    <dialog ref={dialog} className="modal-backdrop">
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
};
