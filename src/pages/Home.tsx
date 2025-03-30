import Hero from './Home/Hero'
import SocialFeed from '../components/SocialFeed';
import SocialGrid from './Home/SocialGrid';
import Feedback from './Home/Feedback';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function Home() {


  

  return (
    <div className="space-y-16 pb-16">

      <Hero />
      <SocialGrid />
      <SocialFeed />
      <Feedback />

    </div>
  );
}