import {render} from '@testing-library/react';

import PmDsCard from './pm-ds-card';

const pmDsCardPropsMock = {
  title: 'PM DS CARD Unit test',
  subTitle: 'Unit test',
  imageUrl: '',
  description: '',
  onClickHandler: ()=> {}
}

describe('PmDsCard', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<PmDsCard {...pmDsCardPropsMock} />);
    expect(baseElement).toBeTruthy();
  });
});
