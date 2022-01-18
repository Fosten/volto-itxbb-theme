/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => (
  <Segment
    role="contentinfo"
    vertical
    padded
    inverted
    color="grey"
    textAlign="center"
    id="footer"
  >
    <Container>
      <Segment basic inverted color="grey" className="discreet">
<div className="address"><a href="https://goo.gl/maps/atsRcswvK75PHRLz8" target="_blank">ITX Broadband<br/>128 High Street<br/>Cresson Pa. 16630</a><br/><br/>
</div>
<div className="email">
        <a href="mailto:sales@itxbb.net">sales@itxbb.net</a><br/><br/>
</div>
<div className="phone">
        <a href="tel:8144722662">814-472-2662</a><br/><br/>
</div>
      </Segment>
      <List horizontal inverted>
        {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
        <div role="listitem" className="item">
            <FormattedMessage
	      id="Office Hours: M-F 8.30-4.30"
              defaultMessage="Office Hours: M-F 8.30-4.30"
            /><br /><br />
          <a className="item" href="http://www.facebook.com/itxbb" target="_blank">
            <FormattedMessage
              id="Connect with us on Facebook"
              defaultMessage="Connect with us on Facebook"
            />
          </a>
        </div>
      </List>
    </Container>
  </Segment>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
