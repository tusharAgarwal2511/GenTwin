import React, { useEffect, useRef } from "react";
import "./newPrompt.css";

const NewPrompt = () => {
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);
    return (
        <>
            TEST
            <div className="endchat" ref={endRef}></div>
            <form action="" className="newform">
                <label htmlFor="file">
                    <img src="/attachment.png" alt="" />
                </label>
                <input id="file" type="file" multiple={false} hidden />
                <input type="text" placeholder="Ask me anything..." />
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </>
    );
};

export default NewPrompt;
