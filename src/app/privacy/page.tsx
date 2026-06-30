import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-6 py-24 text-neutral-800 dark:text-neutral-200">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-4 text-sm text-neutral-500">Last updated: June 2026</p>
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>At TechMate Studio, accessible from our mobile application portfolios, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by TechMate Studio and how we use it.</p>
          <h2 className="text-2xl font-semibold mt-6">Log Files</h2>
          <p>TechMate Studio follows a standard procedure of using log files. These files log visitors when they use apps. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
          <h2 className="text-2xl font-semibold mt-6">Advertising Partners Policy</h2>
          <p>Consult this list to find the Privacy Policy for each of the advertising partners of TechMate Studio. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Beacons that are used in their respective advertisements and links.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}