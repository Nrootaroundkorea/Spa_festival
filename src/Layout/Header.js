import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../Style.css'
function Header() {                 
  return (
        <Container>  
                <div className="Header">   
                <div className="Header_left"><Link to="/">메인 로고</Link></div>
                
                <div className="Header_center"></div>
           
                <div className="Header_right"><Link to="/Login">로그인</Link></div>
                </div>
        </Container>
      );
    }
export default Header;

const Container = styled.div`
    position: relative;
    width: 1130px;
    height: 100%;
    margin: 0 auto;
    padding: 0 30px;
`