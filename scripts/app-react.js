var Role = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.description.toString());
    return { __html: rawMarkup };
  },
  render: function() {
    var responsibilities = this.props.responsibilities;
    var responsibilitiesList;
    if (responsibilities) {
      responsibilitiesList = responsibilities.map(function(responsibility, i){
        return <li key={ i }>{ responsibility }</li>;
      });
    }

    return (
      <div className="role">
        <header>
          <h3>{ this.props.company }</h3>
          <p>{ this.props.startDate } - { this.props.endDate }</p>
          <p><strong>Roles:</strong> { this.props.position }</p>
        </header>
        <div className="description" dangerouslySetInnerHTML={ this.rawMarkup() }></div>

        { 
          this.props.responsibilities ? 
            <div className="responsibilities">
              <ul>{ responsibilitiesList }</ul>
            </div>
          : null
        }
      </div>
    );
  }
});

var Testimonial = React.createClass({
  render: function() {
    return (
      <div className="testimonial">
        <blockquote>
          <i className="fa fa-quote-left" aria-hidden="true"></i>
          <span className="quote">{ this.props.quote }</span>
          <i className="fa fa-quote-right" aria-hidden="true"></i>
          <div className="author">
            <span>{ this.props.author }</span> { this.props.title }
          </div>
        </blockquote>
      </div>
    );
  }
});

var TestimonialList = React.createClass({
  componentDidMount: function() {
    Tommy.initCarousel();
  },
  render: function() {
    var testimonialNodes = this.props.data.map(function(testimonial, i) {
      return (
        <Testimonial quote={ testimonial.quote } author={ testimonial.author } title={ testimonial.title } key={ i }></Testimonial>
      );
    });
    return (
      <div className="testimonials owl-carousel owl-theme">
        { testimonialNodes }
      </div>  
    );
  }
});

var Section = React.createClass({
  render: function() {
    var content;

    if (this.props.content.roles) {
      content = this.props.content.roles.map(function(role, i) {
        return (
          <Role company={ role.company } startDate={ role.startDate } endDate={ role.endDate } position={ role.position } description={ role.description } responsibilities={ role.responsibilities } key={ i }></Role>
        );
      });
    } else if (this.props.content.testimonials) {
      content = <TestimonialList data={ this.props.content.testimonials } />;
    } else {
      content = <p>{ this.props.content.text }</p>;
    }

    return (
      <section className="section" id={ this.props.slug }>
        <h2>
          { this.props.headline }
        </h2>
        <div>
          { content }
        </div>
      </section>
    );
  }
});

var SectionList = React.createClass({
  render: function() {
    var sectionNodes = this.props.data.map(function(section, i) {
      return (
        <Section slug={ section.slug }  headline={ section.headline } content={ section.content } key={ i }></Section>
      );
    });
    return (
      <div className="sections">
        { sectionNodes }
      </div>  
    );
  }
});

var Portfolio = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  loadPortfolioFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ data: data.sections });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadPortfolioFromServer();
    //setInterval(this.loadPortfolioFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <SectionList data={ this.state.data } />
    );
  }
});

ReactDOM.render(
  <Portfolio url="/dist/data/portfolio.json" />,
  document.getElementById('portfolio')
);
