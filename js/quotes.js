// Feature a random quote from the grid, hiding its card so it isn't shown twice.
(function () {
  const cards = Array.from(document.querySelectorAll('.quote-card'));
  const featured = document.getElementById('quote-featured-content');
  const shuffle = document.getElementById('quote-shuffle');
  let current = -1;

  function feature(index) {
    if (current >= 0) {
      cards[current].hidden = false;
    }
    current = index;
    cards[index].hidden = true;
    featured.innerHTML = cards[index].querySelector('figure').innerHTML;
  }

  function featureRandom() {
    let next = Math.floor(Math.random() * cards.length);
    if (cards.length > 1 && next === current) {
      next = (next + 1) % cards.length;
    }
    feature(next);
  }

  if (cards.length === 0) {
    featured.parentElement.hidden = true;
    return;
  }

  shuffle.hidden = cards.length < 2;
  shuffle.addEventListener('click', featureRandom);
  featureRandom();
})();
