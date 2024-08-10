import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import CounterApp from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {

  const value = 100;

  test('debe de mostrar <CounterApp /> correctamente', () => {

    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();

  });

  test('debe de mostrar el valor por defecto de 100', () => {

    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();

  });

  test('debe de incrementar con el botón +1', () => {

    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(value + 1)).toBeTruthy();

  });

  test('debe de decrementar con el botón -1', () => {

    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(value - 1)).toBeTruthy();

  });

  test('debe de colocar el valor por defecto con el btn reset', () => {

    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('reset'));
    expect(screen.getByText(value)).toBeTruthy();

  });

  test('debe de funcionar el boton de reset', () => {

    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('-1'));
    
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect(screen.getByText(value)).toBeTruthy();

  });

});