function mouseGlow() {
  let btn = document.querySelector('.mouse-cursor-gradient-tracking');
  btn.addEventListener('mousemove', e => {
    // let rect = e.target.getBoundingClientRect();
    let x = e.pageX - 500;
    let y = e.pageY - 500;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  });
}
