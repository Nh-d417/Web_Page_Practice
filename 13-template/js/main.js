//상단에 전역변수 설정
const frame = "section";
const box = "article";
const speed = "0.5s";
const activeClass = "on";
const btn = document.querySelectorAll("main ul li");
let grid;


// 페이지 로드 이벤트
window.addEventListener("load", ()=>{

  init(); // 화면 초기화 함수 호출
  filter(btn);//버튼 정렬 함수 호출
});

function init(){
  grid = new Isotope( frame,{  //배치할 요소의 부모요소명
    itemSelector: box,  //배치할 요소명
    columnWidth: box,  //너빗값을 구할 요소명
    transitionDuration: speed  //재배치시 움직이는 속도
  });
}

function filter(arr){
  for(let el of arr){
    //각버튼에 클릭이벤트 연결
    el.addEventListener("click", e=>{
      //화면 끊김 방지
      e.preventDefault();
      //
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      
      //grid에 저장된 결과값을 불러와 재정렬 기능 연결
      grid.arrange({
        filter:sort
      });
    //모든 버튼 수 만큼 반복하여 각 버튼의 on클래스를 제거
      for(let el of arr){
        el.classList.remove(activeClass);
      }
      //클릭한 대상만 선택해서 클래스 on추가
      e.currentTarget.classList.add(activeClass);
    })
  }
}