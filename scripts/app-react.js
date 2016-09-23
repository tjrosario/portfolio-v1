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

var RoleList = React.createClass({
  render: function() {
    var roleNodes = this.props.data.map(function(role, i) {
      return (
        <Role company={ role.company } startDate={ role.startDate } endDate={ role.endDate } position={ role.position } description={ role.description } responsibilities={ role.responsibilities } key={ i }></Role>
      );
    });
    return (
      <div className="roles">
        { roleNodes }
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
    Tommy.initCarousel($('.testimonials'), { autoplay: true });
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

var Video = React.createClass({
  render: function() {
    return (
      <div className="video">
        <video width="100%" height="100%" controls>
          <source src={ 'dist/assets/projects/' + this.props.slug + '/' + this.props.file + '.mp4' } type="video/mp4" />
          <source src={ 'dist/assets/projects/' + this.props.slug + '/' + this.props.file + '.ogg' } type="video/ogg" />
          <source src={ 'dist/assets/projects/' + this.props.slug + '/' + this.props.file + '.webm' } type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
});

var Lightbox = React.createFactory(React.createClass({
  componentDidMount: function() {
    this.overlay = document.getElementById('lightbox-overlay');
    this.overlay.className = 'active';
  },
  close: function() {
    this.overlay.className = '';
    ReactDOM.unmountComponentAtNode(this.overlay);
  },
  render: function() {
    return (
      <div className="lightbox">
        <div className="content" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        <i className="fa fa-times close" aria-hidden="true" onClick={ this.close }></i>
      </div>
    );
  }
}));

var Project = React.createClass({
  launchLightbox: function(e: Event) {
    var currentTarget = $(e.currentTarget).parents('.project');
    var $video = $(currentTarget).find('.video');
    
    ReactDOM.render(Lightbox({
      content: $video.html()
    }), document.getElementById('lightbox-overlay'));
  },
  render: function() {
    return (
      <div className="project">
        <div className="thumbnail" onClick={ this.launchLightbox }>
          <img src={ '/dist/assets/projects/' + this.props.slug + '/' + this.props.thumbnail } />
          <i className="fa fa-caret-square-o-right" aria-hidden="true"></i>
        </div>
        <h3>{ this.props.title }</h3>
        <div className="url">
          <a href={ this.props.url } target="_blank">{ this.props.url }</a>
        </div>
        <Video slug={ this.props.slug } file={ this.props.video }></Video>
      </div>
    );
  }
});

var ProjectList = React.createClass({
  componentDidMount: function() {
    setTimeout(function() {
      Tommy.initCarousel($('.projects'), {
        stagePadding: 10,
        navText: [
          '<div class="nav nav-prev"><i class="fa fa-caret-left"></i><span>Previous</span></div>',
          '<div class="nav nav-next"><span>Next</span><i class="fa fa-caret-right"></i></div>'
        ]
      });
    }, 1000);
  },
  render: function() {
    var projectNodes = this.props.data.map(function(project, i) {
      return (
        <Project slug={ project.slug } thumbnail={ project.thumbnail } video={ project.video } title={ project.title } url={ project.url } key={ i }></Project>
      );
    });
    return (
      <div className="projects owl-carousel owl-theme">
        { projectNodes }
      </div>  
    );
  }
});

var Section = React.createClass({
  render: function() {
    var content;

    if (this.props.content.roles) {
      content = <RoleList data={ this.props.content.roles } />;
    } else if (this.props.content.testimonials) {
      content = <TestimonialList data={ this.props.content.testimonials } />;
    } else if (this.props.content.projects) {
      content = <ProjectList data={ this.props.content.projects } />;
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
