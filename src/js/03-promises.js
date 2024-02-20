import Notiflix from 'notiflix';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  const delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);

  const promises = Array.from({ length: amount }, (_, i) => {
    return createPromise(i + 1, delay + i * step);
  });

  Promise.allSettled(promises).then(results => {
    results.forEach((result, i) => {
      if (result.status === 'fulfilled') {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${i + 1} in ${result.value.delay}ms`
        );
      } else {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${i + 1} in ${result.reason.delay}ms`
        );
      }
    });
  });
  event.target.reset();
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
