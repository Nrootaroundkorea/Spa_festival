import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

function F_main({ match }) {
    const { num } = match.params;
    let pagenum = (parseInt(num));
    const switchBaner = (num) => {
        console.log(num)
        switch (num) {
            case 1:
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg"
            case 2:
                return "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg"
            case 3:
                return  "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"
            case 4:
                return "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg"
            default:
                break;
        }
    }

    const switchYoutube = (num) => {
        console.log(num)
        switch (num) {
            case 1:
                return "Crf8b97MClc"
            case 2:
                return "kTJczUoc26U"
            case 3:
                return  "4TWR90KJl84"
            case 4:
                return "CuklIb9d3fI"
            default:
                break;
        }
    }
    const opts = {
        height: '400',
        width: '700',
        playerVars: {
          autoplay: 0,
        },
      }
      
    return (
        <Layout>
            <div className="festival_main">

                <div className="festival_main_menu">
                    <div className="festival_main_menu_btn">
                        <Link to={`/F_main/1`}>
                            1
                        </Link>
                    </div>
                    <div className="festival_main_menu_btn">
                        <Link to={`/F_main/2`}>
                            2
                        </Link>
                    </div>
                    <div className="festival_main_menu_btn">
                        <Link to={`/F_main/3`}>
                            3
                        </Link>
                    </div>
                    <div className="festival_main_menu_btn">
                        <Link to={`/F_main/4`}>
                            4
                        </Link>
                    </div>
                </div>
                <div className="festival_main_baner">

                    <img src={switchBaner(pagenum)} alt="asdasd" width="100%" height="100%"/>
                </div>

            </div>


            <div className="festival_youtube">
                <YouTube videoId={switchYoutube(pagenum)} opts={opts} />
            </div>
            <div className="festival_menu">
                <div className="festival_menu_S">
                    <label className="festival_menu_title">{`< 축제 갤러리 >`} </label>
                    <p style={{fontSize:"20px", textAlign:"right"}}><Link to={`/F_Gallery/1`}>+ 더보기</Link></p>
                    <div className="festival_menu_content"></div>
                </div>
                <div className="festival_menu_S">
                    <label className="festival_menu_title">{`< 축제 이야기 >`} </label>
                    <p style={{fontSize:"20px", textAlign:"right"}}><Link to={`/F_Board/1`}>+ 더보기</Link></p>
                    <div className="festival_menu_content"></div>
                </div>

            </div>
        </Layout>
    );
}

export default F_main;

const Layout = styled.div`
position: relative;
width: 1130px;
height: 1520px;
padding: 20px 30px;
margin: 0 auto;
`