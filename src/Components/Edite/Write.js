import '../../Style.css';
import styled from 'styled-components';
import React, { useState } from 'react';
import Editor from './Editor';

function Write({ history }) {
    const [desc, setDesc] = useState('');
    const [hashtag, setHashtag] = useState([])
    function onEditorChange(value) {
        setDesc(value)
        console.log(desc)
    }
    const [input, setInput] = useState(
        {
            title: '',
            writer: '',
            creaedate: '',
            category: '',
            num: ''
        }
    )

    const onChange = (e) => {
        const { value, id } = e.target;
        setInput(
            {
                ...input,
                [id]: value
            });
        console.log(id, value);
    };

    const addHashtag = (tag) => {

        const item = hashtag.indexOf(tag)
        console.log(item)
        if (item === -1) { setHashtag(hashtag.concat(tag)) }


        else {
            setHashtag(hashtag.filter((item) => item !== tag))
        }
    }

    return (
        <Layout>
            <div className="writeinfo">
                <p style={{ marginRight: "2em" }}> 날 짜 : <input type="date" id="createdate" value={input.createdate} onChange={onChange}></input></p>
                <p style={{ marginRight: "2em" }}> 항 목 : <select id="category" value={input.category} onChange={onChange}>
                    <option value="null">선택</option>
                    <option value="Gallery">축제 갤러리</option>
                    <option value="Board">축제 게시판</option>
                    <option value="AGORA">무엇이든 물어보살</option>

                </select>
                </p>
                <p style={{ marginRight: "2em" }} >제 목 : <input style={{ width: "90%" }} type="text" id="title" value={input.title} onChange={onChange}></input></p>
                <p style={{ marginRight: "2em" }} >태 그 : {hashtag} </p>
            </div>
            <Editor value={desc} onChange={onEditorChange} />

            {input.category === "AGORA" ?
                <div className="search_hashtag">
                    <button className="btn-two green rounded" id="tag" value="1" onClick={() => addHashtag("1")}>#1</button>
                    <button className="btn-two green rounded" id="tag" value="2" onClick={() => addHashtag("2")}>#2</button>
                    <button className="btn-two green rounded" id="tag" value="3" onClick={() => addHashtag("3")}>#3</button>
                    <button className="btn-two green rounded" id="tag" value="4" onClick={() => addHashtag("4")}>#4</button>
                    <button className="btn-two green rounded" id="tag" value="5" onClick={() => addHashtag("5")}>#5</button>
                    <button className="btn-two green rounded" id="tag" value="6" onClick={() => addHashtag("6")}>#6</button>
                    <button className="btn-two green rounded" id="tag" value="7" onClick={() => addHashtag("7")}>#7</button>
                    <button className="btn-two green rounded" id="tag" value="8" onClick={() => addHashtag("8")}>#8</button>
                    <button className="btn-two green rounded" id="tag" value="9" onClick={() => addHashtag("9")}>#9</button>
                    <button className="btn-two green rounded" id="tag" value="10" onClick={() => addHashtag("10")}>#10</button>
                </div>
                : ""
            }

            <div style={{ textAlign: "right", marginTop: "10px" }}>
                <button style={{ marginRight: "2em" }} className="signin_button" onClick={() => history.go(-1)}>뒤로가기</button> <button className="signin_button">등록하기</button>
            </div>
        </Layout>
    );
}

export default Write;

const Layout = styled.div`
position: relative;
width: 1130px;
height: 1520px;
padding: 20px 30px;
margin: 0 auto;
`