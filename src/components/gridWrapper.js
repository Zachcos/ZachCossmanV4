import React from 'react';
import styled from 'styled-components';
import { color, device, font } from '../imports/variables';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'name name about'
    'current feature nav';
  min-height: 100vh;
  height: 100%;
  min-width: 100%;
  position: relative;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50vh 50vh 50vh;
    grid-template-areas:
      'name name'
      'current about'
      'feature nav';
  }
  @media ${device.phone} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 50vh);
    grid-template-areas:
      'name'
      'about'
      'current'
      'feature'
      'nav';
  }
  .hover-overlay {
    align-items: center;
    background: ${color.dark};
    bottom: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.2s ease-out;
    width: 100%;
    height: 100%;
    h2 {
      color: ${color.light};
      font-size: ${font.heading};
      font-weight: ${font.bold};
      text-transform: uppercase;
    }
  }
`;

export default function GridWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}