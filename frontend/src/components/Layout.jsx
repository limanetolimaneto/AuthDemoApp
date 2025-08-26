import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  // Layout component wraps the entire page with header, footer, and main content area
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page header */}
      <Header />

      {/* Main content area with padding and centered layout */}
      <main className="flex-grow max-w-5xl bg-blue-100 mx-auto p-10 min-w-100">
        {children} {/* Render child components here */}
      </main>

      {/* Page footer */}
      <Footer />
    </div>
  )
}
