import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <div className="Footer">
                <div className="Footer_left">
                    <div> 이용안내</div>
                    <div> 개인정보처리방침 </div>
                    <div> 고객센터 </div>
                </div>

                <div className="Footer_center">
                    Partners: AROUNDKorea  <br />
                    Developers: Nroot, IxieL  <br />
                </div>

                <div className="Footer_right">
                    <div> COPYRIGHTⓒ2021 by AROUNDKorea Corp. ALL RIGHTS RESERVED </div>
                </div>
            </div>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
position: relative;
width: 1130px;
height: 100%;
margin: 0 auto;
padding: 0 30px;
`

