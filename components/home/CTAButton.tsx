import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="https://b23.tv/5S7oHiU"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <img
        src={
          // "https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png"
          "https://miro.medium.com/v2/resize:fit:600/format:webp/1*xqT83bMEz92IBYxS9UQNow.png"
        }
        alt="Logo"
        width={180}
      />
    </Link>
  );
};

export default CTAButton;
