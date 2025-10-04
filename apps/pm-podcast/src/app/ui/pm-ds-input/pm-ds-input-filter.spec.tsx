import {render} from '@testing-library/react';

import PmDsInputFilter from './pm-ds-input-filter';

describe('PmDsInputFilter', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <PmDsInputFilter
        totalResults={2}
        placeholder={"pm ds inputr filter placeholder"}
        onSearchChange={()=>{}}/>
    );
    expect(baseElement).toBeTruthy();
  });
});
