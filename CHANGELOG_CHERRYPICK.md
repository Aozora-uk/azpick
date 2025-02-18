<!--
## 12.x.x-cp-2.x.x (unreleased)

### Improvements

### Bugfixes

-->

이 문서는 CherryPick의 변경 사항만 포함합니다. 전체 변경 사항을 확인하려면, [CHANGELOG.md](CHANGELOG.md) 문서를 참고하십시오.

## 12.119.0-cp-3.0.0 (2022/09/16)
이 버전부터는 기존 버전과 연결되지 않고, 새로 포크하여 작업되었습니다. 따라서 기존 버전에 있던 기능들이 다시 명시될 수 있습니다.

### Improvements
- 클라이언트: (friendly) 모바일 환경에서 서버와 연결이 끊어졌을 때 표시되는 경고창의 UI 개선
- 클라이언트: (friendly) 모바일 환경에서 스크롤을 내리면 플로팅 버튼이 감춰지도록 변경
- 클라이언트: (friendly) 서버와 연결이 끊어졌을 때 10초간 경고를 표시한 후 자동으로 숨기기
- 클라이언트: (friendly) 서버와 연결이 끊어졌을 때 헤더에 연결 끊김 표시
- 클라이언트: (friendly) 모바일 환경에서 노트 작성 폼의 디자인 개선
- 클라이언트: Google Translate 서비스 추가 (thanks to @ltlapy)
- 클라이언트: DeepL과 Google Translate를 선택할 수 있는 옵션 추가
- 클라이언트: 더 많은 폰트 사이즈 설정
- 클라이언트: Enter 키를 눌러 보내기 옵션 추가
- 클라이언트: 서버와 연결이 끊어졌을 때 경고를 표시하지 않는 옵션 추가
- 클라이언트: 미디어 우클릭 방지 기능 추가
- 클라이언트: welcomeBack 알림에 프로필 아이콘 추가
- 클라이언트: 알림을 옆으로 스와이프 하거나 x 버튼을 눌러(데스크톱 전용) 지울 수 있도록 개선 (thanks to @groundpolis)
- 클라이언트: 알림 디자인 개선
- 클라이언트: 알림 페이지 디자인 개선
- 클라이언트: welcomeBack 알림을 옆으로 스와이프 해서 지울 수 있도록 개선
- 클라이언트: 새 노트 알림에 '노트 수 표시' 및 '알림 표시하지 않음' 옵션 추가
- 클라이언트: 모바일 환경에서 로그인 페이지 디자인 개선
- 클라이언트: 타임라인 전환시 맨 위로 이동하도록 변경
- 클라이언트: 위젯 위치 변경 방식 개선
- 클라이언트: 네비게이션 바 편집 환경 개선
- 클라이언트: 로그인된 모든 계정을 로그아웃하는 기능 추가
- 클라이언트: 네비게이션 바에 계정 로그아웃 메뉴 추가
- 클라이언트: 최초 가입 및 메일 인증시 스팸 메일함 확인 문구 추가
- 클라이언트: 대화 탭을 네비게이션 기본 배치에 추가

### Bugfixes
- 클라이언트: 채팅방에서 메시지를 입력하고 있을 때 움직이지 않는 온점(.)이 표시되는 문제
- 클라이언트: 환영 페이지에서 GitHub 바로가기와 더보기 버튼이 겹쳐있는 경우 더보기 버튼을 누를 수 없었던 문제

<!--
## 12.x.x-cp-2.x.x (unreleased)_legacy

### Improvements
- 클라이언트: 전반적인 UI의 브러시 업
- 클라이언트: MFM 함수 구문의 제안 구현
- 클라이언트: 읽지 않은 알림만 표시하는 기능
- 클라이언트: 알림 페이지에서 알림 종류에 따른 필터
- 클라이언트: 애니메이션 줄이기 설정 적용 범위 확대
- 클라이언트: 테마 컴파일러에 hue와 saturate 함수 추가
- 클라이언트: 노트 작성 폼에 취소선 기능 추가
- 클라이언트: 제어판 성능 개선
- 클라이언트: 자신의 리액션을 볼 수 있도록 개선
	- 설정에 따라, 리액션 목록을 모두에게 공개할 수 있음
