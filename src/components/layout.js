import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import posed from 'react-pose';

import Header from './header'
import code from '../images/code.jpg'
import './layout.css'

const Container = posed.div({
  visible: {
    opacity: 1,
    transition: {
      duration: 700
    }
  },
  hidden: {
    opacity: 0
  }
});

class Layout extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { pose: 'hidden' };
  }

  componentDidMount() {
    this.setState({
      pose: 'visible'
    });
  }

  render() {
    return <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <Container pose={this.state.pose}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Kallyn Gowdy\'s Website' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {this.props.background ? <img className="background" src={code} alt="Kal's immensely impressive code." /> : ""}
          <Header siteTitle={data.site.siteMetadata.title} className={this.props.headerClass} />
          <div className="container">
            {this.props.children}
          </div>
        </Container>
      )}
    />;
  }
}

export default Layout;
