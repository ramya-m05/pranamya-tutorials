const enquiryForm = document.querySelector('#enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;
    const status = document.querySelector('#form-status');
    const studentName = enquiryForm.elements.student_name.value.trim();
    const course = enquiryForm.elements.course.value.trim();
    const phone = enquiryForm.elements.phone.value.trim();
    const message = `Hi, I’d like to enquire about a free demo at Pranamya Tutorials.\n\nStudent’s name: ${studentName}\nInterested in: ${course}\nParent’s phone number: ${phone}`;
    status.textContent = 'Opening WhatsApp with your enquiry. Please review the message there and tap Send to submit it.';
    window.location.href = `https://wa.me/919686575508?text=${encodeURIComponent(message)}`;
  });
}
