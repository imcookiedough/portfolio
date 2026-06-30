// Tab navigation between panels
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.panel;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    panels.forEach(p => {
      if (p.dataset.panel === target) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    // keep keyboard/scroll position sane
    document.getElementById('stage').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Experience accordion
document.querySelectorAll('.job-head').forEach(head => {
  head.addEventListener('click', () => {
    const job = head.closest('.job');
    const wasOpen = job.classList.contains('open');

    // close all others for a tidier feel
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
