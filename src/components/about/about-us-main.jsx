import React from 'react';
import AboutUsHero from './about-us-hero';
import AboutUsArea from './about-us-area';
import TeamSection from './team-section/TeamSection';
import AgencySnapshots from './agency-snapshots/AgencySnapshots';

const AboutUsMain = () => {
    return (
        <div>
            <AboutUsHero />
            <AboutUsArea />
            <TeamSection />
            <AgencySnapshots />
        </div>
    );
};

export default AboutUsMain;