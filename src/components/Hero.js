export function Hero() {
  return `
    <section
      class="relative h-[60vh] bg-center bg-cover"
      style="background-image: url('/public/photos/Intro.jpeg');">

      <!-- dark overlay for text readability -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- content -->
      <div
        class="relative z-10 h-full flex flex-col
               justify-center items-center
               text-white text-center">

        <h2 class="text-5xl font-bold tracking-wide">
          WELCOME TO SATYA RESIDENCY
        </h2>

        <p class="mt-4 text-sm opacity-90">
          Good people. Good thinking. Good feeling.
        </p>

        <a
          href="/explore.html"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 bg-[#d4af6a]
                 px-12 py-3 rounded-md
                 text-sm font-semibold inline-block">
          EXPLORE
        </a>

      </div>
    </section>
  `
}
