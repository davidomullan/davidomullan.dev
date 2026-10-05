function mouseGlow() {
  let btn = document.querySelector('.mouse-cursor-gradient-tracking');
  btn.addEventListener('mousemove', e => {
    // let rect = e.target.getBoundingClientRect();
    let x = e.clientX - 500;
    let y = e.clientY - 500;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  });
}
