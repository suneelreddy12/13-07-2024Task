import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <h2>Ready to get started?</h2>
        <p className="lead">Sign up now and start using our product today.</p>
        <a href="#signup" className="btn btn-light">
          Sign Up
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
