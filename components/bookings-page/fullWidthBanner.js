import { FullWidthBanner, HeaderBullet } from "./styled";

export const FullWithBannerComponent = props => {
  return (
    <FullWidthBanner>
      <HeaderBullet start={2} end={"span 1"}>
        <h3>Get Your Time Back</h3>
        <p>
          We help you get the time to focus on what’s most important to you.
        </p>
      </HeaderBullet>

      <HeaderBullet start={3} end={"span 1"}>
        <h3>The Unbreakable Guarantee</h3>
        <p>The service isn't complete until you are happy.</p>
      </HeaderBullet>

      <HeaderBullet start={4} end={"span 1"}>
        <h3>Honest & reliable</h3>
        <p>Your home will always be in safe hands with us.</p>
      </HeaderBullet>

      <HeaderBullet start={5} end={"span 1"}>
        <h3>Online Chat</h3>
        <p>
          Ask us questions 24/7 or make order changes on the fly by using our
          speedy online chat.
        </p>
      </HeaderBullet>

      <HeaderBullet start={6} end={"span 1"}>
        <h3>Quick & Easy</h3>

        <p>
          Our conveinient booking system reminds when your clean is beforehand!
        </p>
      </HeaderBullet>
    </FullWidthBanner>
  );
};
