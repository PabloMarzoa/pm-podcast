import {render} from '@testing-library/react';

import PmDsThumbnail from './pm-ds-thumbnail';

const pmDsThumbnailPropsMock = {
  title: 'PM DS CARD Unit test',
  subTitle: 'Unit test',
  imgUrl: '',
  onThumbnailClick: ()=> {}
}

describe('PmDsThumbnail', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<PmDsThumbnail {...pmDsThumbnailPropsMock} />);
    expect(baseElement).toBeTruthy();
  });
});
