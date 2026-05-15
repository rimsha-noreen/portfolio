import logo from './logo.svg';
import picture from './Capture.PNG';
import './App.css';

function App() {
  return (

    <div className="min-h-screen bg-[#f7f5ff] text-slate-900 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500 text-white flex items-center justify-center text-2xl font-black shadow-lg">
              RN
            </div>
            <div>
              <h1 className="font-bold text-xl">Rimsha Noreen</h1>
              <p className="text-sm text-slate-500">Mathematician • Data Science • Machine Learning Researcher</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="text-purple-600">Home</a>
            <a href="#about" className="hover:text-purple-600 transition">About</a>
            <a href="#research" className="hover:text-purple-600 transition">Research</a>
            <a href="#publications" className="hover:text-purple-600 transition">Publications</a>
            <a href="#skills" className="hover:text-purple-600 transition">Skills</a>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
          </nav>

          <button className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 font-semibold shadow-lg hover:scale-105 transition">
            Download CV
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-b from-purple-200/40 to-indigo-200/20 rounded-l-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <div className="inline-flex rounded-full bg-purple-100 text-purple-700 px-5 py-2 text-sm font-semibold mb-6">
              M2 Student | Bézout Scholar | Researcher
            </div>

            <h1 className="text-6xl font-black leading-tight text-slate-900">
              Rimsha Noreen
            </h1>

            <p className="mt-5 text-2xl text-purple-700 font-semibold">
              Mathematics • Computer Science • Data Science
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl">
              M2 student in Mathematics & Computer Science at Université Gustave Eiffel, France.
              My research focuses on Graph Neural Networks, Complex Networks, and Smart Grid Security.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-10">
              <div className="rounded-2xl bg-white shadow-md border border-purple-100 p-4">
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-semibold mt-1">France</p>
              </div>

              <div className="rounded-2xl bg-white shadow-md border border-purple-100 p-4">
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-semibold mt-1 text-sm">ms.rimsha.noreen@gmail.com</p>
              </div>

              <div className="rounded-2xl bg-white shadow-md border border-purple-100 p-4">
                <p className="text-sm text-slate-500">Phone</p>
                <p className="font-semibold mt-1">+33 605 863 290</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#research"
                className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-4 font-semibold shadow-xl hover:scale-105 transition inline-flex items-center justify-center"
              >
                View My Research
              </a>

              <a
                href="#contact"
                className="rounded-2xl border-2 border-purple-300 text-purple-700 px-8 py-4 font-semibold hover:bg-purple-50 transition inline-flex items-center justify-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-[60px] blur-3xl"></div>

            <div className="relative bg-white rounded-[50px] overflow-hidden border border-purple-100 shadow-2xl max-w-lg">
              <img
                src={picture}
                alt="Rimsha Noreen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About & Interests */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[32px] shadow-lg border border-purple-100 p-10">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              I am a passionate mathematician and researcher with strong foundations in graph theory,
              network analysis, computational modeling, and machine learning.
            </p>

            <p className="text-slate-600 leading-relaxed text-lg mt-5">
              I aim to pursue a fully funded PhD in France in the intersection of applied mathematics,
              computer science, and artificial intelligence.
            </p>
          </div>

          <div className="bg-white rounded-[32px] shadow-lg border border-purple-100 p-10">
            <h2 className="text-3xl font-bold mb-6">Research Interests</h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Graph Neural Networks',
                'Smart Grid Security',
                'Complex Networks',
                'Data Science',
                'Topological Indices',
                'Machine Learning'
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-purple-50 border border-purple-100 p-5 text-center font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research & Education */}
      <section id="research" className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[32px] shadow-lg border border-purple-100 p-10">
            <h2 className="text-3xl font-bold mb-8">Research Experience</h2>

            <div className="rounded-3xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 p-8">
              <h3 className="text-2xl font-bold leading-snug">
                Exploiting GNNs for Detecting Cyber-Attacks in Smart Grid
              </h3>

              <ul className="mt-6 space-y-3 text-slate-600 leading-relaxed">
                <li>• Developing GNN-based models for False Data Injection detection</li>
                <li>• Leveraging graph topology and temporal data</li>
                <li>• Designing robust ML frameworks for anomaly detection</li>
                <li>• Working with IEEE benchmark datasets</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[32px] shadow-lg border border-purple-100 p-10">
            <h2 className="text-3xl font-bold mb-8">Education</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold">M2 Mathematics & Computer Science</h3>
                <p className="text-slate-500 mt-2">Université Gustave Eiffel, France</p>
                <p className="text-purple-600 font-medium mt-2">2025 – Ongoing • Bézout Scholar</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold">MS Mathematics</h3>
                <p className="text-slate-500 mt-2">COMSATS University Islamabad</p>
                <p className="text-purple-600 font-medium mt-2">CGPA: 4.0 / 4.0</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold">BS Mathematics</h3>
                <p className="text-slate-500 mt-2">COMSATS University Islamabad</p>
                <p className="text-purple-600 font-medium mt-2">4th Rank in Batch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Skills */}
      <section id="publications" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-[32px] shadow-lg border border-purple-100 p-8">
            <h2 className="text-3xl font-bold mb-6">Publications</h2>

            <div className="rounded-2xl bg-purple-50 border border-purple-100 p-5">
              <h3 className="font-bold leading-relaxed">
                Exploring Topological Indices and Entropy Measures using Python Coding
              </h3>

              <p className="text-slate-500 text-sm mt-3">
                Journal of Molecular Graphics and Modelling, 2025
              </p>
            </div>
          </div>

          <div id="skills" className="bg-white rounded-[32px] shadow-lg border border-purple-100 p-8">
            <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Python',
                'C / C++',
                'MATLAB',
                'LaTeX',
                'Graph Theory',
                'Machine Learning',
                'Data Analysis',
                'Network Analysis'
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl bg-purple-50 border border-purple-100 px-4 py-4 text-center font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[32px] shadow-lg border border-purple-100 p-8">
            <h2 className="text-3xl font-bold mb-6">Achievements</h2>

            <div className="space-y-5 text-slate-600">
              <div>
                <h3 className="font-bold">Certificate of Appreciation</h3>
                <p className="text-sm mt-1">COMSATS University Lahore</p>
              </div>

              <div>
                <h3 className="font-bold">Python & AI Course Completion</h3>
                <p className="text-sm mt-1">Microsoft Learn Student Ambassadors</p>
              </div>

              <div>
                <h3 className="font-bold">Graph Database Webinar</h3>
                <p className="text-sm mt-1">Research & Data Science Seminar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-[40px] bg-gradient-to-r from-purple-600 to-indigo-500 text-white p-14 shadow-2xl text-center">
          <h2 className="text-5xl font-black leading-tight">
            Looking for a Fully Funded PhD Opportunity in France
          </h2>

          <p className="mt-6 text-lg text-purple-100 max-w-3xl mx-auto leading-relaxed">
            I am actively seeking PhD positions in Applied Mathematics, Artificial Intelligence,
            Graph Neural Networks, and interdisciplinary computational research.
          </p>

          <a
            href="mailto:ms.rimsha.noreen@gmail.com"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-white text-purple-700 px-8 py-4 font-bold shadow-lg hover:scale-105 transition"
          >
            Let's Collaborate
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-black">RIMSHA NOREEN</h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Mathematician | Researcher | Future PhD
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-3 text-slate-400">
              <p><a href='#about'>About</a></p>
              <p><a href="#research">Research</a></p>
              <p><a href="#publications">Publications</a></p>
              <p><a href="#skills">Skills</a></p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-slate-400">
              <p>Champs-sur-Marne, France</p>
              <p>ms.rimsha.noreen@gmail.com</p>
              <p>+33 605 863 290</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  
  );
}

export default App;
