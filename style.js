// script.js

// 떠다니는 이모티콘을 랜덤으로 생성하는 함수
const emojis = ['🐰', '🎀', '🌸', '💖', '🧸', '🍓', '✨', '🫧', '💗', '👑'];

function createFloatingEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  // 랜덤 위치 설정
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = (5 + Math.random() * 5) + 's';
  emoji.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';

  document.body.appendChild(emoji);

  // 떠다니다가 사라지면 삭제
  setTimeout(() => {
    emoji.remove();
  }, 10000);
}

// 일정 간격으로 이모티콘 생성
setInterval(createFloatingEmoji, 800);

// 페이지 진입 시 효과 (타이틀 강조 애니메이션 등)
window.addEventListener('load', () => {
  const title = document.querySelector('header h1');
  title.style.transition = 'transform 0.5s ease';
  title.style.transform = 'scale(1.05)';
  setTimeout(() => {
    title.style.transform = 'scale(1)';
  }, 500);
});