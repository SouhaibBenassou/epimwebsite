import { courseData ,  fedeData,  westfordData} from "@/data/data";
import { CourseType } from "@/types";
import Link from "next/link";
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";
import DivAnimateY from "../utils/DivAnimateY";
type Props = {
  showHeader?: boolean;
};
const CourseSection = ({ showHeader }: Props) => {
  return (
   <> 
    <section className="home_course section-padding overflow-hidden">
      <div className="container">
        <div className="section-title text-center">
          <h2>Découvrez nos Filières</h2>
        </div>
        
        {showHeader && (
          <div className="row align-items-center section-title">
            <DivAnimateX position={-60} className="col-sm-8 col-xs-12">
              <h3>
                Diplôme de formation professionnelle accrédité par l'État.
              </h3>
            </DivAnimateX>
          </div>
        )}
        <DivAnimateY className="row g-4">
          {courseData.map(( item: CourseType,index: number, ) => (
            <>  
            <div className="col-lg-4 col-sm-6 col-xs-12" key={item.id}>
              <div className="single_course">
                <div className="single_c_img">
                  <img
                    src={item.img}
                    className="img-fluid"
                    alt="course-image"
                  />
                  <span>{item.category}</span>
                </div>
                
                <h4>
                  <Link href={`/course/${item.slug}`}>{item.title}</Link>
                </h4>
                <p>
                  <span className="ti-book"> </span> {item.course} Module
                </p>
                <p>
                  <span className="ti-alarm-clock"> </span>
                  {item.duration}
                </p>
                <div className="price"> 
                  <div className="cour_btn">
                <Link href={`/`} className="btn_one">
                  Details <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
                </div>
              </div>
            </div>
            </>
          ))}
        </DivAnimateY> 
       
      </div> 
    </section>  
     <section className="home_course overflow-hidden">
      <div className="container">
        {showHeader && (
          <div className="row align-items-center section-title">
            <DivAnimateX position={-60} className="col-sm-8 col-xs-12">
              <h3>
                Diplôme en partenariat avec la FEDE.
              </h3>
            </DivAnimateX>
          </div>
        )}
        <DivAnimateY className="row g-4">
          {fedeData.map(( item: CourseType,index: number, ) => (
            <>  
            <div className="col-lg-4 col-sm-6 col-xs-12" key={item.id}>
              <div className="single_course">
                <div className="single_c_img">
                  <img
                    src={item.img}
                    className="img-fluid"
                    alt="course-image"
                  />
                  <span>{item.category}</span>
                </div>
                
                <h4>
                  <Link href={`/course/${item.slug}`}>{item.title}</Link>
                </h4>
                <p>
                  <span className="ti-book"> </span> {item.course} Module
                </p>
                <p>
                  <span className="ti-alarm-clock"> </span>
                  {item.duration}
                </p>
                <div className="price"> 
                  <div className="cour_btn">
                <Link href={`/`} className="btn_one">
                  Details <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
                </div>
              </div>
            </div>
            </>
          ))}
        </DivAnimateY> 
       
      </div> 
     
    </section>
    <section className="home_course overflow-hidden section-padding-top ">
      <div className="container">
        {showHeader && (
          <div className="row align-items-center section-title">
            <DivAnimateX position={-60} className="col-sm-8 col-xs-12">
              <h3>
                Diplôme en partenariat avec Wesford.
              </h3>
            </DivAnimateX>
          </div>
        )}
        <DivAnimateY className="row g-4">
          {westfordData.map(( item: CourseType,index: number, ) => (
            <>  
            <div className="col-lg-4 col-sm-6 col-xs-12" key={item.id}>
              <div className="single_course">
                <div className="single_c_img">
                  <img
                    src={item.img}
                    className="img-fluid"
                    alt="course-image"
                  />
                  <span>{item.category}</span>
                </div>
                
                <h4>
                  <Link href={`/`}>{item.title}</Link>
                </h4>
                <p>
                  <span className="ti-book"> </span> {item.course} Module
                </p>
                <p>
                  <span className="ti-alarm-clock"> </span>
                  {item.duration}
                </p>
                <div className="price"> 
                  <div className="cour_btn">
                <Link href={`/`} className="btn_one">
                  Details <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
                </div>
              </div>
            </div>
            </>
          ))}
        </DivAnimateY> 
       
      </div> 
    </section>  
    </>
  );
};

export default CourseSection;
