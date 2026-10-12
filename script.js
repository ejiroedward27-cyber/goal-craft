const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#recovery-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const message = [
    'Hello GoalCraft Recovery, I would like to request a case assessment.',
    '',
    `Full name: ${formData.get('name')}`,
    `Email: ${formData.get('email')}`,
    `Service needed: ${formData.get('service')}`,
    `Device or platform: ${formData.get('device')}`,
    '',
    'Issue description:',
    formData.get('message'),
    '',
    'I confirm that I am the account/device owner or am authorized to request this recovery.',
  ].join('\n');

  const whatsappNumber = '14693432643';
  window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});
