// HTML의 요소들이 로딩 되고 난 후 JS 실행하는 코드
// document 객체를 대상으로 이벤트 리스너 추가하기
// DOMContentLoaded : 문서의 콘텐츠 로딩이 완료됐을 때 발생
document.addEventListener("DOMContentLoaded",
  function(e){
    // input태그 선택하기
    let button = document.querySelector('input');

    // input태그에 표준 이벤트 처리
    // "input" -> <input> 요소의 값이 변경될 때마다 발생
    button.addEventListener("input",
      function(e){
        console.log(e.target.value);
      }
    )
  }
)

// <p> 태그에서 인라인 이벤트 모델로 호출할 함수를 정의
function hi(){
  alert("Hi");
}