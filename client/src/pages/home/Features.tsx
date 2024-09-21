import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useTheme } from '@/store/theme-provider'

const features = [
  {
    name: 'Push to deploy',
    description: 'Effortlessly push your code to production with our optimized deployment pipeline.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL Certificates',
    description: 'Secure your application with industry-standard SSL encryption, ensuring a safe experience for your users.',
    icon: LockClosedIcon,
  },
  {
    name: 'Automated Backups',
    description: 'Your data is backed up regularly to prevent any loss and ensure peace of mind.',
    icon: ServerIcon,
  },
]

const Features = () => {
  const { theme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <div className={`overflow-hidden ${isDarkMode ? 'bg-black text-white' : 'bg-gray-300 text-gray-900'} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <img src="../../df_logo_256.png" alt="DevForces Logo - A community for developers" className="h-12 mb-6" />
            <div className="lg:max-w-lg pt-12">
              <button className="mb-4 px-4 py-2 text-md font-medium ${isDarkMode ? 'text-white' : 'text-purple-900'} bg-purple-900/40 rounded-full hover:bg-indigo-800/60 transition-colors duration-300 ease-in-out">
                What's new
              </button>
              <a href="#" className="p-6 text-xl font-semibold leading-6 text-gray-600">Just shipped v1.0  <span aria-hidden="true">→</span></a>
              <h1 className="mt-2 text-4xl font-bold tracking-tight ${isDarkMode ? ' text-white' : ' text-gray-900'} sm:text-5xl">Deploy to the cloud with confidence</h1>
              <p className="mt-6 text-lg leading-8 ${isDarkMode ? ' text-white' : ' text-gray-900'}">
                Our latest updates provide <span className = {`${isDarkMode ? 'text-purple-500' : 'text-purple-900 font-bold'}`}>faster deployment</span>, <span className = {`${isDarkMode ? 'text-purple-500' : 'text-purple-900 font-bold'}`}>enhanced security</span>, and  <span className = {`${isDarkMode ? 'text-purple-500' : 'text-purple-900 font-bold'}`}>automated data backups</span>, streamlining your development process.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 ${isDarkMode ? ' text-white' : ' text-gray-900'} lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="text-lg inline font-bold ${isDarkMode ? ' text-white' : ' text-gray-900'}">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-6 w-6 text-purple-900" />
                      {feature.name}
                    </dt>{' .  '}
                    <dd className="inline ${isDarkMode ? ' text-white' : ' text-gray-900'}">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative">
            <img
              alt="Product screenshot"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              className="w-[48rem] max-w-none rounded-xl shadow-lg ring-1 ring-gray-700/20 sm:w-[57rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
