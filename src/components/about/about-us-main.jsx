"use client"
import React from 'react';
import AboutUsHero from './about-us-hero';
import AboutUsArea from './about-us-area';
import TeamSection from './team-section/TeamSection';
import AgencySnapshots from './agency-snapshots/AgencySnapshots';
import useScrollSmooth from '@/hooks/use-scroll-smooth';

const AboutUsMain = () => {
    useScrollSmooth();
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