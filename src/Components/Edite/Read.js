import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

function Show({ history, match }) {
    const [data, setData] = useState({ });
    const { id } = match.params;

    return (
        <Layout>
            <div className="post-view-wrapper">
                {
                    data ? (
                        <>
                            <div className="post-view-row">
                                <label>제목</label>
                                <label>{data.title}</label>
                            </div>
                            <div className="post-view-row">
                                <label>팀</label>
                                <label>{data.group}</label>
                            </div>
                            <div className="post-view-row">
                                <label>작성일</label>
                                <label>{data.date}</label>
                            </div>
                            <div className="post-view-row">
                                <label>작성자</label>
                                <label>{data.writer}</label>
                            </div>
                            <div className="post-view-row">
                                <label>내용</label>
                                <div>
                                    {/* {
                              ReactHtmlParser(data.content)
                            } */}
                                </div>
                            </div>
                        </>
                    ) : '해당 게시글을 찾을 수 없습니다.'
                }
            </div>
            <div style={{ textAlign: "right", marginTop: "10px" }}>
                <button style={{ marginRight: "2em" }} className="signin_button" onClick={() => history.go(-1)}>뒤로가기</button> <button style={{ marginRight: "2em" }} className="signin_button" >수정하기</button> <button className="signin_button">삭제하기</button>
            </div>
        </Layout>
    );
}

export default Show;

const Layout = styled.div`
position: relative;
width: 1130px;
height: 1520px;
padding: 20px 30px;
margin: 0 auto;
`