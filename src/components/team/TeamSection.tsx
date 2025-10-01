import { teamData } from "@/data/data";
import { TeamType } from "@/types";
import Link from "next/link";
import React from "react";
import DivAnimateY from "../utils/DivAnimateY";

const TeamSection = () => {
  return (
    <section className="team_area section-padding overflow-hidden">
      <DivAnimateY className="container">
        <div className="section-title text-center">
          <h2>Découvrez notre équipe pédagogique</h2>
          <p>
            Notre équipe pédagogique se compose d’enseignants passionnés, expérimentés et dévoués à la réussite de chaque étudiant. Grâce à leur expertise et à une approche personnalisée, ils accompagnent les apprenants tout au long de leur parcours avec bienveillance et professionnalisme.
          </p>
        </div>
        <div className="row g-4">
          {teamData.map((item: TeamType) => (
            <div className="col-lg-3 col-sm-6 col-xs-12" key={item.id}>
              <div className="our-team">
                <div className="team-content">
                  <Link href={`/instructor/${item.slug}`}>
                    <img src={item.img} alt="" />
                  </Link>
                </div>
                <div className="team-prof">
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
                {/* <div className="sth_det2">
                  <span className="ti-file">
                    {" "}
                    <u>
                      {item.course < 10 ? `0${item.course}` : item.course}{" "}
                      Course
                    </u>
                  </span>
                  <span className="ti-user">
                    {" "}
                    <u>{item.students} Student</u>
                  </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </DivAnimateY>
    </section>
  );
};

export default TeamSection;
