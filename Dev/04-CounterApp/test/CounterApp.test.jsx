import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
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

});