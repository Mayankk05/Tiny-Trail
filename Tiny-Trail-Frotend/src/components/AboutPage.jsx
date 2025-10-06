import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-white/80 backdrop-blur-sm w-full sm:py-10 py-8 rounded-xl shadow-lg">
        <h1 className="sm:text-4xl text-slate-900 text-3xl font-bold italic mb-3 px-6">
          About TinyTrail
        </h1>
        <p className="text-slate-600 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full px-6">
          TinyTrail simplifies URL shortening for quick and easy sharing. Easily
          create, manage, and track your shortened links with simplicity and
          efficiency. TinyTrail makes URL management intuitive, ensuring you can
          focus on sharing links rather than managing them.
        </p>
        <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full px-6">
          <div className="flex items-start p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:shadow-md transition-all duration-300">
            <FaLink className="text-blue-600 text-3xl mr-4 flex-shrink-0" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-900 mb-2">
                Simple URL Shortening
              </h2>
              <p className="text-slate-600 text-sm">
                Create short, memorable URLs in just a few clicks. TinyTrail's
                intuitive interface and fast setup process make shortening URLs
                effortless.
              </p>
            </div>
          </div>
          <div className="flex items-start p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg hover:shadow-md transition-all duration-300">
            <FaShareAlt className="text-indigo-600 text-3xl mr-4 flex-shrink-0" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-900 mb-2">
                Powerful Analytics
              </h2>
              <p className="text-slate-600 text-sm">
                Track your link performance with TinyTrail's analytics dashboard.
                Monitor clicks, location data, and referral sources to optimize
                your sharing strategies.
              </p>
            </div>
          </div>
          <div className="flex items-start p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:shadow-md transition-all duration-300">
            <FaEdit className="text-purple-600 text-3xl mr-4 flex-shrink-0" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-900 mb-2">
                Enhanced Security
              </h2>
              <p className="text-slate-600 text-sm">
                All TinyTrail links are protected with robust encryption,
                keeping your data safe and secure while sharing links online.
              </p>
            </div>
          </div>
          <div className="flex items-start p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:shadow-md transition-all duration-300">
            <FaChartLine className="text-blue-600 text-3xl mr-4 flex-shrink-0" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-900 mb-2">
                Fast and Reliable
              </h2>
              <p className="text-slate-600 text-sm">
                Enjoy fast redirects and high uptime with TinyTrail's reliable
                infrastructure. Your links are always accessible and responsive,
                ensuring a seamless experience for your users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;