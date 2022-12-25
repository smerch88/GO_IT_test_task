import { useState } from 'react';
import {
  StyledButton,
  CardBox,
  ImageWrapper,
  ImageFrame,
  ImageAvatar,
  LineDiv,
  BgImgWrapper,
  Ul,
  Tweets,
} from './FolowCard.styled';

const FolowCard = ({ tweets, followers, followStatus, avatar, user }) => {
  const [state, setState] = useState({
    tweets,
    followers,
    followStatus,
    avatar,
    user,
  });

  const setFollowStatus = followStatus => {
    setState(prevState => ({
      ...prevState,
      followStatus,
      followers: followStatus
        ? prevState.followers + 1
        : prevState.followers - 1,
    }));
  };

  return (
    <>
      <CardBox>
        <LineDiv></LineDiv>
        <BgImgWrapper>
          <img src={require('./pictures/bg.png')} alt="" />
        </BgImgWrapper>

        <Ul>
          <li>
            <ImageWrapper>
              <ImageFrame
                src={require('./pictures/Ellipse.png')}
                alt="frame"
                width={'92px'}
                height={'92px'}
              />
              <ImageAvatar
                width={'72px'}
                height={'72px'}
                src={require('./pictures/hanselAvatar.png')}
                alt={state.user}
              />
            </ImageWrapper>
          </li>
          <Tweets>{state.tweets} tweets</Tweets>
          <li>
            {new Intl.NumberFormat('en-US').format(state.followers)} followers
          </li>
        </Ul>
        <StyledButton
          onClick={() => setFollowStatus(!state.followStatus)}
          followStatus={state.followStatus}
        >
          {state.followStatus ? 'Following' : 'Follow'}
        </StyledButton>
      </CardBox>
    </>
  );
};

export default FolowCard;
