import { Accordion } from "flowbite-react";

const HowItWorks = () => {
  return (
    <div className="bg-gray-300 p-4">
      <Accordion collapseAll>
        <Accordion.Panel >
          <Accordion.Title className="py-2 px-4">User Registration:</Accordion.Title>
          <Accordion.Content>
            <p className=" text-gray-600 dark:text-gray-400">
              Users sign up by providing basic details such as name, gender, and
              contact information (email or phone). The platform often requires
              verification through email or OTP to ensure authenticity. Some
              platforms also offer sign-up options through social media accounts
              for convenience and faster registration.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="py-2 px-4">Profile Creation:</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              Users fill in detailed personal information, including age,
              height, religion, education, profession, and family background.
              This data helps potential matches understand compatibility. Users
              also specify partner preferences (e.g., age, location, education)
              that guide matchmaking algorithms. Profiles often include space
              for photos and a personal description.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="py-2 px-4">Search and Matchmaking:</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              Users can search for potential partners using filters like
              religion, location, education, and more. The platform’s algorithm
              suggests compatible matches based on user preferences, behavioral
              data, and profile compatibility scores. Regular suggestions keep
              users engaged and improve the chances of finding a suitable match.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="py-2 px-4">Expressing Interest:</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
            When users find a profile they like, they can express interest through a button or message. The other user is notified and can either accept or decline the interest. Mutual acceptance often leads to the unlocking of communication features, such as private messaging or chat.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="py-2 px-4">Communication:</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
            After mutual interest is confirmed, users can communicate using the site's built-in chat or messaging system. This allows them to get to know each other before sharing personal contact information. Some platforms offer premium features like video calls for deeper interaction within a secure environment.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="py-2 px-4">Premium Features:</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
            While basic features like profile browsing and interest expression are usually free, advanced features require paid subscriptions. These may include enhanced privacy, viewing detailed contact information, prioritized visibility in search results, unlimited messaging, and personalized matchmaking services by human consultants.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="py-2 px-4">Safety Measures:</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
            Matrimony sites implement various safety features, such as profile verification, photo moderation, and privacy controls. Users can block or report suspicious profiles. The platform may employ AI to detect fake profiles or fraudulent activities. These measures ensure a secure and respectful environment for users.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default HowItWorks;
