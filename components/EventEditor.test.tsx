
import React from 'react';
import { mount } from 'enzyme';
import { EventEditor } from './EventEditor';
import * as routerDependency from 'next/router';

test('add a New Event', () => {
  const pushMock = jest.fn()
  //@ts-ignore
  routerDependency.useRouter = jest.fn(() => ({ push: pushMock }))

  const mockOnFinalize = jest.fn();
  const wrapper = mount(<EventEditor event={{
    title: "",
    dateTime: new Date().toISOString(),
    location: { id: 0, name: "" },
    color: "#000"
  }} onFinalize={mockOnFinalize} />);

  wrapper.find(`input#form-title-input`).simulate('change', { target: { value: 'New Title' } })
  wrapper.find(`input#form-location-input`).simulate('change', { target: { value: 'Los Angeles, CA' } })
  wrapper.find(`#form-color-input + input`).simulate('change', { target: { value: '#e91e63' } })
  wrapper.find(`button#submit`).simulate('click')

  expect(mockOnFinalize).toBeCalledTimes(1);
  const finalizeData = mockOnFinalize.mock.calls[0][0];
  expect(finalizeData.title).toBe('New Title');
  expect(finalizeData.location.name).toBe('Los Angeles, CA');
  expect(finalizeData.color).toBe('#e91e63');

  expect(pushMock).toBeCalledTimes(1);
  expect(pushMock).toBeCalledWith('/');
});