- 클라이언트: 유저 검색 정확도 개선
- 클라이언트: 새로운 라이트 테마 추가
- 클라이언트: 새로운 다크 테마 추가
- 클라이언트: /share 쿼리로 댓글이나 파일 등의 정보를 전달할 수 있도록 변경
- UI(friendly): 내비게이션 메뉴 버튼에 알림 인디케이터 추가
- UI(friendly): 발견하기 탭에서 내비게이션 메뉴에 접근할 수 있도록 개선
- UI(friendly): 타임라인 헤더의 모달 팝업에 표시되는 인디케이터의 디자인 조정
- UI(friendly): 타임라인의 노트 디자인을 Misskey 기본 테마와 병합하고 디자인 개선
- UI(friendly): 헤더 작동 방식 최적화
- UI(friendly): 전반적인 UI를 Misskey 기본 테마와 병합
- ActivityPub: HTML -> MFM 변환 강화
- API: 그룹에서의 users/groups/leave 엔드포인트 구현
- API: i/notifications 에 unreadOnly 옵션 추가
- API: ap계열의 엔드포인트 로그인 필수화 + 속도 제한 추가
- API: 사용자의 리액션 목록을 가져오는 users/reactions 추가
- API: users/search 및 users/search-by-username-and-host 를 강화
- MFM: 굵게 <b></b> 및 취소선 <s></s> 태그 구문 추가
- Docker: Node.js를 17.0.1으로 업데이트
- 계정 등록 시 이메일 주소 설정을 필수로 설정하는 옵션 추가
- 페이지 로드 오류 페이지에 새로 고침 버튼 추가
- 뮤트 및 차단 목록을 import 할 수 있도록 변경
- 차트의 동기화를 매일 0시에 자동으로 수행

### Bugfixes
- 클라이언트: 헤더의 탭이 반환되는 문제
- 클라이언트: 헤더에 탭이 표시된 상태에서 타이틀을 클릭했을 때 탭 선택 팝업이 표시되는 문제
- 클라이언트(friendly): 안테나, 리스트 타임라인을 불러올 수 없는 문제
- 클라이언트: 유저 페이지의 탭이 작동하지 않는 문제
- 클라이언트: 핀 고정 사용자 설정 항목이 없는 문제
- 클라이언트: Deck UI 에서 겹친 컬럼의 한쪽을 접은 상태에서 오른쪽으로 내밀면 깨지는 문제
- 클라이언트: 테마 관리를 할 수 없는 문제
- 클라이언트: 리모트 노트에서 의도치 않게 로컬 커스텀 이모지가 사용될 수 있는 문제
- 클라이언트: 알림상에서 로컬 리액션이 나타나지 않는 문제
- 클라이언트: 위젯을 추가할 수 없는 문제
- UI(friendly): 헤더에 타이틀이 표시되지 않는 문제
- API: 애플리케이션 알림을 가져오지 않는 문제
- MFM: 링크 레이블의 언급은 텍스트로 구문 분석함
- MFM: URL 노드에 속성을 추가하여 <>로 묶었는지 여부를 나타냄
- MFM: 해시태그에서 < 및 > 의 사용을 허용하지 않음
- ActivityPub: not reacted 한 Undo.Like 가 inbox에 잔존하는 문제
- createDeleteAccountJob 수정
- 관리자용 작업 대기열에 지연된 작업이 목록에 표시되지 않는 문제 수정
- 일부 번역 개선
- 의존 패키지 업데이트

### Changes
- 보수성 및 사용성 측면에서 CherryPick 명령줄 옵션이 제거되었습니다.
	- 필요한 경우, 환경변수로 대체할 수 있습니다.
- MFM: 성능, 보수성, 구문 오인식 억제 관점에서 구형 함수 구문의 지원을 종료했습니다.
	- 구문 (`[foo bar]`)를 사용하지 않으며, 현행 구문 (`$[foo bar]`)를 사용해 주세요.
