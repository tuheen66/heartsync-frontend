import { Accordion } from "flowbite-react";
import image1 from "../assets/images/wedding.jpg";

const HowItWorks = () => {
  return (
    <div className="mx-auto w-[90%]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-700">How It Works</h2>
        <p className="mt-2 text-sm text-gray-600">
          Simple steps to find your perfect match
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-stretch gap-8">
        <div className="flex-1">
          <Accordion collapseAll className="space-y-2">
            {[
              {
                title: "User Registration",
                content:
                  "Sign up with basic details (name, gender, contact info). Verification via email/OTP ensures authenticity. Social media login options available.",
              },
              {
                title: "Profile Creation",
                content:
                  "Complete your profile with personal details (age, height, religion, education, profession) and specify partner preferences to guide our matching algorithm.",
              },
              {
                title: "Search & Matchmaking",
                content:
                  "Use filters to search or let our algorithm suggest compatible matches based on your preferences and profile compatibility scores.",
              },
              {
                title: "Expressing Interest",
                content:
                  "Show interest in profiles you like. When interest is mutual, communication features unlock for both parties.",
              },
              {
                title: "Communication",
                content:
                  "Use our secure messaging system to connect. Premium members get access to video calls within the platform.",
              },
              {
                title: "Premium Features",
                content:
                  "Upgrade for enhanced privacy, unlimited messaging, profile boosting, and personalized matchmaking services.",
              },
              {
                title: "Safety Measures",
                content:
                  "Verified profiles, photo moderation, and reporting tools ensure a safe environment. AI detects and removes fake profiles.",
              },
            ].map((step, index) => (
              <Accordion.Panel key={index} className="group">
                <Accordion.Title className="flex items-center justify-between w-full p-3 text-sm font-medium text-left text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 transition-all duration-150">
                  <span className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 mr-2 text-xs font-semibold text-white bg-indigo-500 rounded-full">
                      {index + 1}
                    </span>
                    {step.title}
                  </span>
                  <svg
                    className="w-4 h-4 transition-transform duration-150 group-[.active]:rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Accordion.Title>
                <Accordion.Content className="p-3 text-xs text-gray-600 border border-t-0 border-gray-200 rounded-b-lg bg-gray-50">
                  {step.content}
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </div>
        <div className="flex-1 flex items-center ">
          <img 
            className="w-full h-auto max-h-[500px] object-scale-down " 
            src={image1} 
            alt="How it works illustration" 
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;