> ## 📌 이 저장소에 대해
>
> 이 저장소는 프로그래머스 데브코스 팀 프로젝트의 프론트엔드 [Programmers-HandsUp/FE-HandsUp](https://github.com/Programmers-HandsUp/FE-HandsUp)을 **포크해 온 것**입니다.
> 프론트엔드는 아래 팀원들이 만들었고, 커밋 히스토리는 원본 `develop` 브랜치 그대로 가져왔습니다(원본의 마지막 커밋: 2025-03-15).
> 이후 개인 고도화한 [handsup-backend](https://github.com/ParkJuhan94/handsup-backend)와 연동해 실행해 보기 위한 수정만 이 저장소에서 더했습니다.
>
> ### 이 저장소에서 바꾼 것
> - 토큰 재발급 응답에서 `result.token`을 읽던 것을 백엔드 응답 키인 `accessToken`으로 수정
> - 로그인·로그아웃 요청에 `credentials: "include"` 추가 (이게 없으면 브라우저가 cross-origin 응답의 refresh 쿠키를 저장·삭제하지 않음)
>
> ### 백엔드와 연결해 로컬에서 실행하기
> 1. 백엔드를 띄울 때 프론트 출처를 허용합니다: `CORS_ALLOWED_ORIGINS=http://localhost:3004` (예: 백엔드 `8082`)
> 2. `.env.local`을 아래처럼 바꿉니다. 저장소에는 목 서버 모드(`enabled`)가 들어 있습니다.
>    ```
>    NEXT_PUBLIC_API_MOCKING=disabled
>    NEXT_PUBLIC_BASE_URL=http://localhost:8082
>    NEXT_PUBLIC_API_BASE_URL=http://localhost:8082
>    ```
> 3. `npm install --legacy-peer-deps --ignore-scripts` 후 `npx next dev -p 3004` (`package-lock.json`이 `package.json`과 맞지 않아 `npm ci`는 실패합니다)
>
> ### 알려진 문제
> - 액세스 토큰이 만료된 상태에서 `/api/users`를 부르는 `getLoginUserInfo`에는 재발급 처리가 없어 `Unexpected end of JSON input` 오류가 납니다. 원본에서 이어진 문제입니다.
>
> ---

## ✍🏻 프로젝트 개요

### 중고거래 플랫폼의 성장

경기 침체로 인해 소비자들은 고가의 제품 구매보다는 저렴한 중고거래를 선호하게 되었습니다. 특히, 모바일 플랫폼을 통한 중고 거래가 보편화되면서 중고 물품에 대한 소비자들의 인식이 변화하면서 중고거래 시장이 성장하게 되었습니다.

### 서비스 개발의 필요성

기존 중고거래에서는 판매자가 상품과 가격을 설정하고, 구매자는 그 가격을 수용하거나 흥정을 시도하거나 플랫폼 내의 '가격제안' 시스템을 활용합니다. 판매자는 자신이 가지고 있는 물품에 대해 정확한 가격을 매기기 어려운 경우가 있으며, 구매자는 판매 물품의 가격이 과도하다고 생각할 수 있습니다.

이런 문제를 해결하기 위해 경매 시스템을 도입할 수 있다고 판단했습니다. 경매 시스템을 통해 구매자는 다수의 참여자들이 입찰하는 과정에서 상품을 합리적인 가격에 구매할 수 있으며, 판매자는 중고물품에 대해 적절한 가격을 받거나 기존보다 높은 가격을 받을 수 있게 됩니다. 이를 통해 거래의 공정성과 효율성을 높일 수 있습니다.

<br />

### 🔗 [Hands UP! 보러가기](https://fe-hands-up-sbm9.vercel.app/)

<br />

## 👬 팀 소개

<table>
<thead>
<tr>
<th><strong>팀장</strong></th>
<th><strong>팀원</strong></th>
<th><strong>팀원</strong></th>
<th><strong>팀원</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<a href="https://github.com/hj9118">
<img src="https://avatars.githubusercontent.com/u/104545906?v=4" />
</a>
</td>
<td>
<a href="https://github.com/oridori2705">
<img src="https://avatars.githubusercontent.com/u/90139306?v=4" />
</a>
</td>
<td>
<a href="https://github.com/imssein">
<img src="https://avatars.githubusercontent.com/u/93479475?v=4" />
</a>
</td>
<td>
<a href="https://github.com/JuJangGwon">
<img src="https://avatars.githubusercontent.com/u/40955023?v=4" />
</a>
</td>
</tr>
<tr>
<td><b>허지호</b></td>
<td><b>신준혁</b></td>
<td><b>현세인</b></td>
<td><b>주장권</b></td>
</tr>
</tbody>
</table>

<br/>

## 🚀 핵심 기능

### - 지역 필터링으로 한눈에 보는 경매 물품!

![image](https://github.com/99sStudy/Effective-Typescript/assets/90139306/11a3fc5a-d861-4cc2-b099-9bcc1048dbf8)

### - 판매자의 신뢰도와 경매 현황을 차트로!

![image](https://github.com/99sStudy/Effective-Typescript/assets/90139306/561653ad-60c4-4d93-8e47-a8cb35cc9ba9)

### - 경매 물품에 대해 얘기도 나누고, 입찰해요!

![image](https://github.com/99sStudy/Effective-Typescript/assets/90139306/343afd2f-70dd-4256-b611-dcc8ce257f75)

### - Chip 버튼으로 간단하게!

![image](https://github.com/99sStudy/Effective-Typescript/assets/90139306/26540e27-1861-409e-b359-fc782467a236)

### - 검색도 가능해요!

![image](https://github.com/99sStudy/Effective-Typescript/assets/90139306/725759c5-72ce-4870-8912-4528c8f46233)

### - PWA와 웹소켓을 활용한 실시간 채팅!

![image](https://github.com/99sStudy/Effective-Typescript/assets/90139306/d2a2c8b0-6620-45be-98a6-77ee7f3a7bd2)

### - 경매물품 거래가 완료되면 영수증을 저장할 수 있어요!

<img src="https://github.com/99sStudy/Effective-Typescript/assets/90139306/84ec7422-e093-4a60-ad4b-abfffccf8bbe" width="700" height="500"/>

<br />

## ⚙️ 기술 스택

<table>
    <thead>
        <tr>
            <th>분류</th>
            <th>기술 스택</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>공통</p>
            </td>
            <td>
                <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=ffffff">
            </td>
        </tr>
        <tr>
            <td>
                  <p>프론트엔드</p>
            </td>
            <td>
                  <img src="https://img.shields.io/badge/Next.js-000000?logo=Next.js&logoColor=white">
                  <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat-square&logo=React Hook Form&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Tanstack Query-FF4154?style=flat-square&logo=React Query&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=Zod&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Web Socket-010101?style=flat-square&logo=Socket.io&logoColor=white"/>
                  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=PWA&logoColor=white"/>
            </td>
        </tr>
        <tr>
            <td>
                <p>패키지 매니저</p>
            </td>
            <td>
              <img src="https://img.shields.io/badge/Yarn Berry-2C8EBB?logo=yarn&logoColor=ffffff">
            </td>
        </tr>
                <tr>
            <td>
                <p>배포</p>
            </td>
            <td>
                <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
            </td>
        </tr>
        <tr>
            <td>
                <p>협업</p>
            </td>
            <td>
                <img src="https://img.shields.io/badge/Notion-000000?logo=Notion">
                <img src="https://img.shields.io/badge/Figma-F24E1E?logo=Figma&logoColor=ffffff">
                <img src="https://img.shields.io/badge/Slack-4A154B?logo=Slack&logoColor=ffffff">
            </td>
        </tr>
    </tbody>
</table>

<br />

## 📘 팀 규칙

1. 직무 무관! 함께 성장하는 팀 되기
2. 의견을 제시할 땐 ‘그냥’은 없다! 의견은 항상 근거와 같이 제시하기!
3. 건의 할 사항 있으면 담아두지말고 바로 바로 말하기
4. 막히는 부분이 있다면 언제나 Help! 도움! 도움! 외치기
5. 서로 상호존중하고 자유로운 분위기 만들어나가기

<br/>

## 🤝 이렇게 협업했어요!

![image](https://github.com/99sStudy/Effective-Typescript/assets/90139306/d1b824fd-1225-46d3-b068-89f9cf55d624)

- [테오의 스프린트](https://velog.io/@teo/google-sprint-1)를 이용해서 프로젝트 구상 및 계획을 진행했어요.

<br/>

![image](https://github.com/99sStudy/Effective-Typescript/assets/90139306/40b213c3-3686-4255-b464-1a24781e879e)

- Figma의 Comment 기능을 통해서 소통했어요.