- 모더레이터를 차단하지 못하도록 설정된 부분이 연합간에 문제를 야기할 수 있음이 확인되어, 해당 부분을 제거했습니다.
- 데이터베이스에 로그를 저장하지 않습니다.
	- 로그를 영속화 하려면 syslog를 이용해 주세요.

---

## 12.91.0-cp-2.2.2 (2021/09/23)

### Bugfixes
- UI(friendly): 헤더 디자인 버그 수정

---

## 12.91.0-cp-2.2.1 (2021/09/23)

### Bugfixes
- UI(friendly): 헤더 디자인 버그 수정

---

## 12.91.0-cp-2.2.0 (2021/09/23)

## Features
- Friendly: 계정 전환 팝업에서 현재 로그인된 계정 또는 로그인된 모든 계정을 로그아웃하는 기능 추가
- VIP 등급 추가 및 전용 기능 추가
- 팔로워의 비공개 및 다이렉트 노트를 LTL에 표시하는 기능 제거(임시)
- 고양이로 설정된 계정이면 프로필 아이콘에 마우스 오버시 고양이 귀 애니메이션을 활성화

### Improvements
- UI: 모바일 환경에서 노트 작성 폼의 해시태그 영역 여백 조정
- ActivityPub: 리모트 유저를 Delete 하는 작업 지원
- ActivityPub: 차단된 인스턴스에 대한 resolver 확인 추가
- ActivityPub: deliver 큐의 메모리 사용량 감소
- API: 관리자용 계정 삭제 API 구현(/admin/accounts/delete)
	- 리모트 유저의 삭제도 가능하도록 개선
- 계정이 정지되었을 때, 정지되었다는 내용을 표시한 후 로그아웃하도록 변경
- 정지된 계정에 로그인하고자 할 때, 정지되었다는 내용을 표시하도록 변경
- 리스트, 안테나 타임라인을 개별 페이지로 분할
- 후원자 목록 갱신
- 일부 언어 개선
- Docker 문서 개선
- 광고 제거 기능의 가독성 개선
- 클라이언트 디자인 조정
- Docker Hub에 Image push 대응
- GitLocalize 대응
- Sentry 대응
- UI 개선
- MFM에 sparkles 효과 추가
- 로그인 하지 않은 사용자는 서버 업데이트 내역을 띄우지 않도록 변경
- 클라이언트를 부팅했을 때 업데이트가 가능한 경우, 오류 표시 및 대화 상자가 나타나지 않도록 변경
- 의존 패키지 업데이트
- 일부 문서 업데이트

### Bugfixes
- UI(Friendly, Friendly-legacy): 아이 모드를 대응하지 않는 문제 수정
- UI(Friendly): 계정을 전환할 수 없던 문제 수정
- Dockerfile 수정
- 노트 번역 시 공개 범위를 고려하지 않는 문제 수정
- 노트 상세 페이지에서 구분선이 남는 문제 수정
- 팝업으로 설정 페이지를 띄우면 계정을 폐쇄할 수 없는 문제 수정
- 계정 데이터 가져오기/내보내기 처리가 안 되는 문제 수정
- 안테나를 불러올 수 없는 문제 수정
- "문제가 발생했습니다" 팝업창을 열면 X 버튼이 존재하지 않아 창을 닫을 수 없는 문제 수정

---

## 12.90.0-cp-2.1.1 (2021/09/05)

## Features
- 로그 탭 복원

### Improvements
- Friendly UI: 프로필 아이콘을 누르면 네비게이션 메뉴가 뜨도록 변경
- 클라이언트 디자인 조정
- 업데이트 내역 문서 개선
- 아이 모드, 그리고 아이 위젯
	- 클라이언트에서 아이쨩을 소환할 수 있게 되었어요.
