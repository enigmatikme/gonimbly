import React from 'react';
import { LoaderContainer } from '../styles/loader.styles';

export default function Loader({timeOfDay}) {
  return (
    <LoaderContainer timeOfDay={timeOfDay}>
      <div id="ld4">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </LoaderContainer>
  )
}

