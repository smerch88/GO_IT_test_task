import { useState, useEffect } from 'react';

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
  // Initialize state with saved state from local storage, or default values if there is no saved state
  const [state, setState] = useState(() => {
    try {
      const savedState = localStorage.getItem('state');
      if (savedState) {
        return JSON.parse(savedState);
      }
    } catch (error) {
      console.error(error);
    }
    // Default values if there is no saved state
    return {
      tweets,
      followers,
      followStatus,
      avatar,
      user,
    };
  });

  useEffect(() => {
    // Save state to local storage when the component mounts or updates
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }, [state]); // Only save state when it changes

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