- URL로부터 업로드, AP의 첨부파일, 외부 파일에 대한 프록시 등에서는 Private 주소 등의 요청을 거부하도록 변경했어요.
	- development에서 동작하는 경우, 이 제한이 적용되지 않아요.
	- Proxy 사용 시, 이 제한이 적용되지 않아요.
		Proxy 사용 중에도 제한을 적용하려면 Proxy 측에서 설정해야 해요.
	- `default.yml`에서 `allowedPrivateNetworks`에 CIDR를 추가함으로써, 목적지 네트워크를 지정해 이 제한을 우회할 수 있어요.
- 업로드, 다운로드 할 수 있는 파일 크기에 하드 리밋이 적용되었어요.(약 250MB)
	- `default.yml`에서 `maxFileSize`를 변경함으로써, 제한값을 변경할 수 있어요.

### Bugfixes
- Friendly UI: 홈 영역에서 헤더에 뒤로가기 버튼이 생기는 문제 수정
- Friendly UI: 계정 전환 팝업이 뜨지 않는 문제 수정
- 답글, 리노트, 삭제 후 다시 편집 및 Friendly UI 이외의 UI에서 노트 작성 폼의 디자인 문제 수정
- 모바일 환경이 아니면 노트 작성 폼에 모달 배경 뜨도록 수정
- 번역에서 DeepL Pro 계정을 지원하지 않는 문제 수정
- 인스턴스 설정에서 DeepL Auth Key가 비워지는 문제 수정
- 보안 향상
- CSS 사용자화 기능 활성화 시 에러가 발생하는 문제 수정
- 초기 설정 시 관리자가 가입 페이지에서 로그인 할 수 없는 문제 수정
- CW 유지 설정을 복원
- 클라이언트 표시 수정

---

## 12.89.0-cp-2.1.0 (2021/08/23)

### Features
- 테마 스토어
- 프로필 아이콘을 사각형으로 표시하는 옵션
- CSS 사용자화
- 노트 작성 팝업에 어시스턴트 추가
- 이모지 추가 제안
- 메뉴를 상단에 표시할 수 있는 옵션 추가
- 타임라인 추가 (고양이, 리모트 팔로잉, 팔로워)
- MFM: 무지개 효과 추가
- 노트가 보여지는 타임라인을 노트 본문에 표시
- UI 흐림 효과 전환 기능
- 해시태그를 간편하게 추가할 수 있도록 노트 작성 폼에 기능 추가
- CherryPick 디스코드 커뮤니티 추가
- 이모지 목록을 볼 수 있는 페이지 추가
- 인스턴스 목록을 볼 수 있는 페이지 추가
- 노트 번역 기능 추가
	- 사용하려면 서버 관리자가 DeepL 무료 계정을 생성하고 발급받은 인증 키를 '인스턴스 설정 > 기타 > DeepL Auth Key'에 추가해야 합니다.
- CherryPick을 업데이트 하면 대화상자를 표시하도록 추가
- 작업 대기열 위젯에 경보음을 울리는 설정 추가
- 미디어 우클릭 방지 기능 추가

### UX Improvements
- 아날로그 시계 위젯의 바늘 두께를 사용자화 할 수 있는 옵션 추가
- 팔로우 알림을 메일로 발송하는 경우, 팔로우 한 사람의 닉네임이 표시되도록 변경
- 환영 페이지의 콘텐츠를 더욱 풍부하게 표시하도록 기능 확장
- 알림으로 표시된 노트를 읽으면, 알림 페이지에서도 해당 노트를 읽음으로 표시하도록 변경
- 이메일로 발신되는 새 팔로워 알림 메시지의 내용 개선
- 도움말 문서를 전반적으로 개선

### UI Improvements
- Friendly UI: 공지사항 모달 팝업 헤더에 아이콘 추가
- 알림 내용이 너무 긴 경우, 일정 길이 이상이 되면 내용을 자르도록 개선
- 리노트 페이지에서 유저 정보가 너무 긴 경우, 일부만 표시하도록 변경
- 타임라인에 새 노트가 있으면 뜨는 인디케이터의 디자인 조정
- 프로필 페이지의 유저 상세 메뉴를 복원
- 공지사항 아이콘 변경
- 노트 작성 폼의 디자인 개선

