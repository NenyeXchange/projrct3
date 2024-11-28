function Admission() {
  return (
    <main class="container mx-auto p-6">
      <section class="bg-white p-6 rounded shadow-md">
        <h2 class="text-3xl font-bold mb-4" id="admission">Online Application Form</h2>
        <form action="#" method="POST" class="space-y-4">
          <div>
            <label
              for="studentName"
              class="block text-sm font-medium text-gray-700"
            >
              Student's Name
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            ></input>
          </div>
          <div>
            <label for="dob" class="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            ></input>{" "}
          </div>
          <div>
            <label for="gender" class="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label for="grade" class="block text-sm font-medium text-gray-700">
              Grade Applying For
            </label>
            <select
              id="grade"
              name="grade"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Grade</option>
              <option value="kindergarten">Kindergarten</option>
              <option value="grade1">Grade 1</option>
              <option value="grade2">Grade 2</option>
              <option value="grade3">Grade 3</option>
              <option value="grade4">Grade 4</option>
              <option value="grade5">Grade 5</option>
              <option value="grade6">Grade 6</option>
              <option value="grade7">Grade 7</option>
              <option value="grade8">Grade 8</option>
              <option value="grade9">Grade 9</option>
              <option value="grade10">Grade 10</option>
              <option value="grade11">Grade 11</option>
              <option value="grade12">Grade 12</option>
            </select>
          </div>
          <div>
            <label
              for="parentName"
              class="block text-sm font-medium text-gray-700"
            >
              Parent/Guardian's Name
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            ></input>{" "}
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            ></input>{" "}
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            ></input>{" "}
          </div>
          <div>
            <label
              for="address"
              class="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="3"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <div>
            <label
              for="previousSchool"
              class="block text-sm font-medium text-gray-700"
            >
              Previous School (if any)
            </label>
            <input
              type="text"
              id="previousSchool"
              name="previousSchool"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ></input>{" "}
          </div>
          <div>
            <label
              for="additionalInfo"
              class="block text-sm font-medium text-gray-700"
            >
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows="3"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div class="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              class="h-4 w-4 text-blue-600 border-gray-300 rounded"
              required
            ></input>{" "}
            <label for="terms" class="ml-2 block text-sm text-gray-900">
              I agree to the{" "}
              <a href="#" class="text-blue-600 hover:underline">
                terms and conditions
              </a>
            </label>
          </div>
          <div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Admission;
