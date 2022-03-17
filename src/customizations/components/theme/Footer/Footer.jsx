/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

 import React from 'react';
 import { Container, List, Segment } from 'semantic-ui-react';
 import { Link } from 'react-router-dom';
 import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
 
 import { Logo } from '@plone/volto/components';
 
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
 <div className="footersitemap">
   <div className="footercol1">
 <h2><a href="/internet">Internet</a></h2>
     <ul><li><a href="/internet/residential-business-service-plans">Service Plans</a></li>
         <li><a href="/internet/new-inquiry">Inquire About Internet</a></li>
         <li><a href="/phone">Learn About Phone</a></li>
         <li><a href="/internet/fixed-point-wireless">Fixed Point Wireless</a></li>
         <li><a href="/internet/fiber-to-the-home">Fiber to the Home</a></li>
     </ul>
 </div>
 <div className="footercol2">
 <h2><a href="/support">Support</a></h2>
   <ul><li><a href="/support/network-troubleshooting">Network Troubleshooting</a></li>
   <li><a href="/support/servers-monitoring">Servers and Monitoring</a></li>
   <li><a href="/support/terms-of-service">TOS</a></li>
   <li><a href="/support/privacy-policy">Privacy Policy</a></li>
   <li><a href="/support/open-internet-disclosures">Open Internet Disclosures</a></li></ul>
 </div>
 <div className="footercol3">
 <h2><a href="/services">Services</a></h2>
   <ul><li><a href="/billing/billing-link">Pay Your Monthly Bill</a></li>
   <li><a href="/services/network-engineering-consulting">Network Engineering & Consulting</a></li>
   <li><a href="/services/it-support">IT Support</a></li>
   <li><a href="/services/tower-climbing">Tower Climbing</a></li>
   <li><a href="/services/web-design-development">Web Design & Development</a></li></ul>
 </div>
 <div className="footercol4">
  <div className="logo"><Logo />
  <div className="slogan">"Bridging the Digital Divide"</div>
 </div>
 </div></div>
       </Segment>
       <Segment basic inverted color="grey" className="discreet">
         {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
         <div className="footerbar">
           <div className="companyinfo">
             <div className="address"><a href="https://goo.gl/maps/atsRcswvK75PHRLz8" target="_blank">128 High Street, Cresson Pa. 16630</a></div>
             <div className="email"><a href="mailto:sales@itxbb.net">sales@itxbb.net</a></div>
             <div className="phone"><a href="tel:8144722662">814-472-2662</a></div>
             <div className="social"><a href="http://www.facebook.com/itxbb" target="_blank">Connect with us on Facebook</a></div>
             <div className="officehours">Office Hours: M-F 8.30-4.30</div>
           </div>
         </div>
       </Segment>
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
 