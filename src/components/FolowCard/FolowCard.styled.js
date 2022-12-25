import styled from 'styled-components';
import 'typeface-montserrat';

export const CardBox = styled.div`
  background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    ),
    url('./pictures/bg.png');
  background-position: top;
  background-size: cover; /* Makes the image cover the entire div element */
  background-position: center; /* Centers the image within the div element */
  background-repeat: no-repeat;
  box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.23);
  border-radius: 24px;

  height: 547px;
  width: 454px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;

  background-color: ${props => (props.followStatus ? '#EBD8FF' : '#5CD3A8')};
  color: #373737;
  padding: ${props => (props.followStatus ? '16px 47px' : '16px 66px')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 12px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 209px;
  width: 80px;
  height: 80px;
  background-color: #5736a3;
  border-radius: 50%;

  margin-bottom: 32px;
`;

export const ImageFrame = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  z-index: 1;
`;

export const ImageAvatar = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const LineDiv = styled.div`
  position: relative;
  width: 454px;
  height: 8px;
  left: 0px;
  top: 251px;

  background: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 3px #fbf8ff;
`;

export const BgImgWrapper = styled.div`
  padding-top: 38px;
  position: absolute;
`;

export const Ul = styled.ul`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: calc(29 / 24);
  color: #ebd8ff;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 32px;
`;

export const Tweets = styled.li`
  margin-bottom: 20px;
`;