### Improvements
- 계정 삭제 안정성 향상
- 이모지의 자동 완성 동작 개선
- localStorage의 accounts가 indexedDB로 보존되도록 변경
- ActivityPub: 작업 대기열 시행 타이밍 조정 (#7635)
- API: sw/unregister 추가
- 단어 뮤트 문서 추가
- 의존 패키지 업데이트
- 일부 언어 추가
- AP Actor 수정
- DB에 로그를 저장하지 않도록 변경
- MiAS 주소 변경
- 렌더 슬롯에 함수를 사용하여 성능 향상
- 클라이언트 업데이트시 테마 캐시를 지우도록 변경
- 이모지 자동 완성시 첫 글자는 최근에 사용한 이모지를 제안하도록 변경
- 이모지 자동 완성 성능 개선
- about-misskey 페이지에 문서 링크 추가
- Docker: Node.js를 16.6.2로 업데이트
- 차단 동작 개선
	- 차단된 유저가 차단한 유저에 대해 어떠한 행동도 할 수 없습니다. 자세한 내용은 문서를 확인해 주십시오.
- 데이터베이스 인덱스 최적화
- Proxy 사용 시 Keep-Alive 지원
- DNS 캐시에서 네거티브 캐시 지원

### Bugfixes
- Friendly UI: 공지사항 팝업창의 footer UI 오류 수정
- 일부 디자인 오류 수정
- 함수 빌더 MFM 문법 오류 수정
- API Authenticate 및 인증 방식의 일부 보안 문제 수정
- 드라이브의 기본 업로드 위치를 지정해도 반영되지 않는 문제 수정
- CORS 오류
- 스트리밍이 불안정한 문제 수정
- 암호를 재설정해도 새 암호가 표시되지 않는 문제 수정
- 채널을 생성하면 계정을 삭제할 수 없는 문제 수정
- 노트를 [삭제 후 다시 편집]하면 투표의 항목이 [object Object]가 되는 문제 수정
- 터치 조작으로 창을 닫을 수 없던 문제 수정
- 리노트한 시각이 노트를 게시한 시각으로 표시되는 문제 수정
- 제어판에서 파일 삭제 시 보기 수정
- ActivityPub: 긴 사용자 이름 및 자기소개 지원

---

## 12.83.0-cp-2.0.0 (2021/06/14)

### CherryPick
Misskey 기반의 새로운 클라이언트를 선보입니다!
CherryPick은 다른 클라이언트의 유용한 기능들을 **이식**하고 **자체 기능**을 추가하여 사용성을 높인 **개조 클라이언트** 입니다.
~ CherryPick은 좋은 것만 뽑아서 쓰는 Cherry picking의 의미를 지니고 있어요! ~


### Friendly UI
#### 완전히 새롭게 디자인된 Friendly UI를 만나보세요!

### Features
- Friendly UI: 타임라인 설정을 통해, 헤더에 타임라인을 추가하고 순서를 변경할 수 있어요!
- Friendly UI: 헤더에서 공지사항을 열람할 수 있어요!
- Friendly UI: 새 노트 알림의 디자인(4가지)을 선택할 수 있어요!
- 현재 로그인된 모든 계정을 로그아웃 할 수 있는 기능을 추가했어요!
- 인용된 노트의 미디어를 자동으로 펼치는 기능을 추가했어요! 이 옵션은 설정에서 해제할 수 있어요.
- 카오모지 뽑기가 추가됐어요!

### UX Improvements
- Friendly UI: 헤더에서 타임라인 위치를 직관적으로 알 수 있도록 새롭게 변경했어요!
- Friendly UI: 계정 전환을 보다 직관적으로 할 수 있도록 새롭게 변경했어요!
- Friendly UI: 팔로워의 비공개 노트 및 다이렉트 노트를 로컬 타임라인(LTL)에 표시하는 기능을 추가했어요.
- Friendly UI: 타임라인에 새 노트가 있을 때 내비게이션바에 인디케이터로 알려줘요.
- Friendly UI: 그룹, 채널, 안테나 페이지에도 플로팅 버튼을 추가했어요!
- 노트 페이지에서 리노트 하거나 인용한 개수를 확인할 수 있어요.
- 리노트 하거나 인용한 유저를 확인할 수 있어요.
- 인스턴스 요약 탭에 CherryPick 버전이 표시돼요.
- 노트 작성 시 보여질 내용을 미리 볼 수 있는 기능을 추가했어요!
- 노트 작성 화면에서 사용할 수 있는 각종 퀵액션을 추가했어요!
- 노트 게시 전 최종 확인(검토)하는 옵션이 추가됐어요! 설정에서 켤 수 있어요.
- 사이드바 설정을 보다 직관적으로 할 수 있도록 새롭게 변경했어요!
- 위젯 편집시 의도치 않은 이동이 발생하지 않도록, 편집 환경을 전반적으로 개선했어요!
- 모바일 환경에서 유저 프로필 프리뷰가 뜨지 않도록 조정했어요.
- 발견하기와 검색을 통합했어요! 이제 검색 기능은 여기서 이용해 주세요 :)
- 노트와 유저를 동시에 검색할 수 있게 변경했어요.
- 사이드 바와 내비게이션 바의 배치를 개선했어요.
- 더 작은 폰트(verySmail) 크기를 추가했어요!
- 프로필 페이지에 프로필 수정 버튼을 추가했어요! 이제 수정을 위해서 더보기 버튼을 누르지 않아도 돼요.
- 프로필 페이지에서 더보기 버튼을 하나로 줄였어요. (저도 왜 이게 2개나 있는지 모르겠어요...)

