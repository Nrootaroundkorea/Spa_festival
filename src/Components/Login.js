import styled from 'styled-components';
import React, { useState } from 'react';

function Login({ history }) {
    const [checkedInputs, setCheckedInputs] = useState([]);
    
    const [input, setInput] = useState({
        name: '',
        password: '',
        group:'',
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

    

    const changeHandler = (checked, id) => {
        if (checked) {
            setCheckedInputs([...checkedInputs, id]);
            console.log("체크 반영 완료");
        } else {
            setCheckedInputs(checkedInputs.filter(el => el !== id));
            console.log("체크 해제 반영 완료");
        }
    };

    const isAllChecked = checkedInputs.length === 2;
    const disabled = !isAllChecked;

    return (
        <Layout>
            <div className="section_banner">
                <div className="section_text">로 그 인 </div>
                <div className="section_back" onClick={() => history.go(-1)}>X</div>
            </div>

            <div className="login_main">

                <div className="checkgroup_box">
                    <div style={{margin:"0 auto"}}><input type="checkbox" id="group" value={true} onChange={onChange}/>공동체</div>
                    <div style={{margin:"0 auto"}}><input type="checkbox" id="group" value={false} onChange={onChange}/>개 인</div>
                </div>

                <input className="input_login" type="text" id="name" placeholder="이 름" onChange={onChange}></input> <br/> 
                <input className="input_login" type="number" id="password" placeholder="전화번호" onChange={onChange}></input>  <br/> 
                
                <button className="signin_button">로 그 인</button>

            </div>
            <div style={{ textAlign: "left", marginTop: "20px", padding: "5px", fontSize: "30px" }}> ▣ 안 내</div>
            <div className="login_notice">
                - 신규 회원이신 경우 회원가입을 먼저 진행하고 로그인을 해주시길 바랍니다. <br />
                - 기존 회원이신 경우 회원가입 때 사용했던 이름과 전화번호로 로그인을 진행해 주시면 됩니다.<br />
                - 회원 가입 및 로그인 오류는 아래 해당 부서로 연락 바랍니다. <br />
            </div>
            <div style={{ textAlign: "left", marginTop: "20px", padding: "5px", fontSize: "30px" }}> ▣ 개인정보 수집 및 제공 동의서(필수)</div>
            <div className="login_agreement" >
                ▣ 「개인정보보호법」에 의거하여, 아래와 같은 내용으로 개인정보를 수집하고 있습니다. 귀하께서는 아래 내용을 자세히 읽어 보시고, 모든 내용을 이해하신 후에 동의 여부를 결정해 주시기 바랍니다. <br /> 
                ① 수집하는 개인정보 항목(필수항목) : 이름, 전화번호  <br />
                ② 개인정보 수집 및 이용 목적 <br />
                : 대전광역시 유성구 온천2동 온라인 축제 페이지 운영를 위해 수집 및 이용되며 수집한 개인정보는 본 수집 및 이용 목적 외의 다른 목적으로 사용 되지 않습니다.<br />
                ③ 개인정보 보유 및 이용기간 : 수집한 날로 부터 2년 후 폐기<br />
                ④ 개인정보 제공 동의 거부 권리 및 동의 거부에 따른 불이익 또는 제한 사항 <br />
                : 홈페이지 운영을 위해 필요한 최소한의 정보에 해당하므로 상기 내용에 대해 본인이 동의 하지 않을 경우 공간 이용이 어려울 수 있음을 알려드립니다.<br />
            </div>

            <label style={{ float: "right", padding: "5px" }}>
                <input type="checkbox" id="check1" value="Ok" onChange={e => {
                    changeHandler(e.currentTarget.checked, 'check1');
                }}
                    checked={checkedInputs.includes('check1') ? true : false} />  <label id="check1" htmlFor="check1"></label>
                <span>동의합니다</span>
            </label>

            <div style={{ textAlign: "left", marginTop: "20px", padding: "5px", fontSize: "30px" }}> ▣ 홍보 및 마케팅에 관한 동의서 (필수)</div>
            <div className="login_agreement">
                ▣ 아래와 같이 서비스 홍보 및 마케팅을 위한 개인정보를 수집 이용합니다. <br />
                귀하는 개인정보 수집이용에 동의하지 않을 권리가 있으며, 동의를 거부할 경우에는 해당 서비스를 받을 수 없습니다. <br />
                ① 수집 항목	: 이름, 전화번호<br />
                ② 수집 목적	: 서비스와 관련된 뉴스레터,이벤트 참여 기회, 고객 혜택 등 다양한 정보를 제공 <br />
                ③ 보유 기간	: 수집한 날로 부터 2년 후 폐기 <br />
            </div>


            <label style={{ float: "right", padding: "5px" }}>
                <input type="checkbox" id="check2" value="OK" onChange={e => {
                    changeHandler(e.currentTarget.checked, 'check2');
                }}
                    checked={checkedInputs.includes('check2') ? true : false} />  <label id="check2" htmlFor="check2"></label>
                <span>동의합니다</span>
            </label>

            

            
            <div className="signin_main">
            <h2 style={disabled ? { display: 'block', color:"red"} : { color: 'white'}} >
                    앗! 필수 동의 항목에 동의하지 않으셨어요!
                </h2>
                <button className="signin_button"
                    disabled={disabled}
                    onClick={() => history.go(-1)}
                    style={
                        disabled
                            ? { backgroundColor: '#ffffff' , color:'#ffffff'}
                            : {}
                    } >
                    회원가입
                </button>
            </div>
        </Layout>
    );
}

export default Login;

const Layout = styled.div`
    position: relative;
    width: 1130px;
    height: 1520px;
    padding: 20px 30px;
    margin: 0 auto;
`