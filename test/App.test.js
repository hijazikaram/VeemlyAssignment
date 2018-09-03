import React from 'react'
import Enzyme, { mount, shallow, render } from 'enzyme'
import Machine from '../src/components/Machine'
import Table from '../src/components/Table'
import AddUnits from '../src/components/AddUnits'
import AddTemp from '../src/components/AddTemperature'
import CreateMachine from '../src/components/CreateMachine'
import config from '../src/config/index'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({
  adapter: new Adapter(),
});
const machines = config.machines
describe('Machine', () => {
  const component = shallow(<Machine />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot;
  });
  it('should render child components', () => {
    expect(component.find('h1').text()).toBe('Veemly Assignment');
    expect(component.find(Table)).toHaveLength(1);
    expect(component.find(AddUnits)).toHaveLength(1);
    expect(component.find(AddTemp)).toHaveLength(1);
    expect(component.find(CreateMachine)).toHaveLength(1);
  });
});
describe('Table', () => {
  const component = render(<Table machines={machines} />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render table correctly with given machines', () => {
    expect(component.find('th')).toHaveLength(5);
    expect(component.find('td')).toHaveLength(15);
  });
});
describe('AddUnits', () => {
  const machine = mount(<Machine />);
  const create = machine.find(AddUnits)
  it('should match snapshot', () => {
    expect(create).toMatchSnapshot();
  });
  it('should change value of units', () => {
    create.find('Select').props().onChange({ target: { value: 'IDX12345' } });
    create.find('input#units').props().onChange({ target: { value: '13' } });
    create.find('Button').props().onClick();
    expect(machine.state('machines')['IDX12345'].units).toEqual(13);
  });
});
describe('AddTemp', () => {
  const machine = mount(<Machine />);
  const create = machine.find(AddTemp)
  it('should match snapshot', () => {
    expect(create).toMatchSnapshot();
  });
  it('should change value of temperature', () => {
    create.find('Select').props().onChange({ target: { value: 'IDX12345' } });
    create.find('input#temperature').props().onChange({ target: { value: '13' } });
    create.find('Button').props().onClick();
    expect(machine.state('machines')['IDX12345'].temperature).toEqual(13);
  });
 });  
describe('CreateMachine', () => {
  const machine = mount(<Machine />);
  const create = machine.find(CreateMachine);
  it('should match snapshot', () => {
    expect(create).toMatchSnapshot();
  });
  it('should create a new machine', () => {
    create.find('Button').simulate('click');
    expect(create.find('#addModal').exists()).toEqual(true);
    machine.find('TextField#name').props().onChange({ target: { value: 'Joe' } });
    machine.find('TextField#newId').props().onChange({ target: { value: '13DX124' } })
    machine.find('button#createUser').props().onClick();
    expect(Object.keys(machine.state('machines')).length).toEqual(4);
  });
});
