export default function Home() {
  return (
    <>
      {/* Page heading */}
      <h2 className="text-xl font-semibold mb-4">Main Content</h2>

      {/* Main paragraph */}
      <p>
        This section represents the primary content area of the page.
      </p>

      {/* Responsive container with background colors changing according to screen size */}
      <div className="bg-blue-100 sm:bg-green-100 md:bg-yellow-100 lg:bg-red-100 p-4 rounded mt-4">
        Responsive Content Example
        <ul className="list-disc list-inside mt-2">
          {/* Explanation of responsive breakpoints */}
          <li>
            Up to 639px → blue background (bg-blue-100) → small mobile devices
          </li>
          <li>
            640px to 767px → green background (sm:bg-green-100) → large mobile / small tablet
          </li>
          <li>
            768px to 1023px → yellow background (md:bg-yellow-100) → tablet devices
          </li>
          <li>
            1024px and above → red background (lg:bg-red-100) → notebook / desktop screens
          </li>
        </ul>
        {/* Note: background color changes based on Tailwind responsive breakpoints */}
      </div>
    </>
  );
}
