const form = document.querySelector('.submit-form');
const errorEl = document.querySelector('.error');

form.addEventListener('submit',async e=>{
    e.preventDefault();
    const name = form.name.value;
    const bio = form.bio.value;
    const qualifications = form.qualifications.value;
    const skills = form.skills.value;
    const email = form.email.value;
    const send = { name, bio, qualifications, skills, email };
    const res = await fetch('/create', {
        method: 'POST',
        body: JSON.stringify(send),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    if (data.error){
        if (data.error.code === 11000) errMsg = `ERROR: duplicate entry ${Object.keys(data.error.keyValue)[0]}`;
        errorEl.textContent = errMsg | 'Something Went Wrong'
    } else location.assign(data.redirect);
})