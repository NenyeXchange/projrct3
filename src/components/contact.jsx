function Contact() {
  return (
    <main class="container mx-auto p-6">
      <section class="bg-white p-6 rounded shadow-md">
        <h2 class="text-3xl font-bold mb-4 " id="contact">
          Contact Us
        </h2>
        <p class="mb-4">
          We would love to hear from you! Whether you have a question about our
          programs, admissions, or anything else, our team is ready to answer
          all your questions.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-2xl font-semibold mb-2">School Address</h3>
            <p>Oluaka Int'l Academy</p>
            <p>1234 Elm Street</p>
            <p>Obinze, IL 62704</p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-2">Contact Information</h3>
            <p>
              <i class="fas fa-phone-alt mr-2"></i>(123) 456-7890
            </p>
            <p>
              <i class="fas fa-envelope mr-2"></i>
              info@OluakaInstistute.@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Contact;
