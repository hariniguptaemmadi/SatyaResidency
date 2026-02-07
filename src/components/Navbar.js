export function Navbar() {
  return `
    <header class="bg-white py-6 relative">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-xl font-semibold tracking-[0.3em]">SATYA</h1>
        <p class="text-xs tracking-[0.25em] text-gray-500">
          HOTELS • NARSAPUR • HYDERABAD
        </p>

        <nav class="mt-5 flex justify-center gap-10 text-sm text-[#6b6b6b] relative">
          <a href="src/assets/ourhotel.html" target="_blank" rel="noopener noreferrer">Our Hotel</a>

          <a href="src/assets/rooms.html" target="_blank" rel="noopener noreferrer">
            Rooms & Rates
          </a>

          <a href="src/assets/explore.html" target="_blank" rel="noopener noreferrer">
            Facilities
          </a>

          <!-- Contact Us -->
          <div class="relative">
            <button
              id="contactBtn"
              class="tracking-wide focus:outline-none"
              type="button"
            >
              Contact Us
            </button>

            <!-- Dropdown (Info only) -->
            <div
              id="contactDropdown"
              class="hidden absolute left-1/2 -translate-x-1/2 mt-3 w-64
                     bg-white border border-gray-200 rounded-md shadow-md
                     text-gray-700 text-sm z-50"
            >
              <div class="px-5 py-4 space-y-2 text-center">
                <p class="font-medium">Contact Information</p>
                <div class="h-px bg-gray-200"></div>
                <p class="tracking-wide">+91 92471 55900</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  `
}
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("contactBtn")
  const dropdown = document.getElementById("contactDropdown")

  btn.addEventListener("click", (e) => {
    e.stopPropagation()
    dropdown.classList.toggle("hidden")
  })

  document.addEventListener("click", () => {
    dropdown.classList.add("hidden")
  })
})
