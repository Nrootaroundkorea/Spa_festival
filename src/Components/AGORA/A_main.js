import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function A_main({ match }) {
    const { num } = match.params;
    let pagenum = (parseInt(num));

    const countdownPagenum = (num) => {
        if (num === 1) {
            return 10
        }
        else {
            return num - 1;
        }
    }

    const countupPagenum = (num) => {
        if (num === 10) {
            return 1
        }
        else {
            return num + 1;
        }
    }

    const [input, setInput] = useState({
        catagory: '',
        keyword: '',
        tag:'',
    })

    const onChange = e => {
        const { id, value } = e.target;
        setInput(
            {
                ...input,
                [id]: value,

            });
        console.log(id, value);
    }



    return (
        <Layout>
            <div className="sectionHeader">
                공동체 이미지
            </div>

            <div className="searchHeader">
                <div className="left">  <select className="input_catagory" id="catagory" value={input.catagory} onChange={onChange}>
                    <option className="input_catagory" value="null">항 목</option>
                    <option className="input_catagory" value="title">제 목</option>
                    <option className="input_catagory" value="writer">작 성 자</option>
                    <option className="input_catagory" value="content">내 용</option>
                </select></div>

                <div className="center"> <input className="input_keyword" type="text" id="keyword" placeholder="검색어를 입력하세요" value={input.keyword} onChange={onChange} /></div>

                <div className="right"><button className="search_btn">검 색</button></div>
            </div>

            <div className="search_hashtag">
                <button className="btn-two green rounded" id="tag" value="all" onClick={onChange}>#전체</button>
                <button className="btn-two green rounded" id="tag" value="1" onClick={onChange}>#1</button>
                <button className="btn-two green rounded" id="tag" value="2" onClick={onChange}>#2</button>
                <button className="btn-two green rounded" id="tag" value="3" onClick={onChange}>#3</button>
                <button className="btn-two green rounded" id="tag" value="4" onClick={onChange}>#4</button>
                <button className="btn-two green rounded" id="tag" value="5" onClick={onChange}>#5</button>
                <button className="btn-two green rounded" id="tag" value="6" onClick={onChange}>#6</button>
                <button className="btn-two green rounded" id="tag" value="7" onClick={onChange}>#7</button>
                <button className="btn-two green rounded" id="tag" value="8" onClick={onChange}>#8</button>
                <button className="btn-two green rounded" id="tag" value="9" onClick={onChange}>#9</button>
                <button className="btn-two green rounded" id="tag" value="10" onClick={onChange}>#10</button>
            </div>



            <div className="board_main">
                <div className="board_content"> 글 </div>
                <div className="board_content"> 글 </div>
                <div className="board_content"> 글 </div>
                <div className="board_content"> 글 </div>
                <div className="board_content"> 글 </div>
                <div className="board_content"> 글 </div>
                <div className="board_content"> 글 </div>
                <div className="board_content"> 글 </div>
            </div>


            <div className="gallery_nav">
                <div className="button-1">
                    <div className="eff-1"></div>
                    <Link to={`/A_main/${countdownPagenum(pagenum)}`}>
                        {"<<"}
                    </Link>
                </div>
                <div style={{ paddingTop: "10px" }}>
                    {pagenum}
                </div>
                <div className="button-2">
                    <div className="eff-2"></div>
                    <Link to={`/A_main/${countupPagenum(pagenum)}`}>
                        {">>"}
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default A_main;

const Layout = styled.div`
position: relative;
width: 1130px;
height: 1520px;
padding: 20px 30px;
margin: 0 auto;
`