import React from 'react';

// Components
import HeroText from '../components/heroText';
import PhotoBox from '../components/photoBox';
import TextBox from '../components/textBox';
import VideoBox from '../components/videoBox';
import DownloadBox from '../components/downloadBox';

// Assets
import headshot from '../../static/assets/headshot.jpg';
import video from '../../static/assets/ncl_thumbnail.mp4';

export default function Home() {
  const gig = {
    heading: 'Project upcoming',
    subheading: '',
    subnote: 'Mon, Apr 12th',
  };

  return (
    <>
      <HeroText text="Zach Cossman" area="one" />
      <PhotoBox image={headshot} area="two" />
      <TextBox area="three" content={gig}>
        <p className="body">
          <br />
          Zach's next gig will be announced shortly.
        </p>
      </TextBox>
      <VideoBox video={video} area="four" />
      <DownloadBox area="five" theme="dark" />
    </>
  );
}
