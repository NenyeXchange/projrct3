function Content() {
  return (
    <div id="content" className="flex justify-center items-center">
      <main className="container mx-auto mt-8 py-5 px-5 ">
        <section class="bg-white p-6 rounded-lg shadow-lg mb-8 self-center">
          <h2 class="text-2xl font-bold mb-4">Welcome to Our School</h2>
          <p class="mb-4">
            Our school is committed to providing a high-quality education to all
            students. We offer a variety of programs and extracurricular
            activities to help students grow and succeed.
          </p>
          <img
            alt="A vibrant school campus with students engaging in various activities"
            className="w-full rounded-lg h-96 object-cover"
            src="https://storage.googleapis.com/a1aa/image/lbDPyOweds1SG6ks5T2fOCfLsNhalB7seN9rxbyTeNuIHRieE.jpg"
          />
        </section>
        <section class="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-4">Latest News</h2>
          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <img
                alt="A group of students participating in a science fair"
                class="w-24 h-24 rounded-lg"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/t3pnjk45bYICOtftFHxwbVb5xt94yXHX4qq5C3XKs9ZeIS0TA.jpg"
                width="100"
              />
              <div>
                <h3 class="text-xl font-bold">
                  Science Fair Winners Announced
                </h3>
                <p>
                  Congratulations to all the winners of this year's science
                  fair. Your hard work and dedication have paid off!
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <img
                alt="Students performing on stage during the annual talent show"
                class="w-24 h-24 rounded-lg"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/6q3fiSyphLUZAKDF5OdX0ecqQwtHZgAUWy3fbi0Mqc20RkonA.jpg"
                width="100"
              />
              <div>
                <h3 class="text-xl font-bold">Annual Talent Show</h3>
                <p>
                  Join us for our annual talent show where students showcase
                  their amazing talents. Don't miss out on this exciting event!
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <img
                alt="A group of students on a field trip to a historical site"
                class="w-24 h-24 rounded-lg"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/8g150CuOzubOO5plG0mAoLc2WX3fdNyWiTWe0M3RdZDeRkonA.jpg"
                width="100"
              />
              <div>
                <h3 class="text-xl font-bold">Field Trip to Historical Site</h3>
                <p>
                  Our students recently visited a historical site and learned
                  about its significance. It was an educational and fun
                  experience for all.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-4">Upcoming Events</h2>
          <ul class="space-y-4">
            <li class="flex items-center space-x-4">
              <i class="fas fa-calendar-alt text-blue-600"></i>
              <div>
                <h3 class="text-xl font-bold">Parent-Teacher Conference</h3>
                <p>December 15, 2024</p>
              </div>
            </li>
            <li class="flex items-center space-x-4">
              <i class="fas fa-calendar-alt text-blue-600"></i>
              <div>
                <h3 class="text-xl font-bold">Winter Break</h3>
                <p>December 20, 2024 - January 3, 2024</p>
              </div>
            </li>
            <li class="flex items-center space-x-4">
              <i class="fas fa-calendar-alt text-blue-600"></i>
              <div>
                <h3 class="text-xl font-bold">Spring Festival</h3>
                <p>December 10, 2024</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
export default Content;
