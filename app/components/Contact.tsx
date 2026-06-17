export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold mb-6">
        Contact
      </h2>

      <p className="text-gray-600 max-w-xl">
        I’m open to full-time roles, freelance work, and startup opportunities.
        I enjoy building scalable systems, AI products, and backend-heavy platforms.
        Let’s connect if you’re working on something interesting.
      </p>

      <div className="mt-6 flex flex-col gap-4">

        <a
          href="mailto:mianmidhat@gmail.com"
          className="text-blue-600 hover:underline"
        >
          📧 Email: mianmidhat@gmail.com
        </a>

        <a
          href="https://github.com/midhat81"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🐙 GitHub: github.com/midhat81
        </a>

        <a
          href="https://www.linkedin.com/in/muhammadmidhat81"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 LinkedIn: linkedin.com/in/muhammadmidhat81
        </a>

        <a
          href="https://muhammad-midhat.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🌐 Portfolio: muhammad-midhat.vercel.app
        </a>

      </div>

      <p className="text-gray-500 mt-6">
        Based in Malaysia 🇲🇾 | Open to Remote & Relocation
      </p>

    </section>
  );
}