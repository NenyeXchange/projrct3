function About() {
  return (
    <main class="container mx-auto p-6">
      <section class="bg-white p-6 rounded shadow-md">
        <h2 class="text-3xl font-bold mb-4" id="about">
          About Oluaka School
        </h2>
        <p class="mb-4">
          Oluaka High School has been a cornerstone of the Springfield community
          since its founding in 1950. Our mission is to provide a nurturing and
          challenging environment where students can achieve their full
          potential.
        </p>
        <h3 class="text-2xl font-semibold mb-2">Our Vision</h3>
        <p class="mb-4">
          To be a leading educational institution that inspires and empowers
          students to become lifelong learners and responsible global citizens.
        </p>
        <h3 class="text-2xl font-semibold mb-2">Our Mission</h3>
        <p class="mb-4">
          We are committed to fostering academic excellence, personal growth,
          and social responsibility in a supportive and inclusive environment.
          We strive to develop critical thinkers, effective communicators, and
          compassionate individuals who are prepared to make a positive impact
          in the world.
        </p>
        <h3 class="text-2xl font-semibold mb-2">Our Values</h3>
        <ul class="list-disc list-inside mb-4">
          <li>
            Integrity: We uphold the highest standards of honesty and ethical
            behavior.
          </li>
          <li>
            Respect: We value diversity and treat everyone with dignity and
            respect.
          </li>
          <li>Excellence: We strive for excellence in all that we do.</li>
          <li>
            Collaboration: We believe in the power of teamwork and partnership.
          </li>
          <li>
            Innovation: We embrace creativity and encourage innovative thinking.
          </li>
        </ul>
        <h3 class="text-2xl font-semibold mb-2">Our History</h3>
        <p class="mb-4">
          Oluaka institution was established in 1950 with a vision to provide
          quality education to the children of Africa. Over the years, we have
          grown and evolved, adapting to the changing needs of our community
          while staying true to our core values. Today, we are proud to be a
          diverse and inclusive school that offers a wide range of academic and
          extracurricular programs.
        </p>
        <h3 class="text-2xl font-semibold mb-2">Meet Our Team</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-100 p-4 rounded shadow-md">
            <img
              alt="Portrait of Principal John Doe, a middle-aged man with short brown hair and glasses, wearing a suit and tie."
              className="w-full h-48 object-cover rounded-s-full mb-4 hover:-mt-4 hover:shadow-xl  transition-all duration-500 ease-in-out"
              height="150"
              src="https://storage.googleapis.com/a1aa/image/qIjs3gfSCrW6Rq6pvfYIeFcFTDmJWVvTaXHq0uxzzVRNImonA.jpg"
              width="150"
            />
            <h4 class="text-xl font-bold">John Doe</h4>
            <p class="text-gray-700">Principal</p>
          </div>
          <div class="bg-gray-100 p-4 rounded shadow-md">
            <img
              alt="Portrait of Vice Principal Jane Smith, a middle-aged woman with long blonde hair, wearing a professional blouse."
              class="w-full h-48 object-cover rounded-s-full mb-4 hover:-mt-4 hover:shadow-xl  transition-all duration-500 "
              height="150"
              src="https://storage.googleapis.com/a1aa/image/2l2g4yfInQTRS6noT0s2KvEE8Et4zJlDPjf4OOjCaHKJET0TA.jpg"
              width="150"
            />
            <h4 class="text-xl font-bold">Jane Smith</h4>
            <p class="text-gray-700">Founder</p>
          </div>
          <div class="bg-gray-100 p-4 rounded shadow-md">
            <img
              alt="Portrait of Head of Admissions Mark Johnson, a young man with short black hair, wearing a casual shirt."
              class="w-full h-48 object-cover rounded-s-full mb-4 hover:-mt-4 hover:shadow-xl  transition-all duration-500 "
              height="150"
              src="https://storage.googleapis.com/a1aa/image/8TaZhFyDx84bDhVFZb2qt70C4nGaCnfCj9j0dDyuK5PEiJ6JA.jpg"
              width="150"
            />
            <h4 class="text-xl font-bold">Mark Johnson</h4>
            <p class="text-gray-700">Head of Admissions</p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
