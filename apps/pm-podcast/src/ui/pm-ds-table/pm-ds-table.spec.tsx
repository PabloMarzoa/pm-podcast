import {render} from '@testing-library/react';

import PmDsTable from './pm-ds-table';

const pmDsTablePropsMock = {
  headers: [],
  headersTemplateStyle: '',
  data:[],
  onRowClickHandler: ()=>{}
};

describe.todo('PmDsTable', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<PmDsTable {...pmDsTablePropsMock} />);
    expect(baseElement).toBeTruthy();
  });
});
