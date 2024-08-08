import { describe, test, expect } from '@jest/globals';
import { render } from "@testing-library/react"
import FirstApp from '../src/FirstApp';

describe('Pruebas en <App />', () => {

    test('debe de hacer match con el snapshot', () => {

        const title = 'Hello, Iron Man';
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el titulo enviado por props', () => {

        const title = 'Hello';
        const { getByText, container, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.textContent).toBe(title);
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').textContent).toBeTruthy();

    });

    test('debe mostrar el subtitulo enviado por props', () => {

        const title = 'Hello';
        const subtitle = 'World';
        const { getAllByText } = render(<FirstApp title={title} subtitle={subtitle} />);

        expect(getAllByText(subtitle).length).toBe(1)

    });

});
