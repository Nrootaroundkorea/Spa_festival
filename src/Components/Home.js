import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
    return (
        <Layout>
            <div className="train_Map">
                <div className="train_button1">
                    <Link to={'/Community/1'}>
                        Train1
                    </Link>
                </div>

                <div className="train_button2">
                    <Link to='/Community/2'>
                        Train2
                    </Link>
                </div>

                <div className="train_button3">
                    <Link to={'/Community/3'}>
                        Train3
                    </Link>

                </div>

                <div className="train_button4">
                    <Link to={'/Community/4'}>
                        Train4
                    </Link>

                </div>

                <div className="train_button5">
                    <Link to={'/Community/5'}>
                        Train5
                    </Link>
                </div>

                <div className="train_button6">
                    <Link to={'/Community/6'}>
                        Train6
                    </Link>
                </div>

                <div className="train_button7">
                    <Link to={'/Community/7'}>
                        Train7
                    </Link>
                </div>

                <div className="train_button8">
                    <Link to={'/Community/8'}>
                        Train8
                    </Link>
                </div>


                <div className="ballon_button1">
                    <Link to={'/F_main/1'}>
                        Ballon1
                    </Link>
                </div>

                <div className="ballon_button2">
                    <Link to={'/F_main/2'}>
                        Ballon2
                    </Link>
                </div>

                <div className="ballon_button3">
                    <Link to={'/F_main/3'}>
                        Ballon3
                    </Link>
                </div>

                <div className="ballon_button4">
                    <Link to={'/F_main/4'}>
                        Ballon4
                    </Link>
                </div>
            </div>
            <div className="agora_main">
                <div className="agora_title"><Link to='/A_main/1'>무엇이든 물어보살</Link></div>
                <div className="agora_content">
                    <div className="preview_agroa_main">
                        <div className="board_content">
                            <div style={{ float: "center", fontSize: "30px" }}>제 목</div>
                            <div style={{ float: "right" }}>작성자</div>
                            <div style={{ float: "center", marginTop: "30px", padding: "120px 50px", border: "1px solid black" }}>내용</div>
                        </div>

                        <div className="board_content">
                            <div style={{ float: "center", fontSize: "30px" }}>제 목</div>
                            <div style={{ float: "right" }}>작성자</div>
                            <div style={{ float: "center", marginTop: "30px", padding: "120px 50px", border: "1px solid black" }}>내용</div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}

export default Home;

const Layout = styled.div`
    position: relative;
    width: 1130px;
    height: 2000px;
    padding: 20px 30px;
    margin: 0 auto;
`