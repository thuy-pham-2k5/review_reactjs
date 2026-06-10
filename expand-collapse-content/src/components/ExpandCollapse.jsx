import { useState } from "react";
import Content from "./Content"

function ExpandCollapse() {
    const [status, setStatus] = useState(false);

    const clicked = () => {setStatus(!status)}

    return (
        <div>
            <h2 style={{padding: '15px', backgroundColor: 'green', textAlign: 'left', color: 'white'}}>Conditional rendering</h2>
            <button onClick={clicked}>{status ? 'Đóng giới thiệu' : "Xem giới thiệu"}</button>
            {status && <Content />}
        </div>
    )
}

export default ExpandCollapse;