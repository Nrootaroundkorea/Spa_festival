import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from './Table/CommonTable';
import CommonTableRow from './Table/CommonTableRow';
import CommonTableColumn from './Table/CommonTableColumn';

function F_Board({ match }) {
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
                <div className="Header_left" ><Link to="/">{`<<`}</Link></div>

                <div className="Header_center"> 축제 게시판</div>

                <div className="Header_right"></div>
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

            <CommonTable headersName={['글 번호', '제 목', '작성자', '시간']}>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>1</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableColumn>25</CommonTableColumn>
                    <CommonTableColumn>글 제목</CommonTableColumn>
                    <CommonTableColumn>홍 길 동</CommonTableColumn>
                    <CommonTableColumn>{new Date().getHours()}:{new Date().getMinutes()}</CommonTableColumn>
                </CommonTableRow>
            </CommonTable>

            <div style={{textAlign:"right", marginTop:"10px"}}>
            <button className="signin_button"><Link to = "/Write" className="link"> 글쓰기 </Link></button>
            </div>

            <div className="gallery_nav">
                <div className="button-1">
                    <div className="eff-1"></div>
                    <Link to={`/F_Board/${countdownPagenum(pagenum)}`}>
                        {"<<"}
                    </Link>
                </div>
                <div style={{ paddingTop: "10px" }}>
                    {pagenum}
                </div>
                <div className="button-2">
                    <div className="eff-2"></div>
                    <Link to={`/F_Board/${countupPagenum(pagenum)}`}>
                        {">>"}
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default F_Board;

const Layout = styled.div`
position: relative;
width: 1130px;
height: 1520px;
padding: 20px 30px;
margin: 0 auto;
`