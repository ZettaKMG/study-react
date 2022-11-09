// 부모 컴포넌트에서 스크롤바 내리기 순서
// ScrollBox 컴포넌트 만들기 > 컴포넌트에 ref 달기 > ref를 이용하여 컴포넌트 내부 메서드 호출하기
// 컴포넌트 초기 설정
// 컴포넌트 파일 생성
import React, {Component} from 'react';

class ScrollBox extends Component {
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box=ref}}>
                <div style={innerStyle}/>    
            </div>
        );
    }
}

export default ScrollBox;