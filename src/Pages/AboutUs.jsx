import "./AboutUsCss/AboutUs.css";
import bannerImg from "./../assets/images/about.jpg"

const AboutUs = () => {
  return (
    <div>
        <div
        className="mx-auto min-h-screen w-[90%] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
        }}
      >
        <h2 className=" text-4xl lg:text-5xl text-center font-bold text-white items-center py-48 lg:py-72">
          About Us
        </h2>
      </div>
      <div className="about w-[70%] mx-auto my-12 text-justify">
        
        <p>
          <span>Welcome to Heartsync</span>— where hearts find harmony and souls
          connect for a lifetime.
        </p>
        <p>
          At Heartsync, we believe that love is not just a feeling; it is the
          ultimate connection between two souls destined to be together. Our
          platform is designed to help you find your perfect life partner
          through a meaningful, safe, and personalized matchmaking experience.
        </p>
        <h3>Our Mission</h3>
        <p>
          We are on a mission to help individuals from all walks of life
          discover genuine relationships that lead to long-lasting, happy
          marriages. We believe that compatibility, shared values, and mutual
          respect are at the heart of successful relationships. That's why we
          aim to go beyond superficial attributes, helping you find someone who
          truly complements your personality and life goals.
        </p>

        <h3>Why Choose Heartsync?</h3>
        <ul className="choose mb-8">
          <li>
            <span>Personalized Matchmaking : </span> Our advanced algorithms
            analyze multiple aspects of your personality, preferences, and
            lifestyle to present you with the most compatible matches. We
            understand that everyone is unique, and we tailor our services to
            meet your specific needs.
          </li>
          <li>
            <span>Verified Profiles : </span> At Heartsync, we prioritize your
            safety and trust. Every profile undergoes strict verification to
            ensure that you are meeting genuine people with honest intentions.
            We take privacy and security seriously, providing you with a
            trustworthy platform to find love.
          </li>
          <li>
            <span>Cultural Diversity : </span> We celebrate love in all its
            forms and are proud to serve a diverse community. Whether you are
            looking for someone within your own culture or someone who shares
            your interests from a different background, Hearsync connects hearts
            across boundaries.
          </li>
          <li>
            <span>User-Friendly Experience : </span> Our easy-to-navigate
            interface and intuitive design make it simple for you to find
            potential matches. Whether you’re new to online matchmaking or an
            experienced user, we make the journey enjoyable and stress-free.{" "}
          </li>
        </ul>

        <h3>Our Values</h3>
        <ul className="value mb-8">
          <li>
            <span>Respect & Dignity : </span> Every individual deserves to be
            treated with respect. We foster a respectful community where users
            can engage authentically and comfortably.
          </li>
          <li>
            <span>Trust : </span> Building trust is at the core of everything we
            do. We take strong measures to ensure a safe and reliable
            environment for everyone.
          </li>
          <li>
            <span>Inclusivity :</span> We embrace all backgrounds, cultures, and
            beliefs. Love knows no boundaries, and we are committed to
            connecting people without barriers..
          </li>
        </ul>
        <h3>How It Works</h3>
        <ul className="value mb-8">
          <li>
            <span>Create a Profile : </span> Share details about yourself, your
            values, and what you’re looking for in a partner.
          </li>
          <li>
            <span>Get Matched : </span> Our intelligent system suggests matches
            based on your preferences, compatibility, and shared goals.
          </li>
          <li>
            <span>Connect :</span> Take your time to get to know your potential
            partners through messages, video calls, or even guided
            conversations.
          </li>
          <li>
            <span>Find Your Forever : </span> When you find someone who
            resonates with your heart and soul, you’ll be ready to take the next
            step toward building a future together.
          </li>
        </ul>
        <h3>Join Heartsync Today!</h3>
        <p>
          Whether you’re looking for a partner who shares your faith, values, or
          interests, Hearsync offers a safe, secure, and welcoming space to find
          your soulmate. Join our community of hopeful hearts and start your
          journey to love today.
        </p>
        <p>
          Let us help you hear the sync of two hearts as they come together in
          perfect harmony.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
