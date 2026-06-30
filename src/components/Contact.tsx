'use client';
import { Mail, Play, Share2 } from 'lucide-react';
import Button from './ui/Button';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-6">Let's Connect</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                    Have an inquiry, feedback, or open collaboration concept? Get in touch with our core pipeline engineering team.
                </p>
                <div className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300">
                    <a href="mailto:sahuaditya215@gmail.com" className="flex items-center gap-3 hover:text-[#153E8C]"><Mail size={18} /> sahuaditya215@gmail.com</a>
                    <a href="https://github.com/AdityaSahu29" className="flex items-center gap-3 hover:text-[#153E8C]"><Share2 size={18} /> GitHub Company Profile</a>
                    <a href="https://www.linkedin.com/in/aditya-sahu29/" className="flex items-center gap-3 hover:text-[#153E8C]"><Share2 size={18} /> LinkedIn Profile</a>
                    <a href="https://play.google.com/store/apps/dev?id=5606538798376286317" className="flex items-center gap-3 hover:text-[#153E8C]"><Play size={18} /> Google Play Console Portfolio</a>
                </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-white dark:bg-[#0E1117]/40 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800">
                <div>
                    <label className="block text-xs uppercase tracking-wider mb-2 text-neutral-500">Name</label>
                    <input type="text" required className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 dark:text-white" />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider mb-2 text-neutral-500">Email</label>
                    <input type="email" required className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 dark:text-white" />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider mb-2 text-neutral-500">Message</label>
                    <textarea rows={4} required className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 dark:text-white resize-none"></textarea>
                </div>
                <Button variant="primary" type="submit">Send Message</Button>
            </form>
        </section>
    );
}