import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-6 py-24 text-neutral-800 dark:text-neutral-200">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="mb-4 text-sm text-neutral-500">Last updated: June 2026</p>
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>Welcome to TechMate Studio. By downloading or using our games and apps, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the applications.</p>
          <h2 className="text-2xl font-semibold mt-6">Intellectual Property Rights</h2>
          <p>You are not allowed to copy or modify the apps, any part of the apps, or our trademarks in any way. You are not allowed to attempt to extract the source code of the apps, and you also shouldn't try to translate the apps into other languages or make derivative versions.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}