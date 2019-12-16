import styled from 'styled-components';
import media from './media';
import mixins from './mixins';

const Section = styled.section`
  margin: 0 auto;
  /* padding: 150px 0; */
  /* max-width: 1000px; */
  max-width: 1045.077px;
  width: 100%;
  /* padding: 164.485px 76.244px; */

  /* ${media.tablet`padding: 100px 0;`}; */
  ${media.bigDesktop`max-width: 845.475px;`};
  ${media.desktop`max-width: 696.724px;`};
  /* ${media.tablet`max-width:  696.724px;`}; */
  ${mixins.sectionPadding};
`;

export default Section;
