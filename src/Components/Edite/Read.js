import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

function Show({history,match}) {
        const [ data, setData ] = useState({});
        const {id} = match.params;

        return (
                <>
                <div className="post-view-wrapper">
                  {
                    data ? (
                      <>
                        <div className="post-view-row">
                          <label>제목</label>
                          <label>{ data.title }</label>
                        </div>
                        <div className="post-view-row">
                          <label>팀</label>
                          <label>{ data.group }</label>
                        </div>
                        <div className="post-view-row">
                          <label>작성일</label>
                          <label>{ data.date }</label>
                        </div>
                        <div className="post-view-row">
                          <label>작성자</label>
                          <label>{ data.writer }</label>
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
                  <button className="input" onClick={() => history.goBack()}>목록으로 돌아가기</button>
                  <button className="input" onClick={deleteLog}>삭제하기</button>
                </div>
              </>
        );
}

export default Show;
