import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import Santander from '@/pages/santander/index.vue';

describe('Santander Page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Santander);
  });

  it('renders the correct text', () => {
    // Verifica se o texto "Santander" está presente no componente
    expect(wrapper.text()).toContain('Santander');
  });

  it('renders the header correctly', () => {
    // Verifica se um elemento de título (por exemplo, h1) com o texto correto é renderizado
    const header = wrapper.find('h1');
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe('Santander');
  });
});
