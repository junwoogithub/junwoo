import React from 'react';
import '../CSS/Selfintro.css';

const SelfIntroItem = ({ name, content }) => {
  return (
    <div style={{ display: 'flex', marginLeft: '100px', marginRight: '100px' }}>
      <div className='div4'>
        {name}
      </div>
      <div className='div5'>
        {content}
      </div>
    </div>
  );
};

const SelfIntro = () => {
  const members = [
    { name: '성장과정', content: 'ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅂㅈㄷㅊㅁㄴ' },
    { name: '이준우', content: 'ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅂㅈㄷ' },
    { name: '전성원', content: 'ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅇㅈㅂㅊ' },
    { name: '문진영', content: 'ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ11233' },
    // Add more members as needed
  ];

  return (
    <div className="selfIntro">
      <div className="division">
        <h3>Front-end 개발자란?</h3>
        <p>
          '저는 20xx년도에 태어나 부모와 형제자매...' 이런 식의 틀에 박힌 성장과정은,
          하루에도 수십 수백의 이력서와 자기소개서를 읽는 인사담당자에게는 전혀
          어필하지 못하는, 글자 수를 맞추기 위한 느낌 밖에 줄 수 없습니다.
          본인이 제일 중요시 하는 가치관을 중심으로 서술하세요.
          꼭 시간순서일 필요는 없습니다. 그렇다고 무모하게 소설을 쓴다거나 있지도 않은 이야기를 쓰는 등
          늠 하지는 마세요. 기업이 원하는 인재임을 드러내는 것으로 충분합니다.
        </p>
        <br />
        <hr />
      </div>

      {members.map((member, index) => (
        <SelfIntroItem key={index} name={member.name} content={member.content} />
      ))}
    </div>
  );
};

export default SelfIntro;
