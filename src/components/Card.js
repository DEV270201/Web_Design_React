import React, { Suspense, useContext } from "react";
import { row1, row2 } from "../Data/product";
import "../css/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/ThemeContext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Iphone from "../components/Iphone";


const Card = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="card_outer" style={{ backgroundColor: theme.backgroundColor }}>
                <div className="header"><span className="upper">T</span>RENDY <span className="upper">P</span>RODUCTS...</div>
                <div className="row_1">
                    {
                        row1.map((item, index) => {
                            return (
                                <div className="card" key={index} style={{ backgroundColor: theme.backgroundColor, boxShadow: `2px 1px 2px ${theme.color}` }}>
                                    <div className="card_image">
                                        <Canvas>
                                        <Suspense fallback={null}>
                                            <OrbitControls enableZoom={false} />
                                            <ambientLight intensity={0.5} />
                                            <directionalLight position={[9, 1, 1]} intensity={0.6} />
                                            <Iphone />
                                        </Suspense>
                                        </Canvas>
                                    </div>
                                    <div className="card_info">
                                        <h6 className="card_info_head" style={{ color: theme.color }}>Apple IPhone 13 Pro Max (128GB) </h6>
                                        <div>
                                            <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                            <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                            <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                            <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                            <span className="rating" style={{ color: theme.color }}>100</span>
                                        </div>
                                        <div>
                                            <span style={{ color: theme.color }}><FontAwesomeIcon icon={faIndianRupeeSign} /> 1,28,000 <del className="delete_price" style={{ color: theme.color }}><FontAwesomeIcon icon={faIndianRupeeSign} /> 1,29,000 </del> (1% off) </span><br></br>
                                            <span className="card_info_para" style={{ color: theme.color }}>Get it by, <strong>Today!</strong></span>
                                        </div>
                                        <div>
                                            <span className="card_info_para" style={{ color: theme.color }}>Free Delivery for our customers</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="row_2">
                    {
                        row2.map((item, index) => {
                            return (
                                <div className="card" key={index} style={{ backgroundColor: theme.backgroundColor, boxShadow: `2px 1px 2px ${theme.color}` }}>
                                    <div className="card_image">
                                    <Canvas>
                                        <Suspense fallback={null}>
                                            <OrbitControls enableZoom={false} />
                                            <ambientLight intensity={0.5} />
                                            <directionalLight position={[9, 1, 1]} intensity={0.6} />
                                            <Iphone />
                                        </Suspense>
                                        </Canvas>
                                    </div>
                                    <div className="card_info">
                                        <h6 className="card_info_head" style={{ color: theme.color }}>Apple IPhone 13 Pro Max (128GB) </h6>
                                        <div>
                                            <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                            <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                            <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                            <span><FontAwesomeIcon icon={faStar} className="check" /></span>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                            <span className="rating" style={{ color: theme.color }}>100</span>
                                        </div>
                                        <div>
                                            <span style={{ color: theme.color }}><FontAwesomeIcon icon={faIndianRupeeSign} /> 1,28,000 <del className="delete_price" style={{ color: theme.color }}><FontAwesomeIcon icon={faIndianRupeeSign} /> 1,29,000 </del> (1% off) </span><br></br>
                                            <span className="card_info_para" style={{ color: theme.color }}>Get it by, <strong>Today!</strong></span>
                                        </div>
                                        <div>
                                            <span className="card_info_para" style={{ color: theme.color }}>Free Delivery for our customers</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <h4 style={{color : theme.color,fontWeight: "400", fontStyle: "italic",textAlign:"center"}}>Credits : <a href="https://skfb.ly/o7nDN">Apple iPhone 13 Pro Max</a> by DatSketch is licensed under <a href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution</a>.</h4>
                <div className="square">
                    <ul>
                         <li style={{border: `2px solid ${theme.color}`}}></li>
                         <li style={{border: `2px solid ${theme.color}`}}></li>
                         <li style={{border: `2px solid ${theme.color}`}}></li>
                         <li style={{border: `2px solid ${theme.color}`}}></li>
                         <li style={{border: `2px solid ${theme.color}`}}></li>
                         <li style={{border: `2px solid ${theme.color}`}}></li>
                         <li style={{border: `2px solid ${theme.color}`}}></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Card;