### UI Improvements
- Friendly UI: 새 노트 알림의 아이콘이 변경됐어요.
- 가독성을 위해 로고 색상을 약간 조정했어요.
- 답글 노트를 리노트 했을 때, 리노트 한 유저를 노트 영역의 맨 위에 표시하도록 변경했어요.
- 기본 테마를 변경했어요!
- 모바일 환경에서 토스트 알림 디자인을 개선했어요! 궁금하면 저를 팔로우 해보세요🙂
- 플로팅 버튼의 그림자를 조정했어요.
- 이모지 버튼의 디자인을 변경했어요.

### Improvements
- misskey.js 버전을 업데이트 했어요.
- 의존 패키지를 업데이트 했어요.
- 베젤리스 디바이스를 대응했어요!
- 클라이언트의 버전이 업데이트 되었을 때 나타나는 팝업에 한국어를 추가했어요! (펄-럭)
- 리버시에서 향후 호환성에 문제가 발생할 수 있는 부분을 업데이트 했어요!
- 플로팅 버튼의 작동 방식을 개선했어요.
- 타임라인의 노트 간격 옵션을 기본 활성화로 설정했어요.
- 테마 찾아보기 연결 주소가 변경됐어요.

### Bugfixes
- 리모트 유저 정보 갱신시 발생하는 오류가 수정됐어요.
- 리모트 유저의 프로필을 불러올 때 문제를 야기할 수 있는 부분이 수정됐어요.
- 환영 페이지에서 배너 이미지가 뜨지 않는 문제를 수정했어요!
- 비로그인 상태에서 유저 프로필의 노트를 열람하지 못하는 문제를 수정했어요.
- 환영 페이지에서 GitHub 바로가기와 더보기 버튼이 겹쳐있는 경우 더보기 버튼을 누를 수 없었던 문제를 수정했어요.
- 이미지가 노트 영역을 뚫고 나오는 문제를 수정했어요.
- 일본어 및 한국어를 제외한 언어에서 도움말의 API 문서의 목차가 작동하지 않는 문제를 수정했어요.
- 알림 토스트의 텍스트가 eclipse 되지 않는 문제를 수정했어요.
- 사이드바와 인스턴스 유저 관리 페이지에서 유저 닉네임이 너무 길면 overflow되는 문제를 수정했어요.
-->
