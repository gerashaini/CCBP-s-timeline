import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`

export const ProjectTitleAndContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const ProjectTitle = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Duration = styled.p`
  color: #171f46;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 600;
  line-height: 1.2;
  margin-left: 4px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ProjectDescription = styled.p`
  color: #1e293b;
  font-size: 12px;
  font-family: 'Roboto';
  line-height: 1.5;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const VisitLink = styled.a`
  color: #0967d2;
  text-align: center;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  margin-top: 5px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
