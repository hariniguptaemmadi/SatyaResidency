export function Facilities() {
  return `
    <section class="relative -mt-28 z-40 bg-transparent">
      <div
        class="mx-auto
               w-[85%]
               bg-white
               rounded-2xl
               shadow-lg
               py-6">

        <h3 class="text-center text-lg font-semibold text-[#b08a4a] mb-5">
          Facilities
        </h3>

        <div class="grid grid-cols-5 text-center text-sm text-[#b08a4a]">

          <!-- Kitchen -->
          <div class="flex flex-col items-center gap-2">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="6" rx="1"/>
              <rect x="3" y="14" width="18" height="6" rx="1"/>
            </svg>
            <span>Restaurant</span>
          </div>

          <!-- AC -->
          <div class="flex flex-col items-center gap-2">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
              <path d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
            </svg>
            <span>AC</span>
          </div>

          <!-- Wifi -->
          <div class="flex flex-col items-center gap-2">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path d="M2 8c5-4 15-4 20 0"/>
              <path d="M5 12c3-3 11-3 14 0"/>
              <path d="M9 16c1.5-1.5 4.5-1.5 6 0"/>
              <circle cx="12" cy="19" r="1"/>
            </svg>
            <span>Wifi</span>
          </div>

          <!-- Bar -->
          <div class="flex flex-col items-center gap-2">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path d="M2 9h2v6H2zM20 9h2v6h-2z"/>
              <path d="M6 10h12v4H6z"/>
            </svg>
            <span>Bar</span>
          </div>

          <!-- Taxi -->
          <div class="flex flex-col items-center gap-2">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="3" y="10" width="18" height="6" rx="2"/>
              <circle cx="7" cy="18" r="1.5"/>
              <circle cx="17" cy="18" r="1.5"/>
            </svg>
            <span>Taxi</span>
          </div>

        </div>
      </div>
    </section>
  `
}
