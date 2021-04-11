/**
 * @author Paul M
 * Footer component
 */

/**
 * import and using styled components for Footer
 */
import styled from 'styled-components';

const FooterStyle = styled.div`
  background: #343a40!important;
  color: #fff;
  padding: 20px 20px;
  bottom: 0;
  width: 100%;
  height: 60px;
  position: absolute;   
  `;

const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        <p className="lead">&copy; 2020 WebBookz</p>
      </footer>
    </FooterStyle>
  );
}

export default Footer;