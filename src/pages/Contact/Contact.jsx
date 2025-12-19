import React from "react";
import ContactHero from "../../component/ContactHero";
import ReachOut from "../../component/ReachOut";
import AIASuccessStats from "../../component/AIASuccessStats";
import HeroWithProjects from "../../component/WhyChoose";
import AlumniWorkFor from "../../component/courses/AlumniWorkFor";
import GlobalClassroomMap from "../../component/courses/GlobalClassroomMap";
import Youtube from "../../component/Youtube";
import CareerPartner from "../../component/CareerPartner";
import StudentTestimonials from "../../component/StudentTestimonials";
import LocationMap from "../../component/LocationMap";

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ReachOut />
      <AIASuccessStats />
      <HeroWithProjects />
      <AlumniWorkFor />
      <GlobalClassroomMap />
      <CareerPartner />
      <StudentTestimonials />
      <LocationMap />
    </div>
  );
};

export default Contact;
