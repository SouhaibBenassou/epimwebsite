import React from "react";
import NumberCounter from "../utils/NumberCounter";
import DivAnimateY from "../utils/DivAnimateY";

const CounterSection = () => {
  return (
    <section className="count_area counter_feature overflow-hidden">
      <div className="container">
        <DivAnimateY className="row g-4">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single-counter">
              <span className="ti-folder sc_one"></span>
              <NumberCounter
                number={120}
                durationToComplete={2}
                className="counter-num"
              />
              <p>Module</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single-counter">
              <span className="ti-medall-alt sc_two"></span>
              <NumberCounter
                number={100}
                durationToComplete={2}
                className="counter-num"
              />
              <p>Academic Programs</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single-counter">
              <span className="ti-id-badge sc_three"></span>
              <NumberCounter
                number={279}
                durationToComplete={2}
                className="counter-num"
              />
              <p>lauréat</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single-counter">
              <span className="ti-user sc_four"></span>
              <NumberCounter
                number={229}
                durationToComplete={2}
                className="counter-num"
              />
              <p>Élèves inscrits</p>
            </div>
          </div>
        </DivAnimateY>
      </div>
    </section>
  );
};

export default CounterSection;
