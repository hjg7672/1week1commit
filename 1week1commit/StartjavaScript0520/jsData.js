let boxEls = document.querySelectorAll('div');
//화면에 있는 모든 div를 찾아서 boxEls에 대입
console.log(`화면에 있는 div는 ${boxEls.length}`);
//여러개의 값을 처음부터 끝까지 찾아서 구현해주는 forEach

boxEls.forEach(function(boxEl, index){
console.log(index, boxEl);
//찾은 div에 클래스이름을 추가해서 조절
boxEl.classList.add(`order-${index}`);
console.log(index, boxEl);
boxEl.textContent = "Hi";
});