import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
    return (
        <div className="homepage">
            <img className="orbital" src="/orbital.png" alt="" />
            <div className="left">
                <h1>GenTwin</h1>
                <h2>Supercharge your creativity and productivity</h2>
                <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorem reprehenderit sit voluptatem rem rerum..
                </h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <div className="imagecontainer">
                    <div className="bgcontainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot.png" alt="" className="bot" />
                    <div className="chat">
                        {/* <img src="/bot.png" alt="" /> */}
                        <TypeAnimation
                            sequence={[
                                // // Same substring at the start will only be typed out once, initially
                                // "Human: We produce food for Mice",
                                // 1000, // wait 1s before replacing "Mice" with "Hamsters"
                                // "Bot: We produce food for Hamsters",
                                // 1000,
                                // "Human: We produce food for Guinea Pigs",
                                // 1000,
                                // "Bot: We produce food for Chinchillas",
                                // 1000,
                                "Human: Do I really have a shot at a FAANG job?",
                                1000,
                                "Bot: Absolutely. Everyone starts somewhere.",
                                1200,
                                "Human: I’m nervous about behavioral interviews.",
                                1000,
                                "Bot: Be yourself. They want humans, not robots like me 🤖",
                                1200,
                                "Human: I’ve been grinding LeetCode daily.",
                                1000,
                                "Bot: Nice! Add a few strong projects—you’re on the right track.",
                                1200,
                                "Human: What if I mess up in the interview?",
                                1000,
                                "Bot: Breathe. Growth > Perfection.",
                                1200,
                                "Human: Thanks, GenTwin.",
                                1000,
                                "Bot: You’ve got this 💪",
                                1500,
                            ]}
                            wrapper="span"
                            cursor = {true}
                            // speed={50}
                            style={{ fontSize: "1.1em", display: "inline-block" }}
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
