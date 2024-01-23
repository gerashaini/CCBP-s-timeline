import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  max-width: 1110px;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  text-align: center;
  color: #171f46;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 2.7;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.span`
  color: #171f46;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
