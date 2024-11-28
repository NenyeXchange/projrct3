function Header() {
  return (
    <header class="bg-blue-600 text-white p-4 rounded-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold"> Oluaka Academy</h1>
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a class="hover:underline" href="/">
                Home
              </a>
            </li>
            <li>
              <a class="hover:underline" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="hover:underline" href="#admission">
                Admissions
              </a>
            </li>
            <li>
              <a class="hover:underline" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;