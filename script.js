// Smooth scroll nav with active-state highlighting
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.page-section');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = tab.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      tabs.forEach(t => {
        t.classList.toggle('active', t.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(s => navObserver.observe(s));

// Scroll-reveal for sections
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(s => revealObserver.observe(s));

// Experience accordion
document.querySelectorAll('.job-head').forEach(head => {
  head.addEventListener('click', () => {
    const job = head.closest('.job');
    const wasOpen = job.classList.contains('open');

    document.querySelectorAll('.job.open').forEach(j => j.classList.remove('open'));

    if (!wasOpen) {
      job.classList.add('open');
    }
  });
});

// Open the first job by default
const firstJob = document.querySelector('.job');
if (firstJob) firstJob.classList.add('open');

// Photo upload -> swap placeholder avatar
const photoInput = document.getElementById('photoUpload');
const avatarSlot = document.getElementById('avatarSlot');

photoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    avatarSlot.innerHTML = `<img src="${ev.target.result}" alt="Profile photo">`;
  };
  reader.readAsDataURL(file);
});

// LinkedIn link placeholder - update href below with your actual profile
document.getElementById('linkedinLink').setAttribute(
  'href',
  'https://www.linkedin.com/in/raquelnicole415'
);
